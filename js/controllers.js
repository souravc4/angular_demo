app.controller("indexCtrl", function ($scope) {
var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className += " current";
	liarray[1].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[2].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[3].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	var x = document.getElementById('banner');
	x.style.display = 'block';
	document.getElementById("header").style.backgroundColor = "transparent";
});

app.controller("blogCtrl", function ($scope) {
var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className = liarray[0].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[1].className += " current";
	liarray[2].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[3].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	var x = document.getElementById('banner');
	x.style.display = 'none';
	document.getElementById("header").style.backgroundColor = "#3f7a8d";
});

app.controller("contCtrl", function ($scope) {
var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className = liarray[0].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[1].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[2].className += " current";
	liarray[3].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	var x = document.getElementById('banner');
	x.style.display = 'none';
	document.getElementById("header").style.backgroundColor = "#3f7a8d";
});

app.controller("helpCtrl", function ($scope) {
var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className = liarray[0].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[1].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[2].className = liarray[1].className.replace( /(?:^|\s)current(?!\S)/g , '' );
	liarray[3].className += " current";
	var x = document.getElementById('banner');
	x.style.display = 'none';
	document.getElementById("header").style.backgroundColor = "#3f7a8d";
});


