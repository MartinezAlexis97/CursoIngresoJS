/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo,ancho,alambre;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    alambre=(largo*2+ancho*2)*3
        alert(alambre)

}
function Circulo () 
{
    var radio;
    var alambre

    radio=parseInt(document.getElementById("Radio").value);
	
        alambre=(2*Math.PI*radio)*3

        alert(alambre)
}
function Materiales () 
{
    var largo,ancho,materiales;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    
    materiales=largo*ancho

        alert("Se necesitan " +materiales*2+ " bolsas de cemento y " +materiales*3+ " bolsas de cal")

	
}