function mostrar()
{
    var amigos,total,propina,iva,cadauno;

        amigos=prompt("Cantidad de personas");
        total=prompt("Total de la cuenta");

        amigos=parseInt(amigos);
        total=parseInt(total);

        cadauno=(total/amigos)*1.1
        iva=cadauno-(cadauno*21/100)
        alert("Cada persona debe pagar (incluyendo propina)$" +cadauno+ "+iva $" +iva)
        

}
