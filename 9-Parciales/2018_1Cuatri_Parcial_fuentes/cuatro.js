function mostrar()
{
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
}
