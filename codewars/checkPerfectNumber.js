var checkPerfectNumber = function(num) {
    if (num === 0) return false;
    let divisors = [],sum=0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    return sum === num;
};
