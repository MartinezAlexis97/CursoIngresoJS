function mostrar()
{
  var positivos=0;
  var negativos=0;
  var num;
  var contadorN=0;
  var contadorP=0;
  var par=0;
  var promedioP
  var promedioN
  var respuesta="si";

	while(respuesta!="no"){
    num=parseInt(prompt("Ingrese un numero"));
    respuesta=prompt("Agregar num?");

      if(num<0){
        contadorN++
        negativos=negativos+num

          if(num%2==0){
            par++
          }
      }else{

        if(num>0){
            contadorP++
            positivos=positivos+num;

            if(num%2==0){
              par++
            }
        }
          }

      }
      alert("La suma de los negativos es "+negativos+ "\nLa cantidad de negativos es " +contadorN+ "\nLa suma de los positivos es " +positivos+ "\nLa cantidad de números positivos es " +contadorP);

	}
