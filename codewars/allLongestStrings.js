function allLongestStrings(inputArray) {
    let longest = 0,out
    inputArray.forEach(el=>{
        if(el.length>longest){
            longest=el.length
            out=[el]
        }else if(el.length===longest){
            out.push(el)
        }
    })
    return out
}
