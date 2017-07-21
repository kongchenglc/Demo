function menu_show() {
    if(document.getElementById("menu-open").style.display=="none" || !document.getElementById("menu-open").style.display) {
	    document.getElementById('menu-open').style.display="block";
		document.getElementById('menu-open').style.height = 0;
		var theHeight = 0;
		var setTime = setInterval(function() {
			document.getElementById('menu-open').style.height = theHeight + "rem";
			theHeight++;
			if( theHeight > 24 ) {
				clearInterval(setTime);
			}
		}, 10);
    }
    else {
    	document.getElementById('menu-open').style.height = 24 + "rem";
    	var regexp = /\d+/;
    	var theHeight = regexp.exec(document.getElementById('menu-open').style.height)[0];
		var setTime = setInterval(function() {
			document.getElementById('menu-open').style.height = theHeight + "rem";
			theHeight--;
			if( theHeight < 0 ) {
				clearInterval(setTime);
		        document.getElementById('menu-open').style.display="none";
			}
		}, 10);
    }
}
