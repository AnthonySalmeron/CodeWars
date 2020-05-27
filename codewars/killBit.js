let arrayPacking=a=> Number('0b'+a.map(helper).reverse().join(''))

let helper = e => {
    let re = e.toString(2)
    while(re.length<8){
        re = '0'+re
    }
    return re
}
