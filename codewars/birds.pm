sub migratoryBirds {
    my ($arr) = @_;
    my %vals = ();
    foreach (@$arr){
        if($vals{$_}){
            $vals{$_}++;
        }else{
            $vals{$_} = 1;
        }
    }
    my $max = 0;
    my $maxVal = 0;
    foreach my $key (keys %vals){
        if($vals{$key}>$max){
            $max = $vals{$key};
            $maxVal = $key;
        }elsif($vals{$key}==$max && $key<$maxVal){
            $maxVal = $key;
        }
    }
    return $maxVal;
}
