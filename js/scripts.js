var a = prompt('Write value a:');
var b = prompt('Write value b:');
var value = ((a*a) - (2*a*b) + (b*b));

if (value>0) {
document.getElementById("wynik").innerHTML = (value + '  -Wynik dodatni  ');
}

else if (value<0) {
document.getElementById("wynik").innerHTML = (value + '  -Wynik ujemny  ');
}

else if (value==0){
document.getElementById("wynik").innerHTML = (value + '  -Zero  ');
}

else { document.getElementById("wynik").innerHTML = ('To nie jest liczba');
}