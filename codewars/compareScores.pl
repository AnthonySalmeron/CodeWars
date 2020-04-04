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

You're given two arrays, they each contain the scores on given tests by two people. Each position in both arrays corresponds to the same tests they took.
If student A scored higher on a test, give them a point, if student B scored higher, give them a point
Return an array that has the form (score student A, score student B)
