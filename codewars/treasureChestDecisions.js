var knapsackLight=(value1, weight1, value2, weight2, maxW) =>{
    if(maxW >= weight1+weight2){
        return value1+value2
    }else if(maxW>= weight1){
        if(maxW>=weight2){
            return Math.max(value1,value2)
        }else{
            return value1
        }
    }else if(maxW>=weight2){
        return value2
    }else return 0
}
