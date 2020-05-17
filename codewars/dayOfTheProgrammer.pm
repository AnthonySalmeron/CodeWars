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
# Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the day of the year) during a year in the inclusive range from to
#
# .
#
# From
# to , Russia's official calendar was the Julian calendar; since they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in , when the next day after January was February . This means that in , February was the
#
# day of the year in Russia.
#
# In both calendar systems, February is the only month with a variable amount of days; it has
# days during a leap year, and days during all other years. In the Julian calendar, leap years are divisible by ; in the Gregorian calendar, leap years are either of the following:
