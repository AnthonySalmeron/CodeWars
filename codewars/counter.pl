# Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
#
# Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
#
# are acceptable.
#
# For example, given the array
# there are elements, two positive, two negative and one zero. Their ratios would be , and
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
