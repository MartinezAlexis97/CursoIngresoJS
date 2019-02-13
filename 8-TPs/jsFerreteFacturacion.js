/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var uno,dos,tres;
function Sumar () 
{
    var suma

    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;

    uno=parseInt(uno)
    dos=parseInt(dos)
    tres=parseInt(tres)

    suma=uno+dos+tres    
        alert(suma)
	
}
function Promedio () 
{
    var promedio

    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;

    uno=parseInt(uno)
    dos=parseInt(dos)
    tres=parseInt(tres)

    promedio=(uno+dos+tres)/3    
        alert(promedio)
	
}
function PrecioFinal () 
{
    var iva;

    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;

    uno=parseInt(uno)
    dos=parseInt(dos)
    tres=parseInt(tres)

    iva=(uno+dos+tres)*1.21    
        alert(iva)
	
}