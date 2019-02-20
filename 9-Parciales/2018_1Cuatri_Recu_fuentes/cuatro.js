function mostrar()
{
    var cantidad,precio,total,diez,veinti,recargo,tarjeta,recargo;

        cantidad=prompt("Cantidad de libros")
        precio=prompt("Precio")
        tarjeta=prompt("Paga con tarjeta? (si-no)")
        cantidad=parseInt(cantidad)
        precio=parseInt(precio)

        diez=precio-(precio*10/100);
        veinti=precio-(precio*25/100);

            if(tarjeta=="si"){
                recargo=precio*0.1;
                }else{
                    recargo=0;
                }
            if(cantidad>2 && precio>2000){
                   total=veinti+recargo;
                   
                        }else{
                        
                            if(cantidad<2 && precio<2001){
                                total=diez+recargo;
                                
             }  
        }
           alert("Su precio final es $" +total);
}
