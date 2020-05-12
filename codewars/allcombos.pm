sub divisibleSumPairs {
    my ($n,$k,$arr) = @_;
    my $counter = 0;
    for(my $i = 0;$i < $n-1; $i++){
        for(my $j = $i+1 ; $j < $n ; $j++){
            $counter++ unless(( $arr->[$i] + $arr->[$j] ) % $k);
        }
    }
    return $counter;
}
