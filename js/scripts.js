var a = prompt('Write value a:');
var b = prompt('Write value b:');
//var value = ((a*a) - (2*a*b) + (b*b));
/*if (var a='' || var b ='') {
alert('  Musisz wpisac dowolne wartości  ');	
}*/
function calculate(a,b) { 
	
	var calc;
	calc= ((a*a) - (2*a*b) + (b*b));
	return calc;
}
	//document.getElementById("wynik").innerHTML = setResult();
	/*if (value>0) {
	document.getElementById("wynik").innerHTML = (value + '  -Wynik dodatni  ');
	}

	else if (value<0) {
	document.getElementById("wynik").innerHTML = (value + '  -Wynik ujemny  ');
	}

	else if (value== '0'){
	document.getElementById("wynik").innerHTML = (value + '  -Zero  ');
	}

	else { document.getElementById("wynik").innerHTML = ('Musisz wpisać dwie wartości liczbowe');
	}*/

function setResult() {
	var result;
	result= calculate(a, b);
	
	if (result>0) {
	document.write(result+ '  -Wynik dodatni  ');
	}

	else if (result<0) {
	document.write(result + '  -Wynik ujemny  ');
	}
	
	else if (result ==='0'){
	document.write(result + '  -Zero  ');
	}
	
	else
	{  document.write('Musisz wpisać dwie wartości liczbowe');
	}
	
}