// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.
// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.
// Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

function isCryptSolution(crypt, solution) {
    if(solution.length==1&&solution[0][1]=="0"&&crypt[0].length==1&&crypt[1].length==1)return true//edge cases
    let val3="",val2="",val1="",solutions= new Map()
    for(let i=0;i<solution.length;i++){
        solutions.set(solution[i][0],solution[i][1])
    }
    if(solutions.get(crypt[0][0])=="0"||solutions.get(crypt[1][0])=="0"){//edges
        if(crypt[0].length>1||crypt[1].length>1){
            return false
        }
    }
    if(solutions.get(crypt[2][0])=="0") return false //edge
    for(let j=0;j<crypt[2].length;j++){
        val3+=solutions.get(crypt[2][j])
    }
    for(let k=0;k<crypt[1].length;k++){
       val2+=solutions.get(crypt[1][k])
    }
    for(let k=0;k<crypt[0].length;k++){
       val1+=solutions.get(crypt[0][k])
    }
    if(Number(val3)!=(Number(val1)+Number(val2))) return false
    return true
}
