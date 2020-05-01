use List::Util qw( max min );
sub getTotalX {
    my @arr2 = @{pop @_};
    my @arr1 = @{pop @_};
    # all the integers have to at least be divisible by the max of arr1
    my $max = max @arr1;
    #integers cannot be bigger than smallest of arr2
    my $min = min @arr2;
    my @possibles = ();
    for(my $i = $max;$i <= $min; $i+=$max){
        my $product = 1;
        foreach(@arr1){
            if($i%$_ != 0){
                $product = 0;
                last;
            }
        }
        push @possibles, $i if($product);
    }
    foreach my $j (@arr2){
        @possibles = grep { $j % $_ == 0 } @possibles;
    }
    return scalar @possibles;
}

# You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:
#
#     The elements of the first array are all factors of the integer being considered
#     The integer being considered is a factor of all elements of the second array
#
# These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.
#
# For example, given the arrays
# and , there are two numbers between them: and . , , and for the first value. Similarly, , and ,
#
# .
#
# Function Description
#
# Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.
#
# getTotalX has the following parameter(s):
#
#     a: an array of integers
#     b: an array of integers
#
# Input Format
#
# The first line contains two space-separated integers,
# and , the number of elements in array and the number of elements in array .
# The second line contains distinct space-separated integers describing where .
# The third line contains distinct space-separated integers describing where .
