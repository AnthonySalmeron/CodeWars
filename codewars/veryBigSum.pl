sub aVeryBigSum {
    @_ = @{$_[0]};
    my @str = split(//,(pop @_));
    my $carry=0;
    my $total = '';
    while(scalar @_){
        my @num = split(//,(pop @_));
        my $new ='';
        while(scalar @num && scalar @str){
            my $add = (pop @num) + (pop @str)+$carry;
            $carry=0;
            if($add>9){
                $carry = int($add/10);
                $new= ($add%10).$new;
            }else{
                $new = $add.$new;
            }
        }
        if($carry){
            my @remain = (scalar @num)? @num : (scalar @str) ? @str : ();
            my @carr = split(//,$carry);
            my $addition = '';
            while(scalar @remain && scalar @carr){
                my $mini  = (pop @remain) + (pop @carr);
                if($mini>9){
                    push @carr, int($mini/10);
                    $addition = ($mini%10).$addition;
                }else{
                    $addition = $mini.$addition;
                }
            }
            while(scalar @carr){
                $addition = (pop @carr).$addition;
            }
            while(scalar @remain){
                $addition = (pop @remain).$addition;
            }
            $new = $addition.$new;
            $carry=0;
        }else{
             my @remain = (scalar @num)? @num : (scalar @str) ? @str : ();
             while(scalar @remain){
                $new = (pop @remain).$new;
            }
        }
        $total = $new;
        @str = split(//,$new);
    }

    return $total;
}
