function mostrar()
{
    var precio;
    var descuento;

        precio=prompt("Precio")
        descuento=prompt("Descuento")

            parseInt(precio);
            parseInt(descuento);

                document.getElementById("elPrecioFinal").value=precio-precio*descuento/100;

}
