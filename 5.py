import numpy as np
def createMatrix(dimensi):
    a = 1
    matrix = [] 
    for i in range(dimensi):
        row = []
        for j in range(dimensi):
            row.append(a)
            a+=1
        matrix.append(row)
    matrix = np.array(matrix)
    print(matrix)
    diag1=0
    diag2=0
    for i in range(dimensi):
        diag1+= matrix[i][i]
    for i in range(dimensi):
        diag2+= matrix[i][dimensi-i -1]
    print(diag1 * diag2)
    
createMatrix(3)