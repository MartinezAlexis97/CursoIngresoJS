function mostrar()
{
    var planeta;

        planeta=prompt("Planeta del Sistema Solar (en minúsculas)");

        switch(planeta){

            case "tierra":
                alert("acá vivimos")
                break;

            case "mercurio":
            case "venus":
                alert("acá hace mas calor")
                break;

            case "marte":
            case "jupiter":
            case "saturno":
            case "urano":
            case "neptuno":
            case "plutón":
                alert("acá hace mas frío")
                break;

                default: alert("no es un planeta válido")
        }
        
            
            
 }