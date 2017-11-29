var a = prompt('Write value a:');
var b = prompt('Write value b:');

var value = ((a*a) - (2*a*b) + (b*b));

function setResult(result) { 
	document.getElementById("wynik").innerHTML = result;

	if (value>0) {
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
if(a || b != "") {
	setResult();
}
else{
	alert("Wpisz w końcu te liczby!");
}