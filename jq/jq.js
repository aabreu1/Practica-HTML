// Funciones en JQuery
		
		
$(function()
{	
	$('#maracaibo , #valencia , #caracas , #pizza, #hamburguesa , #perro , #taco , #nachos, #clasica, #whopperC, #whopperP, #whopperM, #sombrero ').hover(function(){
		$(this).css( {'background-color':'rgba(107,220,201,0.7)'});
		},
			function(){
				$(this).css( { 'background-color':'rgba(255,204,0,0.0)' } );
	});
	
	$('#letrero , #moneda, #back').hover(function(){
		$(this).css({'height': '80px','width': '80px'});
		},
			function(){
				$(this).css({'height': '64px','width': '64px'});
	});


	$('#moneda').click(function(){
		var coin = getNum(1,2);
		if (coin == 1) alert("CARA");
		else alert("SELLO");
	});

	$('#letrero').click(function(){
			sugerencia  = getNum(1,5);
		switch(sugerencia){
		case 1: alert("Te sugerimos las Pizzas");
		break;
		case 2: alert("Te sugerimos los Perros");
		break;
		case 3: alert("Te sugerimos las Hamburguesas");
		break;
		case 4: alert("Te sugerimos los Tacos");
		break;
		case 5: alert("Te sugerimos Algun Contorno");
		break;
		}
	});

	$('#maracaibo , #valencia , #caracas , #pizza, #hamburguesa , #perro , #taco , #nachos, #Contactos, #clasica, #whopperC, #whopperP, #whopperM, #sombrero ').click(function(){
			switch(this.id){
				case 'pizza': window.location="./MenuPizza.html";
				break;
				case 'hamburguesa':  window.location="./MenuHamburguesas.html";
				break;
				case 'perro':  window.location="./MenuPerros.html";
				break;
				case 'taco':  window.location="./MenuTacos.html";
				break;
				case 'nachos':  window.location="./MenuOtros.html";
				break;
				case 'maracaibo': 
				case 'valencia': 
				case 'caracas':  window.location="./Ubicacion.html";
				break;
				case 'Contactos':  window.location="./Contacto.html";
				break;
					
			}
	});

	$('#clasica, #whopperC, #whopperP, #whopperM, #sombrero ').click(function(){
			switch(this.id){
				case 'clasica':
						var hamburguesa = new comida('Hamburguesa clasica',800,'Carne');
						window.location="./Pago.html";
					
				     break;
				     case 'whopperC':
				     	var hamburguesa = new comida('Hamburguesa whopper carne',1200,'Carne, Queso');
						window.location="./Pago.html";
					
				     break;
					 case 'whopperP':
						hamburguesa = new comida('Hamburguesa whopper Pollo',1300,'Pollo, Queso');
						window.location="./Pago.html";
					
					 break;
				     case 'whopperM':
				     	hamburguesa = new comida('Hamburguesa whopper mixta',1400,'Carne, Pollo, Queso');
						window.location="./Pago.html";
					
				     break;
					 case 'sombrero':
					 	hamburguesa = new comida('Hamburguesa sombrero',2000,'Carne, Pollo, lomito, papas fritas, Queso');
						alert(hamburguesa.nombre);
						window.location="./Pago.html";
						
					 break;
			}
	});


function getNum(min, max) {
  return Math.floor((Math.random() * max) + min);

}

function cliente(nombre, apellido, dia, mes){
		this.nombre = nombre;
		this.apellido = apellido;
		this.dia = dia;
		this.mes = mes;
}

function comida(nombre, precio, ingredientes){
		this.nombre = nombre;
		this.precio=precio;
		this.ingredientes = ingredientes;

}



});
		







