sub plusMinus {
    @_ = @{$_[0]};
    my $positives = 0;
    my $negatives =0 ;
    my $zeroes = 0;
    foreach (@_){
        $zeroes++ if($_==0);
        $negatives++ if($_<0);
        $positives++ if($_>0);
    }
    my @array = (sprintf("%.6f", $positives/@_),sprintf("%.6f", $negatives/@_),sprintf("%.6f", $zeroes/@_));
    my $arr = \@array;
    #print because the compiler on hackerrank wants this format instead of a return
    print $_,"\n" foreach(@{$arr});
}
