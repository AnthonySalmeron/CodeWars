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
// solution with O(1) space complexity
function rotateImage(a) {
    a.reverse()
    for(let i=0;i<a.length;i++){
        for(let j =i;j<a.length;j++){
            [a[i][j],a[j][i]] = [a[j][i],a[i][j]]
        }
    }
    return a

}
