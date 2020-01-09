var addDigits = n => String(n).split('').reduce((sum,current)=>sum+Number(current),0)//must include initial here otherwise it will take the initial as the original string version of arr[0] and type coerce the rest into strings
//breakdown:
//number is turned into string
//string is broken into array of characters
//array is looped over by and each value is added together, the starting value was 0
//arrow function and one line means implicit return
