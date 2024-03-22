var hoy = new Date();
var minDate = new Date(hoy.getFullYear()-13, hoy.getMonth(), hoy.getDate());

var diaNac = document.getElementById("fecha_nac");

diaNac.onchange = function() {
    if(Date.parse(diaNac.value)<= minDate){
        document.getElementById("Enviar").disabled = false;
        diaNac.classList.add("is-valid");
    } else {
        document.getElementById("Enviar").disabled = true;
        diaNac.classList.remove("is-valid");
    }

}

