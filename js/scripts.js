var a = prompt('Write value a:');
var b = prompt('Write value b:');
var value = ((a*a) - (2*a*b) + (b*b));

function setResult(result) { 
	var result = document.getElementById("wynik").innerHTML;
	return result;
}
	if (value>0) {
	setResult(result) +  value + '-Wynik dodatni';
	}
	else if (value<0) {
	setResult(result) +  value + '  -Wynik ujemny  ';
	}

	else if (value== '0'){
	setResult(result) +  value + '  -Zero  ';
	}

	else { 
		setResult(result) + 'Musisz wpisać dwie wartości liczbowe';
	}

/*function setResult() {
	var result;
	result= calculate(a, b);
	
	if (result >0) {
	document.write(result+ '  -Wynik dodatni  ');
	}

	else if (result <0) {
	document.write(result + '  -Wynik ujemny  ');
	}
	
	else if (result ===0){
	document.write(result + '  -Zero  ');
	}
	else if (result ===isNaN){
	document.write(result + '  -ro  ');
	}
	
	else
	{  document.write('Musisz wpisać dwie wartości liczbowe');
	}
	
}*/