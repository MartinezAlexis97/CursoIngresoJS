function mostrar()
{/*
    var precio;
    var descuento;

        precio=prompt("Precio")
        descuento=prompt("Descuento")

            parseInt(precio);
            parseInt(descuento);

                document.getElementById("elPrecioFinal").value=precio-precio*descuento/100;
*/

    var precio,descuento,total;

        precio=parseInt(prompt("Ingrese precio:"));
        descuento=parseInt(prompt("Ingrese descuento:"));

        total=precio-(precio*descuento/100);

        document.getElementById("elPrecioFinal").value=total;
}
