function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){

        case "Abril":
        case "Junio":
        case "septiembre":
        case "Noviembre":
            alert("tiene 30 dias")
            break;

        case "Febrero":
            alert("Tiene 28 dias")
            break;

            default:
                alert("tiene 31 dias")
    }
	



}//FIN DE LA FUNCIÓN