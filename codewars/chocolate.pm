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
