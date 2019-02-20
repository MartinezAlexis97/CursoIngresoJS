
function mostrar()
{
    var mascota1,mascota2,kilo1,kilo2,kilos;

        mascota1=prompt("Nombre de su mascota");
        mascota2=prompt("Nombre de su segunda mascota");
        kilo1=prompt("Peso (kg) de " +mascota1);
        kilo2=prompt("Peso (kg) de " +mascota2);

            kilo1=parseInt(kilo1);
            kilo2=parseInt(kilo2);
            kilos=kilo1+kilo2

        alert("Tenes dos mascotas " +mascota1+ " y " +mascota2+ ",que pesan " +kilo1+ " y " +kilo2+ ",la suma de los kilos es " +kilos)
    

}
