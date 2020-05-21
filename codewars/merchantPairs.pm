sub sockMerchant {
    my ($n,$socks) = @_;
    my $maxPairs = int($n/2);
    my $pairs=0;
    my $i = 0;
    my %matches = ();
    while($pairs<$maxPairs&&$i<$n){
        if($matches{$socks->[$i]}){
            delete $matches{$socks->[$i]};
            $pairs++;
        }else{
            $matches{$socks->[$i]} = 1;
        }
        $i++
    }
    return $pairs;
}
