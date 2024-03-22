const nombre = document.getElementById("nombre_completo")
const usuario = document.getElementById("nombre_usuario")
const email = document.getElementById("email")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const f_nac = document.getElementById("fecha_nac")
const direccion = document.getElementById("direccion")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    if (pass1.value.length < 6) {
        alert("Clave muy corta")
    }
})
