sub staircase {
    my $str='';
    my $width = shift;
    foreach (1..$width){
        my $temp = '#'x$_;
        $temp = ' '.$temp while(length($temp)<$width);
        $temp.="\n";
        $str.=$temp;
    }
    print $str;
}
# Consider a staircase of size
#
# :
#
#    #
#   ##
#  ###
# ####
#
# Observe that its base and height are both equal to
#
# , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
#
# Write a program that prints a staircase of size
.
