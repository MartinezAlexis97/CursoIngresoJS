function mostrar()
{
  var positivos=0;
  var negativos=0;
  var num;
  var contadorN=0;
  var contadorP=0
  var respuesta="si";

	while(respuesta!="no"){
    num=parseInt(prompt("Ingrese un numero"));
    respuesta=prompt("Agregar num?");

      if(num<0){
        contadorN++
        negativos=negativos+num

      }else{
            contadorP++
            positivos=positivos+num;
          }

      }
      alert("La suma de los negativos es "+negativos+ "\nLa cantidad de negativos es " +contadorN+ "\nLa suma de los positivos es " +positivos+ "\nLa cantidad de números positivos es " +contadorP);

	}
