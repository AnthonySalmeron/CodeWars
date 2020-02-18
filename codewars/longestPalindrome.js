// var longestPalindrome = function(s) {//medium speed one, this keeps track of every occurence of each letter to try to find longest
//     let letters = {}
//     let possiblePalindromes = new Set
//     for(let i=0;i<s.length;i++){
//         if(s[i] in letters){
//             letters[s[i]].forEach(el=>{
//                 possiblePalindromes.add(s.slice(el,i+1))
//             })
//             letters[s[i]].push(i)
//         }else{
//             letters[s[i]] = [i]
//         }
//     }
//     let longest = ""
//     possiblePalindromes.forEach(el=>{
//         if(el==el.split('').reverse().join('')&&el.length>longest.length) longest = el
//     })
//     if(!longest.length&&s.length) longest = s[0]
//     return longest
// };
// var longestPalindrome = function(s){//recursive variant, basically trying to find all palindromes by using recursive two pointer system
//     let copyS = 0,copyE=s.length-1
//     while(s[copyS]==s[copyE]&&copyS<copyE){
//         copyS++
//         copyE--
//     }
//     let right= '',left='',self = ''
//     if(copyE-copyS>0){
//         right = longestPalindrome(s.slice(1))
//         left = longestPalindrome(s.slice(0,s.length-1))
//     }else{
//         self = s
//     }
//     let longest = self
//     if(left.length>longest.length) longest =left
//     if(right.length>longest.length)longest = right
//     return longest
// }


var longestPalindrome = function(s){
    let longest = ""
    for(let i=0;i<s.length;i++){
        let str = s[i]
        let left  = i-1,right = i+1
        while(s[left]==s[right]&&s[left]){
            str = s[left]+str+s[right]
            left--
            right++
        }
        if(str.length>longest.length) longest = str
        if(s[i]==s[i-1]){
            let st = s[i-1]+ s[i], lef = i-2, rig =i+1
            while(s[lef]==s[rig]&&s[lef]){
               st = s[lef]+st+s[rig]
               lef--
               rig++
            }
            if(st.length>longest.length) longest = st
        }
    }
    return longest
}
