var myInput = document.getElementById("pass1");

myInput.onkeyup = function () {
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            if (myInput.value.length >= 8) {
                if (myInput.value.length <= 16) {
                    myInput.classList.remove("is-invalid");
                    myInput.classList.add("is-valid");
                    document.getElementById("Enviar").disabled = false;
                } else {
                    myInput.classList.remove("is-valid");
                    myInput.classList.add("is-invalid");
                    document.getElementById("Enviar").disabled = true;
                }
            } else {
                myInput.classList.remove("is-valid");
                myInput.classList.add("is-invalid");
                document.getElementById("Enviar").disabled = true;
            }
        } else {
            myInput.classList.remove("is-valid");
            myInput.classList.add("is-invalid");
            document.getElementById("Enviar").disabled = true;
        }
    } else {
        myInput.classList.remove("is-valid");
        myInput.classList.add("is-invalid");
        document.getElementById("Enviar").disabled = true;
    }
}

var passMatch = document.getElementById("pass2");

passMatch.onkeyup = function () {
    var myInput = document.getElementById("pass1");
    if (myInput.value === passMatch.value) {
        passMatch.classList.remove("is-invalid");
        passMatch.classList.add("is-valid");
        document.getElementById("Enviar").disabled = false;
    } else {
        passMatch.classList.remove("is-valid");
        passMatch.classList.add("is-invalid");
        document.getElementById("Enviar").disabled = true;
    }
}