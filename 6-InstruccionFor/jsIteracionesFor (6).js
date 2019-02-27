function mostrar()
{
var num;
var par=0;

num=parseInt(prompt("Ingrese un numero"));

    for(x=1;x!=num+1;x++){
        

            if(x%2==0){
                par++
                document.write("<br>"+x);

           }
    
    }
    document.write("<br><br>Cantidad de pares: " +par)
        



}//FIN DE LA FUNCIÓN