/*	


	$('#cajahtml').click(function(){
		$("#caja2").slideUp(1000, function(){

			$('#header').html('<h1>HTML 5</h1>');
			$('#articulo').html('HTML5 (HyperText Markup Language, versión 5) es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: un «clásico» HTML (text/html), la variante conocida como HTML5 y una variante XHTML conocida como sintaxis XHTML5 que deberá ser servida como XML.1 2 Esta es la primera vez que HTML y XHTML se han desarrollado en paralelo.<br>La versión definitiva de la quinta revisión del estándar se publicó en octubre de 2014.<br>Al no ser reconocido en viejas versiones de navegadores por sus nuevas etiquetas, se recomienda al usuario común actualizar a la versión más nueva, para poder disfrutar de todo el potencial que provee HTML5.');
			$('#figure').html('<img src="image/HTML5Logo.png">');
			$('#figcaption').html('Logo HTM5');
			$('#cerrar').html('<img src="image/IconoCerrar.gif">');
		});
		
	});
	
	$('#cajacss').click(function(){
		$("#caja2").slideUp(1000, function(){
		
			$('#header').html('<h1>CSS 3</h1>');
			$('#articulo').html('Hoja de estilo en cascada o CSS (siglas en inglés de cascading style sheets) es un lenguaje usado para definir y crear la presentación de un documento estructurado escrito en HTML o XML2 (y por extensión en XHTML). El World Wide Web Consortium (W3C) es el encargado de formular la especificación de las hojas de estilo que servirán de estándar para los agentes de usuario o navegadores.<br>La idea que se encuentra detrás del desarrollo de CSS es separar la estructura de un documento de su presentación.<br>La información de estilo puede ser definida en un documento separado o en el mismo documento HTML. En este último caso podrían definirse estilos generales con el elemento «style» o en cada etiqueta particular mediante el atributo «style».');
			$('#figure').html('<img src="image/CSS3Logo.png">');
			$('#figcaption').html('Logo CSS3');
			$('#cerrar').html('<img src="image/IconoCerrar.gif">');
		});
	});
	
	$('#cajajs').click(function(){
		$("#caja2").slideUp(1000, function(){
		
			$('#header').html('<h1>Javascript</h1>');
			$('#articulo').html('JavaScript (abreviado comúnmente "JS") es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3 basado en prototipos, imperativo, débilmente tipado y dinámico.<br>Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas4 aunque existe una forma de JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.<br>JavaScript se diseñó con una sintaxis similar al C, aunque adopta nombres y convenciones del lenguaje de programación Java. Sin embargo Java y JavaScript no están relacionados y tienen semánticas y propósitos diferentes.');
			$('#figure').html('<img src="image/JSLogo.png">');
			$('#figcaption').html('Logo Javascript');
			$('#cerrar').html('<img src="image/IconoCerrar.gif">');
		});
	});
	
	$('#cajajq').click(function(){
		$("#caja2").slideUp(1000, function(){
		
			$('#header').html('<h1>JQuery</h1>');
			$('#articulo').html('jQuery es una biblioteca de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el árbol DOM, manejar eventos, desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web. Fue presentada el 14 de enero de 2006 en el BarCamp NYC. jQuery es la biblioteca de JavaScript más utilizada. <br>jQuery es software libre y de código abierto, posee un doble licenciamiento bajo la Licencia MIT y la Licencia Pública General de GNU v2, permitiendo su uso en proyectos libres y privados. <br>jQuery, al igual que otras bibliotecas, ofrece una serie de funcionalidades basadas en JavaScript que de otra manera requerirían de mucho más código, es decir, con las funciones propias de esta biblioteca se logran grandes resultados en menos tiempo y espacio.');
			$('#figure').html('<img src="image/JQueryLogo.png">');
			$('#figcaption').html('Logo JQuery');
			$('#cerrar').html('<img src="image/IconoCerrar.gif">');
		});
	});			
	
	
	$('#cerrar').click(function(){
		$("#caja2").slideUp(1000);
	});

			$('#caja3').click(function(){
			$('#caja2').slideToggle(3000);
	});
*/
			
		
		
		
		
		