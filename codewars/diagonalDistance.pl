sub diagonalDifference {
    my @array= @{$_[0]};
    my $sum1= 0;
    my $sum2= 0;
    for(my $var=0;$var<scalar @array;$var++){
        my $var2 = -1*$var - 1;
        $sum1+= $array[$var]->[$var];
        $sum2+= $array[$var2]->[$var];
    }
    return abs($sum1-$sum2);
}
# Given a square matrix, calculate the absolute difference between the sums of its diagonals.
