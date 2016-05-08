#!/usr/bin/perl

my $file   = shift;
my $pflag = 0;
my $nflag = 0;
my $cflag = 0;
my $dflag = 0;

open(DATA, "<", "file.txt") or die "Couldn't open file file.txt, $!";

print "var defJSON = {\n";

my $pin_line = "";

while(<DATA>) {
	chomp;

	if ($_ =~ /DIEAREA/) {
		$_ =~ m/\(\s+(\S+)\s+(\S+)\s+\)\s+\(\s+(\S+)\s+(\S+)\s+\)/;
		print "die:{x1: $1, y1: $2, x2: $3, y2: $4},\n";
		$dflag = 1;
	}
	elsif ($_ =~ /COMPONENTS/ && $cflag == 0) {
		$cflag = 1;
		print "\ncells: [";
	}
	elsif ($_ =~ /COMPONENTS/ && $cflag == 1) {
		$cflag=0;
		print "],\n";
	}
	elsif ($cflag == 1) {
		# - DFFSR_10 DFFSR + PLACED ( 80.0 100 ) FS ;
		$_ =~ m/\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/;
		print "{ name:\"$1\", type:\"$2\",";
		print "x:$3, y:$4 },\n"
	}
	elsif ($_ =~ /PINS/ && $pflag == 0){ 
		$pflag = 1;
		print "pins: [";
	}
	elsif ($_ =~ /PINS/ && $pflag == 1){
		$pflag = 0;
		print "],"
	}
	elsif($_ =~ /\;/ && $pflag == 1) {
		$pin_line = $pin_line . $_;
		#print "$pin_line\n";
		#- counter<4> + NET counter<4> + DIRECTION INPUT + USE SIGNAL    + LAYER metal2 ( -30 -30 ) ( 30 30 ) + FIXED ( 2397 30 ) N ;
		
		$pin_line =~ m/NET\s+(\S+)/;
		print"{name:\"$1\",";
		$pin_line =~ m/LAYER\s+(\S+)\s+\(\s*(\S+)\s+(\S+)\s*\)\s*\(\s*(\S+)\s+(\S+)\s*\)/;
		print "layer:\"$1\",x1:$2, y1:$3, x2:$4, y2:$5,";
		if ($pin_line =~ /PLACED/) {
			$pin_line =~ m/PLACED\s+\(\s*(\S+)\s+(\S+)\s*\)\s+(\S+)\s+/;
			print "x:$1, y:$2, ori:\"$3\"},\n";
		}
		elsif ($pin_line =~ /FIXED/) {
			$pin_line =~ m/FIXED\s+\(\s*(\S+)\s+(\S+)\s*\)\s+(\S+)\s+/;
			print "x:$1, y:$2, ori:\"$3\"},\n";
		}
		$pin_line = "";
	}
	elsif($pflag == 1){
		$pin_line = $pin_line . $_;
	}
	elsif ($_ =~ /NETS/ && $nflag == 0) {
		$nflag = 1;
		print "\nnets:[";
	}
	elsif($_ =~ /NETS/ && $nflag == 1) {
		$nflag = 0;
		print "],\n";
	}
	elsif($_ =~ /-\s+(\S+)/ && $nflag == 1) {
		print "{name:\"$1\",connections:[";
	}
	elsif($_ =~ /\(\s+(\S+)\s+(\S+)\s+\)/ && $nflag == 1) {
		print "{name: \"$1\", pin: \"$2\"},";
		
		if($_ =~ /\;/) {
			print "]},\n";
		}
	}
}

if($dflag == 0) {
	print "die: {x1: 0, y1: 0, x2: 0, y2: 0}\n";
}

print "}";