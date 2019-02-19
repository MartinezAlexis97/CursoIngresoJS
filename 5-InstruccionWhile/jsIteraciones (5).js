function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while(sexo!="f" || sexo!="m"){
        alert("sexo incorrecto");
        sexo = prompt("ingrese f ó m .");

        if(sexo=="f" || sexo=="m"){
            alert("sexo correcto");
            break;
        }
    }
document.getElementById('Sexo').value=sexo;  
}