sub simpleArraySum {
    my @arg = @{$_[0]};
    my $total = 0;
    foreach (@arg){
        $total+=$_;
    }
    return $total;
}
