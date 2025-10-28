/* Usar jQuery para esperar a que la página cargue */
$(document).ready(function() {
	//HOME
    // Registro
    $('#btn_registro').click(function() {
        window.location.href = 'index_version_a.html';
    });
    // Iniciar sesión
    $('#btn_login').click(function() {
        login(); 
    });

	// Cerrar sesión
	if ($('#btn_logout').length > 0) {
		$('#btn_logout').click(function() {
			cerrarSesion();
    	});
	}
	// mostrar nombre y perfil
	if ($('#user_name_display').length > 0) {
		// Buscar el usuario del sessionStorage
		let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
		if (currentUser) {
			// Mostrar el nombre del usuario o login
			$('#user_name_display').text(currentUser.nombre || currentUser.login);
			// Mostrar la imagen de perfil
			if (currentUser.img_perfil){
				$('#user_img_display').attr('src', currentUser.img_perfil);
			}
		} else {
			// Por seguridad si se cierra la sesión o se pierden los datos
			$('#user_name_display').text("Error: Usuario no encontrado");
		}
	}

	//Carrusel (Home y Página B)
    if ($('#carrusel-home').length > 0) {
        iniciarCarrusel();
    }

	// lista de consejos
	if ($('#lista-consejos').length > 0) {
		cargarConsejos();
		$('#btn-enviar-consejo').click(function() {
			guardarNuevoConsejo();
		});
	}
});

