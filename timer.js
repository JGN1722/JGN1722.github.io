/**
* JS translation of my PureBasic library
* (RealDate repo on my github)
*/

class RealDate {
	constructor (y, m, d, h, i, s) {
		this.y = y;
		this.m = m;
		this.d = d;
		this.h = h;
		this.i = i;
		this.s = s;
	}
}

function pad(x, n=2) {
	if (x > 10) {
		return String(x);
	} else {
		s = String(x);
		while (s.length != n) {
			s = '0' + s;
		}
		return s;
	}
}

function StringOfRealDate(d) {
	s1 = pad(d.d) + '/' + pad(d.m) + '/' + pad(d.y, 4);
	s2 = pad(d.h) + ':' + pad(d.i) + ':' + pad(d.s);
	return s1 + ' ' + s2;
}

function IsLeapYear(y) {
	return (y % 4 == 0) && (y % 100 != 0 || y % 400 == 0);
}

function DaysInMonth(m, y) {
	if (m < 0 || m > 12) {
		return 0;
	} else if (m == 2) {
		return IsLeapYear(y) ? 29 : 28;
	} else if (m == 4 || m == 6 || m == 9 || m == 11) {
		return 30;
	} else {
		return 31;
	}
}

function DayExceedsMonth(d, m, y) {
	if (m < 0 || m > 12) {
		return True;
	}
	if (m == 2) {
		return d < 0 || (IsLeapYear(y) && d > 29) || d > 28;
	} else if (m == 4 || m == 6 || m == 9 || m == 11) {
		return d < 0 || d > 30;
	} else {
		return d < 0 || d > 31;
	}
}

function GetDate(y, m, d, h, i, s) {
	if (m < 0 || m > 12) return null;
	if (DayExceedsMonth(d, m, y)) return null;
	if (h < 0 || h > 23) return null;
	if (i < 0 || i > 59) return null;
	if (s < 0 || s > 59) return null;
	return new RealDate(y, m, d, h, i, s);
}

function GetCurrentDate() {
	// Thank you StackOverflow
	var today = new Date();
	return new RealDate(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
		today.getHours(),
		today.getMinutes(),
		today.getSeconds(),
	);
}

function SubFromDate(d1, d2) {
	d1.s -= d2.s;
	if (d1.s < 0) {
		d1.s += 60;
		d1.o -= 1;
	}
	
	d1.i -= d2.i;
	if (d1.i < 0) {
		d1.i += 60;
		d1.h -= 1;
	}
	
	d1.h -= d2.h;
	if (d1.h < 0) {
		d1.h += 24;
		d1.d -= 1;
	}
	
	d1.y -= d2.y;
	
	d1.m -= d2.m;
	if (d1.m < 0) {
		d1.m += 12;
		d1.y -= 1;
	}
	
	d1.d -= d2.d;
	if (d1.d < 0) {
		d1.d += DaysInMonth(d1.m, d1.y);
		d1.m -= 1;
		if (d1.m < 0) {
			d1.m += 12;
			d1.y -= 1;
		}
	}

}

