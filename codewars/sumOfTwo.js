function sumOfTwo(a, b, v) {
    let obj = {},t=false
    a.forEach(i => obj[v-i]=1)
    b.forEach(e => obj[e] ?  t = true : '')
    return t
}
