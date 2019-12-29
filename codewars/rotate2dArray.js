//Given an nXn 2d array, rotate it 90 degrees clockwise

function rotateImage(a) {
    let n = a.length
    let newArr = []
    for(let k=0;k<n;k++){
        newArr[k]=[]
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            newArr[j][(n-1)-i] = a[i][j]
        }
    }
    return newArr
}
