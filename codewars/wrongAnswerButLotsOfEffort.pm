use Set::Scalar;
sub birthday {
    my ($s,$d,$m) = @_;
    my @s = @$s;
    my $combinations = Set::Scalar->new;
    _helper(0,'',0,\@s,$combinations,$d,$m);
    my $number =0;
    for my $e ($combinations->elements){
        $number++;
    }
    return $number;
}
sub _helper {
    my ($count,$used,$total,$s) = @_;
    print $count, "\n" , $used, "\n", $total, "\n", $s, "\n";
    my @t = @$s;
    if($count==$_[6]){
        if($total==$_[5]){
            my @possible = ();
            my @array = split(//,$used);
            foreach(@array){
                push @possible, $t[$_];
            }
            my $poss = join("",sort {$a <=> $b} @possible);
            print $poss, "poss",$used, "\n";
            $_[4]->insert($poss);
        }
        return;
    }
    for(my $i=0;$i<scalar @t;$i++){
        next if $used=~$i;
        next if $total+ $t[$i] > $_[5];
        _helper($count+1 , $used.$i, $total+ $t[$i], \@t, $_[4],$_[5],$_[6]);
    }
}
# I TRIED CHOOSING ANY COMBO WITHIN THE ARRAY BUT IT WAS MEANT TO BE ONLY THE ADJACENT COMBOS
# Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.
#
# Consider the chocolate bar as an array of squares, s=[2 2 1 3 2]
# . She wants to find segments summing to Ron's birth day d=4 , with a length equalling his birth month,m=2 . In this case, there are two segments meeting her criteria: [2 2] and  [1 3].
