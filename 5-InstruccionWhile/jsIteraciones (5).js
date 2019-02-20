function mostrar()
{
var cont=0;
var sexo = prompt("ingrese f ó m .");

    while(sexo!="f" && sexo!="m"){
        cont++
        alert("sexo incorrecto");

          if(cont==3){
            alert("3 intentos fallidos, reintente luego")
            break;
          }
        sexo = prompt("ingrese f ó m .");
        }
        if(sexo=="f" || sexo=="m"){
          alert("sexo correcto");
          document.getElementById('Sexo').value=sexo;
    }
}
