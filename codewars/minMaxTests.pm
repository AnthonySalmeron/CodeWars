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
