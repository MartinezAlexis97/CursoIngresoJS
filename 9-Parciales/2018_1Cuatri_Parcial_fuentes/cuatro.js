function mostrar()
{/*
    var uno;
    var dos;
    var suma;

        uno=prompt("Ingresar num");
        dos=prompt("Ingresar num");

        if(uno==dos){
            alert(uno+dos);

        }else{
            uno=parseInt(uno)
            dos=parseInt(dos)

            if(uno>dos){
                alert(uno-dos)
            }else{
                suma=uno+dos

                if(suma>10){
                    alert("La suma es " +suma+ " y supero el 10")
                }
            }
        }
*/

        var num1,num2,resul;

        num1=prompt("Ingrese un numero:");
        num2=prompt("Ingrese un numero:");
        
        if(num1==num2){
            alert(num1+num2);
        }else{
            num1=parseInt(num1);
            num2=parseInt(num2);

            if(num1>num2){               
                alert(num1-num2);

            }else{
                    resul=num1+num2
                    if(resul<10){
                    alert(resul)
                    
                }else{
                        alert("La suma es: "+resul+" y supero el 10");
                 }
                
            }
        }
    
    }
