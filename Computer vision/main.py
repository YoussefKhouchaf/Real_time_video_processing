import cv2
import numpy as np


from lib.Detector import NanoFace
from lib.Bluring import blur_zone

from urllib import request

#Fonction image_test : fonction de test pour le floutage d'éléments à partir de photo
#Entrée : a = module IA
#Sortie : None
def image_test(a):
    imgs = ['https://ultralytics.com/images/zidane.jpg']

    req = request.urlopen(imgs[0])
    arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, -1) # 'Load it as it is'

    bb = a.predict(img)
    
    for b in bb[0]:
        cv2.rectangle(img,(b[0],b[1]),(b[2],b[3]),(0,255,0),1)
        blur_zone(img, b[0],b[1],b[2],b[3])

    cv2.imshow("final",img)

    cv2.waitKey(0)

#Fonction cam_test : fonction de test pour le floutage d'éléments à partir de la webcam 
#Entrée : a = module IA
#Sortie : None
def cam_test(a):
    # Video
    vid = cv2.VideoCapture(0)
    vid.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    vid.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

    while (True):

        ret, frame = vid.read()        

        # Inference
        bb = a.predict(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

        for b in bb[0]:
            cv2.rectangle(frame,(b[0],b[1]),(b[2],b[3]),(0,255,0),1)
            blur_zone(frame, b[0],b[1],b[2],b[3])
        
        cv2.imshow('orginal', frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    vid.release()
    cv2.destroyAllWindows()
    


if __name__=='__main__':
    a = NanoFace()

    # image_test(a)
    cam_test(a)