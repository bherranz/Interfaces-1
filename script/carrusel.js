
function iniciarCarrusel() { 
	// Datos de los 3 packs
	let precios = ["699€", "850€", "720€"];
	let titulos = ["Pack Sudeste Asiático", "Pack Aventura Andina", "Ruta de los Templos"];
	let descripciones = ["Malaysia y Tailandia", "Perú y Bolivia", "Japón y China"];
	let imagenes = ["images/grand-place.jpg", "images/salar.png", "images/japon.jpg"]; 
	let enlaces = ["index_version_c.html?pack=1", "index_version_c.html?pack=2", "index_version_c.html?pack=3"];
	let iterador = 0;

	// Avanzar
	function avanzar(){
		// Si es el último, vuelve al primero
		if (iterador == titulos.length - 1) {
			iterador = 0
		} 
		// Si no, pasar al siguiente
		else {
			iterador++;
		}
		carga(iterador);
	}

	// Retroceder
	function retroceder() {
		// Si es el primero, va al último
		if (iterador == 0) {
			iterador = titulos.length - 1;
		}
		// Si no, pasar al anterior
		else {
			iterador--;
		}
		carga(iterador);
	}

	// Cambiar contenido
	function carga(iterador) {
		// Cambiar la imagen de fondo
		document.getElementById("carrusel-info-bg").style.backgroundImage = "url(" + imagenes[iterador] + ")";  
		// Cambiar los textos
		document.getElementById("carrusel-pack").innerHTML = titulos[iterador];
		document.getElementById("carrusel-desc").innerHTML = descripciones[iterador];
		document.getElementById("carrusel-precio").innerHTML = precios[iterador];
		
		// Cambiar enlace botón "Comprar"
		let botonCompra = document.getElementById("carrusel-comprar");
		botonCompra.onclick = function() {
			window.location.href = enlaces[iterador];
		};
	}

	// Botones funcionales
	document.getElementById("carrusel-der").addEventListener("click", avanzar);
	document.getElementById("carrusel-izq").addEventListener("click", retroceder);

	// >Temporizador automático cada 2 segundos (2000 ms)
	setInterval(avanzar, 2000);
	// Cargar el primer pack
	carga(0);
}
