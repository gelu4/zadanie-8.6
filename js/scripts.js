var a = prompt('Write value a:');
var b = prompt('Write value b:');

var value = ((a*a) - (2*a*b) + (b*b));

function setResult(result) { 
	document.getElementById("wynik").innerHTML = result;
}
function setValue() {
	if(a === ""||b === "") {
	setResult('Nie możesz zostawić pustego miejsca. Wpisz dwie cyfry.');	
	}
	else if (value>0) {
	setResult( value + '-Wynik dodatni');
	}
	else if (value<0) {
	setResult(value + '  -Wynik ujemny  ');
	}

	else if (value === 0){
	setResult(value + '  -Zero  ');
	}
	
	else { 
	setResult('Musisz wpisać dwie wartości liczbowe');
	}
}
/*if(a !=== "" || b !=== "") {
	setValue();
}
else { 
		setResult('Musisz wpisać dwie wartości liczbowe');
	}
}
*/