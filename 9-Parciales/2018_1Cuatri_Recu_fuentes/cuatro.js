function mostrar()
{
  /*
    var num1,num2,num3,num4,suma,descuento,max;

    num1=parseInt(prompt("Ingrese primer importe"));
    num2=parseInt(prompt("Ingrese segundo importe"));
    num3=parseInt(prompt("Ingrese tercer importe"));
    num4=parseInt(prompt("Ingrese cuarto importe"));

        suma=num1+num2+num3+num4;
        max=num1

        if(num2>max){
            max=num2

        }
            if(num3>max){
              max=num3
            }
            if(num4>max){
              max=num4
            }

        if(suma>100){

            descuento=suma*0.9;

      }else{

            if(suma<101 && suma>50){

              descuento=suma*0.95;

            }else{

              descuento=suma*1.15;
}
      }


        alert("el importe final es: $" +descuento+ "\nel importe mayor ingresado es: $" +max);
    */
  var num,cont=1,suma=0,max;

          while(cont<=4){

          cont++
          num=parseInt(prompt("ingrese importe"));
          suma=suma+num

          if(cont==2){
            max=num
          }else{
            if(num>max){
              max=num
            }
          }

          }
          if(suma>100){
            suma=suma*0.9;

          }else{
            if(suma<101 && suma>50){
              suma=suma*0.95;
            }
            if(suma<51){
              suma=suma*1.15;
            }
}
            alert("El importe final es: $" +suma+ " El importe mayor es: $" +max);
  }
