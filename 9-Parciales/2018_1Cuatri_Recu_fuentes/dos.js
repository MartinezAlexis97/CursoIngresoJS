function mostrar()
{
    var precio,descuento,iva;

        precio=prompt("Total de su compra")

        precio=parseInt(precio);
        descuento=parseInt(descuento);
        iva=parseInt(iva);

        descuento=precio-(precio*10/100)
        iva=precio-(precio*21/100)
  
        alert("Tu compra es de $" +precio+ " tenes un descuento del 10% queda en $" +descuento+ ",mas el iva es $" +iva)
}
