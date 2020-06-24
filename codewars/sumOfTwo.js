function sumOfTwo(a, b, v) {
    let obj = {},t=false
    a.forEach(i => obj[v-i]=1)
    b.forEach(e => obj[e] ?  t = true : '')
    return t
}

// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
