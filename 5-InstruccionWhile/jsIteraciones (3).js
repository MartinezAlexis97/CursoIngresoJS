function mostrar()
{
var cont=0
var clave = prompt("ingrese el número clave.");

        while(clave!="utn750"){
            alert("clave incorrecta");
            cont++
            console.log(clave)

            if(cont==3){
                alert("3 intentos fallidos, reintente luego");
                break;
                }
            clave = prompt("ingrese el número clave.");
            }   
            if(clave=="utn750"){
                alert("Acceso correcto")
        }
 }
