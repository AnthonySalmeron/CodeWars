sub pageCount {
    my ($n,$p) = @_;
    return 0 if ($p==$n || $p==1);
    my $left = int($p/2);
    my $right = int(($n-$p)/2) + ((($n % 2 == 0)&&($p % 2 != 0)) ? 1 : 0);
    return $right<$left ? $right : $left;
}
# Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.
#
# pageCount has the following parameter(s):
#
#     n: the number of pages in the book
#     p: the page number to turn to
