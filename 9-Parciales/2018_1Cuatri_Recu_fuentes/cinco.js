function mostrar()
{
  var precio,pago,paquete,descuento;

    precio=parseInt(prompt("Valor de habitacion"));
    pago=prompt("Forma de pago:\n\nVisa (10%desc)\npayPal (15%desc)\nmercadoPago (10%desc)\nEfectivo (20%desc)\nOtro (5%desc)");
    paquete=prompt("Paquete:\n\nTodo Incluido.\nSolo desayuno.\nNinguno.")

    switch(pago){

        case "Visa":
        case "mercadoPago":
            descuento=precio*0.9;
            break;

        case "payPal":
            descuento=precio*0.85;
            switch(paquete){

              case "Todo incluido":
                descuento=descuento-(precio*0.1)
                break;
            }
             break;

        case "Efectivo":
            descuento=precio*0.8;
            switch(paquete){

              case "Todo incluido":
                descuento=descuento-(precio*0.15)
                  break;

              case "Solo desayuno":
                descuento=descuento-(precio*0.1)
                  break;

            }
            break;

        case "Otro":
            descuento=precio*0.95;
            break;
    }

    alert("El precio final es: $" +descuento);
;



}
