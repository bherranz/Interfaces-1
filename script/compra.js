function comprar() {
        
	    // recuperar datos de compra
	    let compra = {
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            tipo: document.getElementById('tarjeta').value,
            tarjeta: document.getElementById('ntarjeta').value,
            titular: document.getElementById('titular_tarjeta').value,
            fecha: document.getElementById('fechac').value,
		    cvv: document.getElementById('cvv').value,
	    };
		



		const patron_numero = /[0-9]/;
		//console.log(compra.tarjeta.match(patron_numero));
		const patron_correo = /[a-z]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}/;
		//console.log(compra.correo.match(patron_correo));
		//console.log(compra.tipo);
		//console.log(document.getElementById('vacio').value);
		//console.log(compra.fecha);		
		//console.log(compra.cvv);		

		
        if (compra.nombre.length < 3)
    	{
			window.alert("Nombre incorrecto. La longitud no debe ser menor a 3 caracteres.");
    	}
		else if (compra.correo.match(patron_correo) == null)
    	{
			window.alert("Correo electrónico inválido.");
    	}
		else if (compra.tipo == document.getElementById('vacio').value)
    	{
			window.alert("Tipo de tarjeta inválido.");
    	}
		else if ((compra.tarjeta.match(patron_numero) == null) || ((compra.tarjeta.length != 13)&&(compra.tarjeta.length != 15)&&(compra.tarjeta.length != 16)&&(compra.tarjeta.length != 19)))
    	{
			window.alert("Número de tarjeta inválido.");
    	}
		else if (compra.titular.length < 3)
    	{
			window.alert("Nombre del titular de la tarjeta inválido. La longitud no debe ser menor a 3 caracteres.");
    	}
		else if (!compra.fecha)
    	{
			window.alert("Fecha de caducidad inválida.");
    	}
		else if ((new Date(compra.fecha) < new Date()))
    	{
			window.alert("Fecha de caducidad inválida.");
    	}
		else if ((compra.cvv.match(patron_numero) == null)||compra.cvv.length != 3)
    	{
			window.alert("CVV inválido.");
    	}
		else
		{
			window.alert("Compra realizada.");
		}

	    
	
	
}

function borrar()
{
    document.getElementById('nombre').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('tarjeta').value = 'Seleccione tarjeta';
    document.getElementById('ntarjeta').value = "";
    document.getElementById('titular_tarjeta').value = "";
    document.getElementById('fechac').value = "";
    document.getElementById('cvv').value = "";
}

function info_pack ()
{
	const info_packs = 
	[
		{id:"1", titulo:"Pack Sudeste Asiático", precio:"699€", descripcion:"Malaysia y Tailandia", imagen:"images/grand-place.jpg", desc_pack:"Con este pack podrás visitar el sudeste asiático y realizar actividades como visitar paisajes sorprendentes, comer en restaurantes locales, y aprender de las costumbres de estos países."}, 
		{id:"2", titulo:"Pack Aventura Andina", precio:"850€", descripcion:"Perú y Bolivia", imagen:"images/salar.png", desc_pack:"Con este pack podras disfrutar de un agradable viaje por dos países del sur de América que se juntan para ofrecer unos maravillosos paisajes por los escarpados Andes. Conoce a lugareños y sumérgete en su cultura y sus tradiciones. Haz rutas, prueba la comida local, escala, o haz muchas otras cosas con este pack."}, 
		{id:"3", titulo:"Ruta de los Templos", precio:"720€", descripcion:"Japón y China", imagen:"images/japon.jpg", desc_pack:"Con este pack puedes descubrir una parte importante de la cultura china y japonesa, visitando templos de las épocas feudales y aprende de sus costumbres y sus tradiciones. Podrás conocer más de como eran las conocidas ciudades de cada país en sus antiguas etapas y disfrutar de actividades que te sumergirán en esos ambientes."}
	]
	const idurl = new URLSearchParams(window.location.search);
	let id = idurl.get("pack");
	let pack_actual = info_packs.find(pack => pack.id === id);
	//console.log(id);
	//console.log(pack_actual);
	//console.log(pack_actual.imagen);
	//console.log(document.getElementById('info_compra').style.backgroundImage);



	
	document.getElementById('titulo').innerHTML = pack_actual.titulo;
	document.getElementById('desc-pack').innerHTML = pack_actual.desc_pack;
    document.getElementById('precio').innerHTML = pack_actual.precio;
    document.getElementById('descripcion').innerHTML = pack_actual.descripcion;
	document.getElementById('info-pack-compra').style.backgroundImage = "url(" + pack_actual.imagen + ")";

}
