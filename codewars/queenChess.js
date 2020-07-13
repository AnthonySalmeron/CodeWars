// You will be given a square chess board with one queen and a number
// of obstacles placed on it. Determine how many squares the queen can
// attack. 
function queensAttack(n, k, x, y, obstacles) {
    // obj for easier querying of obstacles
    let obsObj = {}
    obstacles.forEach(el=>{
        obsObj[el] = 1
    })
    let directions = [
        [1,1], //northeast
        [1,-1], //southeast
        [1,0], //east
        [-1,0], //west
        [0,1], //north
        [0,-1], //south
        [-1,1], //northwest
        [-1,-1], //southwest
    ]
    let total = 0
    directions.forEach(i=>{
        let j = i[0],k=i[1]
        total+= checkDirection(j,k,obsObj,x,y,n)
    })
    return total
}

function checkDirection(xAdd,yAdd,obs,startX,startY,n){
    let count = 0
    if(xAdd>0&&yAdd>0){ // going northeast
        while(startX<n&&startY<n){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd>0&&yAdd<0){ // southeast
        while(startX<n&&startY>1){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd<0&&yAdd>0){ // northwest
        while(startX>1&&startY<n){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd<0&&yAdd<0){ // southwest
        while(startX>1&&startY>1){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd==0&&yAdd>0){// north
        while(startY<n){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd==0&&yAdd<0){// south
        while(startY>1){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd>0&&yAdd==0){// east
        while(startX<n){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }else if(xAdd<0&&yAdd==0){// west
        while(startX>1){
            let x = startX + xAdd, y = startY + yAdd
            if(!obs[[x,y]]){
                startX = x
                startY = y
                count++
            }else{
                break
            }
        }
    }
    return count
}
