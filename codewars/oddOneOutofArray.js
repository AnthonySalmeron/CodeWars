//Given an array where all numbers inside of it except one occur twice, find the one number that occurs once

//my solution
var singleNumber = function(nums) {
    let trackingSet = new Set
    for(let i of nums){
        let size = trackingSet.size
        trackingSet.add(i)
        if(trackingSet.size===size){
            trackingSet.delete(i)
        }
    }
    for(let j of trackingSet.values()){
        return j
    }
};

//somebody else's genius
// var singleNumber = function(nums){
//     let a =0
//     for(let i of nums){
//         a^=i
//     }
//     return a
// }
// Concept

//     If we take XOR of zero and some bit, it will return that bit
//         a⊕0=aa \oplus 0 = aa⊕0=a
//     If we take XOR of two same bits, it will return 0
//         a⊕a=0a \oplus a = 0a⊕a=0
//     a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b

// So we can XOR all bits together to find the unique number.
