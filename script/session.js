
function login() {
    // Recuperar la estructura de los usuarios
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (usuarios != null) {
        // Recuperar los datos de inicio sesión usando los ID definidos antes
        let loginL = document.getElementById('login_user').value;
        let passwordL = document.getElementById('login_pass').value;
        // Buscar en la estructura de credenciales
        let i = 0;
        let encontrado = false;
        let usuarioEncontrado = null;
		// Recorrer la lista de usuarios hasta encontrar al que buscamos o acabar la lista
        while ((i < usuarios.length) && (!encontrado)) {
            // Si usuario y contraseña coinciden, se marca como encontrado
            if ((usuarios[i].login === loginL) && (usuarios[i].password === passwordL)) { 
                encontrado = true;
                usuarioEncontrado = usuarios[i];
            } else {
                i++;
            }
        }
        if (encontrado) {
			// Guardar true en el login mientras la pestaña esté abierta
            sessionStorage.setItem("login valido", "true"); 
    
            // Guardar el usuario para usarlo en la Versión B
            sessionStorage.setItem("currentUser", JSON.stringify(usuarioEncontrado));
            
            // Redirigir a Versión B
            window.location.href = "index_version_b.html";  
        }
		else {
            window.alert("Credenciales erróneas");
            // Limpiar rellenables
            document.getElementById('login_user').value = "";
            document.getElementById('login_pass').value = "";
        }
    }
	else {
        // Si no hay usuarios registrados
        window.alert("No hay usuarios registrados. Por favor, regístrese.");
    }
}


function validaSesion() {
    // Se compara con "true" ya que lo guardamos al hacer login
    if (sessionStorage.getItem("login valido") != "true") { 
        // Si no se ha hecho login, te redirige a Home
        alert("Acceso denegado. Debe iniciar sesión.");
        window.location.href = "index_main_page.html";
    } 
}


function cerrarSesion() {
    // Ventana de confirmación
    if (confirm("¿Desea cerrar sesión?")) {
        // Al pulsar "confirmar" se cierra la sesión 
        sessionStorage.setItem("login valido", "false"); 
        // Borrar los datos del usuario
        sessionStorage.removeItem("currentUser");
        // Redirigir a Home
        window.location.href = "index_main_page.html";
    }
    // Al pulsar "cancelar" no pasa nada
}
