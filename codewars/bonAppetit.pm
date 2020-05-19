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
