/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahr,grados;

        fahr=parseInt(document.getElementById("Temperatura").value);

        grados=(fahr-32)*(5/9)

        alert(fahr+ " fahrenheit son " +grados+ " centigrados");
	
}

function CentigradosFahrenheit () 
{
	var celsius,grados;

        celsius=parseInt(document.getElementById("Temperatura").value);

        grados=(celsius*(9/5))+32

        alert(celsius+ " celsius son " +grados+ " fahrenheit")
}
