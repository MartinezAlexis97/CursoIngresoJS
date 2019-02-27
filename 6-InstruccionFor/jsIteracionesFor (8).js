function mostrar()
{
var num;
var c=0;

num=parseInt(prompt("Ingrese un numero"));

    for(var x=1;x!=num+1;x++){

        if(num%x==0){
            c++
        }

    }

    if(c==2){
            alert("El numero es PRIMO");
        }else{
            alert("El numero NO es PRIMO");
        }
}//FIN DE LA FUNCIÓN