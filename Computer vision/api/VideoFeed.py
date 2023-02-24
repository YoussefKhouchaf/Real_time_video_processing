import cv2
from threading import Thread, Event

from lib.Detector import NanoFace
from lib.Bluring import blur_zone

a = NanoFace()
class VideoFeed(Thread):
    def __init__(self, id, url, traitement):
        if(url == "0"):
            url = 0

        self.id = id
        self.url = url
        self.traitement = traitement
        self.stop_event = Event()
        super(VideoFeed, self).__init__()

    def run(self):
        cap = cv2.VideoCapture(self.url)
        while not self.stop_event.is_set():
            ret, frame = cap.read()

            if(ret):

                if (self.traitement == "1"):
                    bb = a.predict(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

                    for b in bb[0]:
                        cv2.rectangle(frame, (b[0], b[1]), (b[2], b[3]), (0, 255, 0), 1)
                        blur_zone(frame, b[0], b[1], b[2], b[3])

                ret, jpeg = cv2.imencode('.jpg', frame)
                jpeg_bytes = jpeg.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + jpeg_bytes + b'\r\n\r\n')

    def stop(self):
        self.stop_event.set()
