function mostrar()
{
var cont=0
var clave = prompt("ingrese el número clave.");

        while(clave!="utn750"){
            alert("clave incorrecta");
            cont++

            if(cont==3){
                alert("3 intentos fallidos")
                break;
            }
            clave = prompt("ingrese el número clave.");
        }   alert("Acceso correcto")
 }//FIN DE LA FUNCIÓN
