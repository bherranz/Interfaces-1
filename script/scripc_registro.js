function registrar() {
    if (document.getElementById('politica').checked) 
    {
        // recuperar estructura de usuarios (login/pass)
	    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
	    if (usuarios == null) {
	    	usuarios = [];		
	    } 
        
	    // recuperar datos de registro de usuario y crear objeto a insertar en estructura de usuarios	
	    let usuario = {
            nombre: document.getElementById('Nombre').value,
            apellidos: document.getElementById('Apellidos').value,
            correo: document.getElementById('Correo').value,
            conf_correo: document.getElementById('Confirmar_correo').value,
            fecha_nac: document.getElementById('fecha').value,
            img_perfil: document.getElementById('foto').value,
		    login_user: document.getElementById('login_user').value,
		    login_pass: document.getElementById('login_pass').value	
	    };
		
		const patron_apellido = /^[A-Z]{1}[a-z]{2,}[ ]{1,}[A-Z]{1}[a-z]{2,}/;
		const patron_correo = /^[a-z]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}/;
		const patron_password = /[a-z]+[A-Z]+[0-9]{2,}.+/;
		const formato_foto = /.png|.jpg|.webp$/;
		console.log(patron_password.test(usuario.password));


		//let valor = usuario.apellidos.match(patron_apellido);
		//console.log(valor);
		//let fecha = new Date(usuario.fecha_nac);
		//let fecha_min = new Date("2010-7-11");
		//console.log(usuario.fecha_nac);
		//console.log(fecha_min);
		//console.log(fecha);
        if (usuario.nombre.length < 3)
    	{
			window.alert("Nombre incorrecto. La longitud no debe ser menor a 3 caracteres.");
    	}
		else if (usuario.apellidos.match(patron_apellido) == null)
    	{
			window.alert("Apellidos incorrectos. Deben compuesto por mínimo dos cadenas de caracteres de 3 caracteres de longitud cada una.");
    	}
		else if (usuario.correo.match(patron_correo) == null)
    	{
			window.alert("Correo electrónico incorrecto. El formato aceptado es: nombre@dominio.extensión.");
    	}
		else if (usuario.correo != usuario.conf_correo)
    	{
			window.alert("El correo electrónico de confirmación debe ser igual al correo electrónico.");
    	}
		else if (!usuario.fecha_nac)
    	{
			window.alert("Fecha inválida.");
    	}
		else if (new Date(usuario.fecha_nac) > new Date("2010-7-11"))
    	{
			window.alert("Fecha inválida.");
    	}
		else if (usuario.login_user.length < 5)
    	{
			window.alert("Login inválido. La longitud no debe ser menor a 5 caracteres.");
    	}
		else if ((usuario.login_pass.match(patron_password) == null)&&(usuario.login_pass.length != 8))
    	{
			window.alert("Contraseña inválida. La contraseña debe 8 caracteres de longitud, con mínimo 2 números, 1 carácter especial, 1 letra mayúscula y 1 letra minúscula.");
    	}
		else if (usuario.img_perfil.match(formato_foto) == null)
    	{
			window.alert("Formato de imagen incorrecta. Formatos aceptados: webp, png y jpg.");
    	}
		else
		{
			// almacenar objeto
	    	usuarios.push(usuario);
	    	localStorage.setItem("usuarios", JSON.stringify(usuarios));

			// Guardar true en el login mientras la pestaña esté abierta
            sessionStorage.setItem("login valido", "true"); 
    
            // Guardar el usuario para usarlo en la Versión B
            sessionStorage.setItem("currentUser", JSON.stringify(usuario));
            
            // Redirigir a Versión B
            window.location.href = "index_version_b.html";  

	    	// validar sesión y derivar a página privada
	    	sessionStorage.setItem("login valido", true);
	    	window.location.href = "index_version_b.html";
		}

	    
	}
    else
    {
        window.alert("Confirma las políticas antes de registrar.");
    }
	
}

