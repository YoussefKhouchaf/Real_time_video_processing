import cv2

def blur_zone(image,x1,y1,x2,y2):


    # X et Y des deux points (haut gauche et bas droit) Récupéré par la detection
    topLeft_X = x1
    topLeft_Y = y1 
    bottomRight_X = x2
    bottomRight_Y = y2

    # Creation de la zone de floutage
    topLeft = (topLeft_X, topLeft_Y)
    bottomRight = (bottomRight_X, bottomRight_Y)
    x, y = topLeft[0], topLeft[1]
    w, h = bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1]

    # Floutage
    ROI = image[y:y+h, x:x+w]
    blur = cv2.GaussianBlur(ROI, (51,51), 0) 

    # Insertion de la zone floutée dans l'image
    image[y:y+h, x:x+w] = blur

    #cv2.imshow('blur', blur)
    #cv2.imshow('image', image)
    #cv2.waitKey()

    return image


image = cv2.imread('1.png')
cv2.imshow('image', blur_zone(image,200,200,500,500))
cv2.waitKey()