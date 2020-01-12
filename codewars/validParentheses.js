// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
// 
// Note that an empty string is also considered valid.


var isValid = function(s) {
    if(s.length==1) return false
    let next=[]
    for(let i=0;i<s.length;i++){
      s[i]=="(" ? next.push(")") : s[i]=="{" ? next.push('}') : s[i]=="[" ? next.push("]") : ""
      if(s[i]!="("&&s[i]!="{"&&s[i]!="["&&s[i]!=next.pop()){
          return false
      }
    }
    if(next.length) return false
    return true
};
