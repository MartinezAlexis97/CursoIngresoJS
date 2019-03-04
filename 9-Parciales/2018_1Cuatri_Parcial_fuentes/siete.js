function mostrar()
{
    var notas,sexo,prom,notab,varones,cont=0,min,primera=true,acum=0,per;

        
    while(cont<5){
        cont++
        notas=parseInt(prompt("Nota: (0-10)"));        //pedir notas
        console.log(notas);
        while(isNaN(notas) || notas<0 || notas>10){             //validar notas
            alert("Nota incorrecta. Ingrese una nota de 0 a 10")
            notas=parseInt(prompt("Nota: (0/10)"));
        }
        sexo=prompt("sexo (f/m)");           //identificar sexo

        while(sexo!="f" && sexo!="m"){
            alert("Sexo incorrecto. Ingrese 'f' (femenino) o 'm' (masculino)");
            sexo=prompt("Sexo:")
        }
        acum=acum+notas

    
            if(primera){                        //guardar nota minima
                min=notas;
                per=sexo;
                primera=false;
        
            }else{

                if(notas<min){

                    min=notas;
                    per=sexo;
            }

        }

    
    }
        prom=acum/cont;

        alert("El promedio de las notas totales es: "+prom+"\nLa nota mas baja fue:"+min+"\n"+per);
        
}
