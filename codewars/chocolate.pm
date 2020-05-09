sub birthday {
    my ($s,$d,$m) = @_;
    my @t = @$s;
    my $combinations =0;
    my $j = $m-1;
    for(my $i=0;$j < scalar @t; $i++){
        my $total = 0;
        foreach($i..$j){
            $total+= $t[$_];
        }
        $combinations++ if $total==$d;
        $j++;
    }
    return $combinations;
}
# Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.
