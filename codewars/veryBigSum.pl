#
# Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
#
# Function Description
#
# Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
#
# aVeryBigSum has the following parameter(s):
#
#     ar: an array of integers .
#
# Input Format
#
# The first line of the input consists of an integer
# .
# The next line contains
#
# space-separated integers contained in the array.
#
# Output Format
#
# Print the integer sum of the elements in the array.
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
