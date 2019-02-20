function mostrar()
{
  var num=0;
	var negativo=1;
	var respuesta='si';
  var positivo=0;

      while(respuesta!='no'){
        num=parseInt(prompt("Ingrese num"));
        respuesta=prompt("Agregar num?");

        if(num>=0){
          positivo=positivo+num;
        }else{
          negativo=negativo*num;
        }
      }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
