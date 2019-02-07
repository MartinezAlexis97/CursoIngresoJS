/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num;
    var num1; 
    var resultado;
    num=document.getElementById("numeroUno").value;
    num1=document.getElementById("numeroDos").value;
    num=parseInt(num)
    num1=parseInt(num1)
    resultado=num+num1
    alert("la suma es " +resultado)
}

