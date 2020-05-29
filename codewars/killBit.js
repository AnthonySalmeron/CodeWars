let arrayPacking=a=> Number('0b'+a.map(helper).reverse().join(''))

let helper = e => {
    let re = e.toString(2)
    while(re.length<8){
        re = '0'+re
    }
    return re
}

//different perl solution
sub arrayPacking {
	my ($a) = @_;
	my $ret = 0;
	for(my $i=0;$i<scalar @$a;$i++){
		$ret+= $a->[$i] << 8*$i;
	}
	return $ret;
}
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

    The first element of the array occupies the first 8 bits of M;
    The second element occupies next 8 bits, and so on.

Return the obtained integer M.
