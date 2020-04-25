sub countApplesAndOranges {
    my ($s,$t, $a, $b, $apples, $oranges) = @_;
    my @res = (0,0);
    foreach (@$apples){
        my $pos = $_ + $a;
        $res[0]++ if ($pos>=$s && $pos<=$t);
    }
    foreach (@$oranges){
        my $pos = $_ + $b;
        $res[1]++ if ($pos>=$s && $pos<=$t);
    }
    print $res[0],"\n",$res[1];
}
