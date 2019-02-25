/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad,sexo,estado,sueldo,legajo,nacionalidad;

        edad=parseInt(prompt("Ingrese edad (entre 18 y 90 años)"));
        sexo=prompt("Sexo: 'M' (masculino); 'F' (femenino)");
        estado=prompt("Estado civil: '1'=soltero; '2'=casado; '3'=divorciado; '4'=viudo");
        sueldo=parseInt(prompt("Ingrese sueldo bruto (no menor a 8.000)"));
        legajo=parseInt(prompt("Ingrese número de legajo (4 cifras, sin ceros a la izq)"));
        nacionalidad=prompt("Nacionalidad: 'A' (argentino); 'E' (extranjero); 'N' (nacionalizado)");
        
        console.log(edad);
        document.getElementById("Edad").value=edad;
        document.getElementById("Sexo").value=sexo;
        document.getElementById("EstadoCivil").value=estado;
        document.getElementById("Sueldo").value=sueldo;
        document.getElementById("Legajo").value=legajo;
        document.getElementById("Nacionalidad").value=nacionalidad;
}
