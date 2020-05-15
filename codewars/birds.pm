sub migratoryBirds {
    my ($arr) = @_;
    my %vals = ();
    foreach (@$arr){
        if($vals{$_}){
            $vals{$_}++;
        }else{
            $vals{$_} = 1;
        }
    }
    my $max = 0;
    my $maxVal = 0;
    foreach my $key (keys %vals){
        if($vals{$key}>$max){
            $max = $vals{$key};
            $maxVal = $key;
        }elsif($vals{$key}==$max && $key<$maxVal){
            $maxVal = $key;
        }
    }
    return $maxVal;
}
# You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.
