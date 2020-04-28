sub kangaroo {
    my ($x1,$v1,$x2,$v2) = @_;
    my $y;
    use Try::Tiny;
    try{
        my $intmatch = qr/^\d+\z/;
        $y = ($x2-$x1)/($v1-$v2);
        if($y>=0 && $y=~$intmatch){
            return 'YES'
        }
        return 'NO';
    }
    catch{ #in case of dividing by zero
        return 'NO';
    }
}
