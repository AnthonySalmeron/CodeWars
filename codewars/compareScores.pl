sub compareTriplets {
    my @second = @{pop @_};
    my @first =  @{pop @_};
    my $fir = 0;
    my $sec = 0;
    for(my $i=0;$i<scalar @second;$i++){
        if($first[$i]>$second[$i]){
            $fir++;
        }elsif($second[$i]>$first[$i]){
            $sec++;
        }
    }
    my @ret = ($fir,$sec);
    return @ret;
}
