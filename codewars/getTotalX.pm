use List::Util qw( max min );
sub getTotalX {
    my @arr2 = @{pop @_};
    my @arr1 = @{pop @_};
    # all the integers have to at least be divisible by the max of arr1
    my $max = max @arr1;
    #integers cannot be bigger than smallest of arr2
    my $min = min @arr2;
    my @possibles = ();
    for(my $i = $max;$i <= $min; $i+=$max){
        print $i,"\n";
        my $product = 1;
        foreach(@arr1){
            if($i%$_ != 0){
                $product = 0;
                last;
            }
        }
        push @possibles, $i if($product);
    }
    foreach my $j (@arr2){
        @possibles = grep { $j % $_ == 0 } @possibles;
    }
    return scalar @possibles;
}
