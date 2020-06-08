// let rangeBitCount = (a, b) => Array.from({ length: (b - a) /1 + 1}, (_, i) => a + i).reduce((sum,e)=> sum + e.toString(2).match(/1/g).length);
let rangeBitCount = (a,b) => {
    let array = Array.from({ length: (b - a) /1 + 1}, (_, i) => a + i)
    array.forEach((e,i)=>{
        array[i] = e.toString(2)
    })
    array.forEach((e,i)=> array[i]= e.match(/1/g) ? e.match(/1/g).length : 0)
    return array.reduce((sum,curr)=> sum + curr)

}
// 1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1
// 1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1
//definitely a pattern with how many times they show up
// distance between 1's is 2X+1 where x is the number of 1's so far

// perl
sub rangeBitCount{
	my ($a, $b) = @_;
    my $res = 0;
    foreach ($a..$b){
        while ($_ > 0) {
            $res += $_ & 1;
            $_ = ($_ >> 1);
        }
    }
    return $res;
}
