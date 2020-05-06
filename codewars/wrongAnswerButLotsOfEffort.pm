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
