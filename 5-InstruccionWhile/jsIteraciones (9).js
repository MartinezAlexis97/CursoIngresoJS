function mostrar()
{
  var primera=true;
  var num;
	var max,min;
	// declarar variables

	var respuesta='si';

	while(respuesta!='no')
	{
      num=parseInt(prompt("Ingrese un num"));
      respuesta=prompt("Agregar otro num?");

        if(primera){
          max=num
          min=num
          primera=false;
        }else{
            if(num>max){
              max=num
            }
            if(num<min){
              min=num
            }
        }

  }
  document.getElementById("maximo").value=max;
  document.getElementById("minimo").value=min;
}//FIN DE LA FUNCIÓN
