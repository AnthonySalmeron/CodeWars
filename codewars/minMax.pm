sub miniMaxSum {
    my @args = @{$_[0]};
    @args = sort {$a <=> $b} @args;
    my $min =0;
    my $max =0;
    foreach (0..3){
        $min+= $args[$_];
    }
    $max = $min - $args[0] + $args[4];
    print $min," ",$max;
}

# Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of of elements. 
