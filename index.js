
let final = document.getElementById("Respuesta");

function generarRespuesta() {
    let random = Math.random();
    

    if (random < 0.5) {
        final.textContent = "Sí, es buen momento.";
    } 
    else {
        final.textContent = "No, no es buen momento.";
    }
}
