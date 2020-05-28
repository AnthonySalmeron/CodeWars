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
