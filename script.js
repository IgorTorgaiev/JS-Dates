// Let's get a current date

var a = new Date();
document.getElementById("date").innerHTML = a;

// Today' Date - 03.01.2020

var b = new Date(2020, 12, 03, 19, 05, 00);
document.getElementById("date1").innerHTML = b;

var c = new Date("January 3, 2021 19:07:00");
document.getElementById("date2").innerHTML = c;

// toString()
var d = new Date();
document.getElementById("date3").innerHTML = d.toString();

// toUTCString()

var e = new Date();
document.getElementById("date4").innerHTML = e.toUTCString();

// toDateString()

var f = new Date();
document.getElementById("date5").innerHTML = f.toDateString();

// toISOString()

var g = new Date();
document.getElementById("date6").innerHTML = g.toISOString();