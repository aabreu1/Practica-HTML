// funciones.js

// Objeto Datos
	var ObjDatos = {
		id : 1,
		nombre : 'Indry',
		apellido : 'Sanchez',
		
		mostrarnombre : function(){
			alert( 'Nombre: '+ this.nombre );
		} ,
		
		mostrardatos : function(){
			alert( 'Identificacion: '+ this.id +'\nNombre: ' + this.nombre + '\nApellido: ' + this.apellido );
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// Nuevo Objeto Empleado
	var ObjEmpleado = Object.create(ObjDatos);
	ObjEmpleado.nombre = 'Carla';
	ObjEmpleado.id = '2';
	ObjEmpleado.apellido = 'Perez';
	
	
// Nuevo Objeto Cliente
	var ObjCliente = Object.create(ObjDatos);
	ObjCliente.id = '3';
	ObjCliente.nombre = 'Ana';
	ObjCliente.apellido = 'Suarez';
	
	
	
	
	
	
	
	

// Función al cargar
	function funalcargar()
	{
		alert ("\nFormulario con Javascript");	
	}

// Función MouseOver
	function funmouseover(parametro) {
		parametro.innerHTML = "Mouse Sobre el Titulo del Formulario";
		parametro.style.backgroundColor = "#3333FF";
		parametro.style.color = "#FFF";
	}

// Función MouseOut
	function funmouseout(parametro) {
		parametro.innerHTML = "Llenar los datos del formulario";
		parametro.style.backgroundColor = "#B7D0EB";
		parametro.style.color = "#000";
	}
	
// Función Click en Titulo
	function funclicktitulo()
	{
		alert("Click sobre el Titulo del Formulario");
		
	}
	
// Función Focus
	//function funfocus()
	//{
	//	alert("Ingresa acá el nombre");
	//}

// Función Focus
	function funtecla()
	{
		alert("Presionaste una tecla");
	}

	
// Función para Validar el formulario
	function validarform()
	{
	
		var error = 0 ;
		
		// validar nombre
		var errorNom = document.getElementById('errorNom');

		var nombre = document.formjs.txtnombre;
		if( nombre.value === '' )
		{
			errorNom.style.visibility = 'visible';
			nombre.style.background = '#B7D0EB';
			error = 1;
		}
		else
		{
			errorNom.style.visibility = 'hidden';
				// validar nombre
				var re = /^[a-z]*$/i;
				if ( !re.test(formjs.txtnombre.value) )
				{
					alert ( 'Posee datos NO validos' );
					nombre.style.background = '#B7D0EB';
					formjs.txtnombre.focus();
					error = 1;					
				}
				else
				{ 
					alert('El Nombre es Correcto');
					nombre.style.background = '#FFF';
				}
		}
		
		// validar sexo
		var errorSexo = document.getElementById('errorSexo');
		var sexo = document.formjs.sexo;
		var seleccionado = false;
		for(var i=0; i<2; i++)
		{    
		  if(sexo[i].checked) 
			{
				seleccionado = true;
				//error = 0;	
			}
			errorSexo.style.visibility = 'hidden';
		}
		if ( seleccionado == false )
		{
			errorSexo.style.visibility = 'visible';
			error = 1;
		}

		// validar estado
		var estado = document.getElementById('estado');

		var estado = document.formjs.estado;
		if( estado.value === '' )
		{
			errorEst.style.visibility = 'visible';
			error = 1;
		}
		else
		{
			errorEst.style.visibility = 'hidden';
		}

		


		// validar apellido
		
		var re = /^[a-z]*$/i;
		if ( !re.test(formjs.txtapellido.value) )
		{
			alert ( 'Posee datos NO validos' );
			formjs.txtapellido.focus();
		}
		else
		{ 
			//alert('Valores Correctos');
		}
		
		
		// validar usuario
		var re = /^[a-z0-9\.\_]*$/i;
		if ( !re.test(formjs.txtusuario.value) )
		{
			alert ( 'Posee datos NO validos' );
			formjs.txtusuario.focus();
		}
		else
		{ 
			//alert('Valores Correctos');
		}
		
		
		// validar clave
		if ( formjs.txtclave1.value != formjs.txtclave2.value )
		{
			alert ( 'Las claves NO coinciden' );
			error=1;
			formjs.txtclave1.focus();
		}
		
		
		if ( error == 0 )
		{
			alert ( 'Datos enviados exitosamente' );
			return true;
		}
		else
		{
			return false;
		}
				
	}

	
// expresiones regulares
/*

Letras y espacios
var re = /^[a-z ]*$/i;

Letras, numeros y espacios
var re = /^[a-z0-9 ]*$/i;

Correo Electronico
var re = /^([a-z0-9_-])+([\.a-z0-9_-])*@([a-z0-9-])+(\.[a-z0-9-]+)*\.([a-z]{2,6})*$/i;

Numero Entero
var re = /^[0-9]+$/;

Numero Decimal
var re = /^[0-9\.]+$/;

*/
