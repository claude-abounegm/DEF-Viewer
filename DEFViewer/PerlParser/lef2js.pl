#!/usr/bin/perl

my $file   = shift;
my $flag = 0;
#my $cflag = 0;

open(DATA, "<$file") or die "Couldn't open file file.txt, $!";

print "{\"cells\":{\n";
while(<DATA>){
   if ($_ =~ /MACRO\s+(\S+)/){
   		print "\t\"$1\":{";
   		$flag = 1;
   }
   elsif ($_ =~ /SIZE/ && $flag == 1){
   	$_ =~ m/SIZE\s+(\S+)\s+BY\s+(\S+)/;
   	print "\"w\":$1, \"h\":$2},\n";
   }
}
print "}}"


