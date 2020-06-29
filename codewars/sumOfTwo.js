function sumOfTwo(a, b, v) {
    let obj = {},t=false
    a.forEach(i => obj[v-i]=1)
    b.forEach(e => obj[e] ?  t = true : '')
    return t
}

// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.


// perl
// sub sumOfTwo {
// 	my ($a, $b, $v) = @_;
// 	my %hash = ();
// 	foreach (@$a){
// 		$hash{$v-$_} = 1;
// 	}
// 	foreach (@$b){
// 		return 1 if $hash{$_};
// 	}
// 	return 0;
// }

// python
// def sumOfTwo(a, b, v):
//     dict = {}
//     for x in a:
//         dict[v-x] = 1
//     for i in b:
//         if dict.get(i):
//             return True
//     return False
