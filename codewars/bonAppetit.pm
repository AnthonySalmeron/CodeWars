sub bonAppetit {
my ($bill,$k,$b) = @_;
$bill->[$k]=0;
my $total = 0;
foreach (@$bill){
    $total+= $_;
}
if($total/2 == $b){
    print 'Bon Appetit';
}else{
    print ($b - $total/2);
}
}

# Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
# k is the index of the allergy item, b is the amount paid already
