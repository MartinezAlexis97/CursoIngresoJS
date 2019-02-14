/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
 */
    var cant,empr,desc,suma,imp;
function CalcularPrecio ()
{   
    cant=parseInt(document.getElementById("Cantidad").value);
    empr=document.getElementById("Marca").value;
    suma=cant*35

        if(cant>=6){
            document.getElementById("precioDescuento").value=suma-suma*50/100;
        }else{

            if(cant==5){
                if(empr=="ArgentinaLuz"){
                    document.getElementById("precioDescuento").value=suma-suma*40/100;
                }else{
                    document.getElementById("precioDescuento").value=suma-suma*30/100;
                }
            }
            if(cant==4){
                if(empr=="ArgentinaLuz" || empr=="FelipeLamparas"){
                    document.getElementById("precioDescuento").value=suma-suma*25/100;
                }else{
                    document.getElementById("precioDescuento").value=suma-suma*20/100;

                }
            }
            if(cant==3){
                if(empr=="ArgentinaLuz"){
                    document.getElementById("precioDescuento").value=suma-suma*15/100;
                }else{
                    if(empr=="FelipeLamparas"){
                        document.getElementById("precioDescuento").value=suma-suma*10/100;
                    }else{
                        document.getElementById("precioDescuento").value=suma-suma*5/100;
                        }
                    }
                }
            if()
            }
        }