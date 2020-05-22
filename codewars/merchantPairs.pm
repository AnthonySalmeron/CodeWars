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
# John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
