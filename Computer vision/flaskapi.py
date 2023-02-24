import threading
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import cv2

from api.VideoFeed import VideoFeed
from lib.Detector import NanoFace

app = Flask(__name__)
a = NanoFace()
CORS(app, resources={r"/*": {"origins": "*"}})
recording = threading.Event()
threads = {}

# /video_feed/1?url=0&traitement=0

def record_video(recording, url):
    """
    Fonction pour lancer l'enregistrement vidéo
    """
    cap = cv2.VideoCapture(url)
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter('output.avi', fourcc, 20.0, (640, 480))
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        if recording.is_set():
            out.write(frame)
    cap.release()
    out.release()

@app.route('/start_recording', methods=['POST'])
def start_recording():
    """
    Démarre l'enregistrement de la vidéo
    """
    data = request.get_json()
    global recording
    url = data.get("url")

    if(format(url) == "0" ):
        url = 0

    recording.set()
    threading.Thread(target=record_video, args=(recording, url)).start()
    return jsonify({"message": "Enregistrement démarré"})

@app.route('/stop_recording')
def stop_recording():
    """
    Arrête l'enregistrement de la vidéo
    """
    global recording
    recording.clear()
    return jsonify({"message": "Enregistrement arrêté"})

@app.route('/log')
def log():

    nbThreadsActifs = threading.active_count()
    data = {"Threads actifs : ": nbThreadsActifs, "threads": [] }

    # for threadtemp in threading.enumerate():
    #     if threadtemp.is_alive():
    #         threadtemp.join()

    for i, threadtemp in enumerate(threading.enumerate()):
        info = f"Thread {i} est en cours d'exécution : {threadtemp.is_alive()}"
        data["threads"].append(info)
    return data

@app.route('/video_feed/<int:feed>')
def video_feed(feed):
    # Start the video feed thread

    url = request.args.get("url")
    traitement = request.args.get("traitement")
    print(traitement)
    thread = VideoFeed(feed, url, traitement)
    thread.start()
    threads[feed] = thread

    return Response(thread.run(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/stop_feed/<int:feed>')
def stop_feed(feed):
    # Stop the video feed thread
    thread = threads.get(feed)
    if thread is not None:
        thread.stop()
        del threads[feed]

    return '', 204


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
