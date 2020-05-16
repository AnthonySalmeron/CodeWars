sub dayOfProgrammer {
    my $year = shift;
    my $julian = $year < 1918;
    my $first = $year % 400 == 0;
    my $second = !($year % 4);
    my $third = $year % 100 != 0;
    my $return1 = '13.09.';
    my $return2 = '12.09.';
    my $return3 = '26.09.1918';
    if($julian){
        if($second){
            return $return2 . $year;
        }
        return $return1 . $year;
    }elsif($first || ($second && $third)){
        return $return2 . $year;
    }elsif($year==1918){
        return $return3;
    }else{
        return $return1 . $year;
    }
}
