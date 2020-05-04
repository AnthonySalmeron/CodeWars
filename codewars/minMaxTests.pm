sub breakingRecords {
    my @scores = @{shift @_};
    my $min = shift @scores;
    my $max = $min;
    my $minbreak=0;
    my $maxbreak=0;
    foreach(@scores){
        if($_<$min){
            $minbreak++;
            $min = $_;
        }elsif($_>$max){
            $maxbreak++;
            $max=$_;
        }
    }
    return ($maxbreak,$minbreak)
}

# You're given a series of scores for tests, your first score is the baseline for highest and lowest score. Return the number of times
# you break the highest and lowest score
