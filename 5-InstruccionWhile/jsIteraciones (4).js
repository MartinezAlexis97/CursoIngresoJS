function mostrar()
{
		var numero = prompt("ingrese un número entre 0 y 9.");

		numero=parseInt(numero)
		while(numero<0 || numero>9){
				alert("número incorrecto");
					numero = prompt("ingrese un número entre 0 y 10.");

				if(numero>=0 && numero<=9){
					alert("Numero correcto")
					break;
				}
		}
		alert("Numero correcto");
		document.getElementById("Numero").value=numero;
}