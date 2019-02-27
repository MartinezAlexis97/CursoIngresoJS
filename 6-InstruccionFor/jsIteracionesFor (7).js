function mostrar()
{
var num;
var div=0;

num=parseInt(prompt("ingrese un numero"))

    for(x=1;x!=num+1;x++){

            if(num%x==0){
                div++
                document.write("<br>Divisores: " +x);
            }
    }

        document.write("<br><br>Cantidad de divisores:"+div);


}//FIN DE LA FUNCIÓN