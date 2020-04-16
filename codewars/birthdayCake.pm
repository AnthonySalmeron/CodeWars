sub birthdayCakeCandles {
    my @candles = @{$_[0]};
    my $max =0;
    my $count=0;
    foreach (@candles){
        $_>$max ? $count = 1 : $max==$_ ? $count++ : ();
         $max = $_ if($_>$max);
    }
    return $count;
}
