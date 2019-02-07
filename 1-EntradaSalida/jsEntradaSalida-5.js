/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var prueba;
    var dos;
    dos=document.getElementById("elNombre").value;
    prueba=document.getElementById("laEdad").value;
	alert("Usted se llama " + dos + " y tiene " + prueba + " años")
}

