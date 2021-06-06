$(function() {
	let r =Math.floor(Math.random() * 100);
	let r1 = r % 10;// １の位の数値
	let r10 = parseInt(r / 10);
	let singo = 
	[
		'1110111',
		'0000011',
		'0111110',
		'0011111',
		'1001011',
		'1011101',
		'1111101',
		'1010011',
		'1111111',
		'1011111'
	];
	let stick10 = [$('#s1'), $('#s2'), $('#s3'), $('#s4'), $('#s5'), $('#s6'), $('#s7')];
	let stick1 = [$('#s11'), $('#s12'), $('#s13'), $('#s14'), $('#s15'), $('#s16'), $('#s17')];
	for(let i=0; i<7; i++) {
		if(singo[r10].charAt(i) == 1) {
			stick10[i].css('background-color', '#150c08');
		}
	}
	for(let i=0; i<7; i++) {
		if(singo[r1].charAt(i) == 1) {
			stick1[i].css('background-color', '#150c08');
		}
	}
});

