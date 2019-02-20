function mostrar()
{
  var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

        numero=prompt("Ingrese un num");
        numero=parseInt(numero);
        respuesta=prompt("Desea ingresar otro numero? 'si/no'");
          while(respuesta!='si' && respuesta!='no'){
            respuesta=prompt("Error, vuelva a ingresar 'si/no'");
          }
        acumulador=acumulador+numero;
        while(respuesta=='si'){
              contador++;
              console.log(acumulador);
              numero=prompt("Ingrese un num");
              numero=parseInt(numero);
              acumulador=acumulador+numero;
              respuesta=prompt("Desea ingresar otro numero? 'si/no'");
              while(respuesta!='si' && respuesta!='no'){
                respuesta=prompt("Error, vuelva a ingresar 'si/no'");
              }
            }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
