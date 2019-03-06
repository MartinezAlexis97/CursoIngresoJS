function mostrar()
{
    var letra,num,par=0,impar=0,respuesta,cero=0,pos=0,neg=0,prom=0;

        while(respuesta!="no"){
            letra=prompt("Ingrese una letra");
            console.log(letra);
            num=parseInt(prompt("Ingrese un numero entre -100 y 100: "))
            while(isNaN(num) || num<-100 || num>100){
                num=parseInt(prompt("Error! Ingrese un numero entre -100 y 100"));
            }
            console.log(num);
                if(num%2==0){
                    par++
                }else{
                    if(num%2!=0){
                        impar++
                    }
                } 

                if(num>0){
                    prom++
                    pos=pos+num

                }else{
                    if(num<0){
                    neg=neg+num
                    }else{
                        cero++
                    }
                }
                
                respuesta=prompt("¿Ingresar mas datos? (si/no)")
            while(respuesta!="si" && respuesta!="no"){
                respuesta=prompt("Error! Desea ingresar mas datos? (si/no)")
            }
        }
           
        document.write("Cantidad de numeros pares: "+par+"<br>Cantidad de numeros impares: "+impar+"<br>Cantidad de ceros: "+cero+"<br>Promedio de positivos: "+pos/prom+"<br>Suma de negativos: "+neg);
}
