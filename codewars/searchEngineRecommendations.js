// Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
//
// Return list of lists of the suggested products after each character of searchWord is typed.
var suggestedProducts = function(products, searchWord) {
    products.sort()
    let curr ="",out=[]
    for(let i of searchWord){
        curr+=i
        products=products.filter(word=>word.slice(0,curr.length)===curr)
        out.push(products.slice(0,3))
    }
    return out
};
