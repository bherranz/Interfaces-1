
// Consejos predeterminados para empezar
const consejosPredeterminados = [
    { titulo: "Documentos esenciales", desc: "No olvides tu pasaporte, visados y una copia digital de todo." },
    { titulo: "Presupuesto diario", desc: "Lleva un control de gastos diario para no llevarte sorpresas al final." },
    { titulo: "Aprende frases locales", desc: "Un simple 'hola' o 'gracias' en el idioma local te abrirá muchas puertas." }
];

// Cargar los 3 últimos consejos
function cargarConsejos() {
    // Buscar consejos en localStorage
    let consejosGuardados = JSON.parse(localStorage.getItem("consejos")) || null;
    // Si no hay, usar los predeterminados y guardarlos para la próxima
    if (consejosGuardados === null) {
        consejosGuardados = consejosPredeterminados;
        localStorage.setItem("consejos", JSON.stringify(consejosGuardados));
    }

    let listaUL = document.getElementById("lista-consejos");
    if (!listaUL) return;
    // Limpiar la lista de consejos
    listaUL.innerHTML = "";
    // Mostrar los 3 últimos
    let consejosAMostrar = consejosGuardados.slice(0, 3);
    // Crear lista <li><a>
    consejosAMostrar.forEach(function(consejo) {
        let nuevoLi = document.createElement("li");
        let nuevoA = document.createElement("a");
        nuevoA.href = "#"; // no funcional
        nuevoA.textContent = consejo.titulo;
        // poner la descripción en el título para que se vea al pasar el ratón
        nuevoA.title = consejo.desc; 
        
        nuevoLi.appendChild(nuevoA);
        listaUL.appendChild(nuevoLi);
    });
}

// Validar y guardar consejos
function guardarNuevoConsejo() {
    // Coger valores del formulario
    let titulo = document.getElementById("consejo-titulo").value;
    let desc = document.getElementById("consejo-desc").value;

    // Validar según longitud
    if (titulo.length < 15) {
        alert("Error: El título debe tener al menos 15 caracteres.");
        return;
    }
    if (desc.length < 30) {
        alert("Error: La descripción debe tener al menos 30 caracteres.");
        return;
    }

    // Si se valida, guardar consejo
    let nuevoConsejo = {
        titulo: titulo,
        desc: desc
    };

    let consejosGuardados = JSON.parse(localStorage.getItem("consejos")) || [];
	// Añadir consejo al principio de la lista
    consejosGuardados.unshift(nuevoConsejo);
    // Guardar la lista actualizada en localStorage
    localStorage.setItem("consejos", JSON.stringify(consejosGuardados));
	// Limpiar el form
    document.getElementById("consejo-titulo").value = "";
    document.getElementById("consejo-desc").value = "";
    // Refrescar la lista en la pantalla
    cargarConsejos();
}
