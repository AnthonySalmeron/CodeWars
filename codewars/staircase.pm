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
