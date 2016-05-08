
		
	var Comida = {
		id : 0,
		nombre : '',
		precio : 0,
		size : 0,
		ingredientes : '',
		adicionales : '',
		
	}
	var cliente = {
		nombre : '',
		apellido : '',
		dia : 0,
		mes : 0,
	}

	var ObjCliente = Object.create(cliente);

		function getNombre(){
			do{
					check=false;
					cliente = prompt("Por favor permitanos saber su nombre");
					if(cliente == ""){
							alert("no ingreso ningun nombre");
						}
					else{	for (var i = 0; i <= cliente.length; i++) {
							letra = cliente.substring(i,i+1);
							switch(letra){
								case '1': check = true; break;
								case '2': check = true; break;
								case '3': check = true; break;
								case '4': check = true; break;
								case '5': check = true; break;
								case '6': check = true; break;
								case '7': check = true; break;
								case '8': check = true; break;
								case '9': check = true; break;
								case '0': check = true; break;
								}
							}
						}		
					if(check == true) {
						alert("Disculpe no se puede ingresar numeros para  los nombres");
					}
				}while(check==true);
				return cliente;
		}
		
		function FormatNombre(nom){
			var fnombre;
			var fapellido;
			var nombre_apellido = nom.split(" ");
			
			fnombre = fnombre+nombre_apellido[0].charAt(0).toUpperCase();
			for (var i = 1; i < nombre_apellido[0].length; i++) {
				fnombre = fnombre+nombre_apellido[0].charAt(i).toLowerCase();
			}
			return fnombre;
		}
		
		function getCumple(){
			var check = false;	
			var mesC;
			var diaC;


			while(check==false){
			check = true;
			ObjCliente.dia = prompt("Por favor ingrese DIA de nacimiento");

			if (ObjCliente.dia <= 0 ||  ObjCliente.dia.length > 2){      
						alert ("error al ingresar dia");
						check = false;
					}
			}//while
		
			check = false;
			while(check==false){
			check = true;
			ObjCliente.mes = prompt("Por favor ingrese MES de nacimiento");

			if (ObjCliente.mes <= 0 ||  ObjCliente.mes > 12){      
						alert ("error al ingresar mes");
						check = false;
					}
			}//while

			return diaC+"-"+mesC;
		}
		
		function CumplePromo(){
			 	
			 var fecha = new Date();
		   	 var dia = fecha.getDate();
		   	 var mes = fecha.getMonth();
			 
			 if(dia == ObjCliente.dia && mes == ObjCliente.mes)
			 	{alert("FELIZ CUMPLEAÑOS "+ObjCliente.nombre+"!!! para celebrarlo te ofrecemos un 12% de descuento!!! Feliz dia, Feliz comida!");}

		}
		
		function imprimir (text){
			document.write(text);
		}

		function aviso(text){
			alert(text);
		}

	

		function getSugerencia(){
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
		} 

		function goLink(link){
			switch(link){
				case 1: 
						window.location="./MenuPizza.html";
				break;
				case 2:  window.location="./MenuHamburguesas.html";
				break;
				case 3:  window.location="./MenuPerros.html";
				break;
				case 4:  window.location="./MenuTacos.html";
				break;
				case 5:  window.location="./MenuOtros.html";
				break;
				case 6:  window.location="./Ubicacion.html";
				break;
				case 7:  window.location="./Contacto.html";
				break;
				case 8: window.location="./Pago.html";
				break;
			}
		}

		function load(){
			nom = getNombre();
		    ObjCliente.nombre = FormatNombre(nom);
		    fecha = getCumple();
		    CumplePromo();
			aviso(ObjCliente.nombre+", Hoy te Recomendamos hoy las Hamburguesas");
		}

		function flip(){
				
				var coin = getNum(1,2);
				if (coin == 1) alert("CARA");
				else alert("SELLO");
				
			}

		function getNum(min, max) {
		  return Math.floor((Math.random() * max) + min);

		}

		function Resaltar(id){
			//alert("cambio de color");
			document.getElementById(id).style.backgroundColor = "blue";
		
		}
		function NoResaltar(id){
		    //alert("cambio de color");
			document.getElementById(id).style.backgroundColor = "rgba(255,204,0,0.0)";
			
		}

		function pago(comida){

			switch(comida){
				     case 'clasica':
						Comida.nombre = "Hamburguesa clasica";
						Comida.precio = 800;
						Comida.ingredientes = 'Carne';
				     break;
				     case 'whopperC':
				     	Comida.nombre = "Hamburguesa whopper carne";
						Comida.precio = 1200;
						Comida.ingredientes = 'Carne, Queso';
				     break;
					 case 'whopperP':
					 	Comida.nombre = "Hamburguesa whopper Pollo";
						Comida.precio = 1300;
						Comida.ingredientes = 'Pollo, Queso';
					 break;
				     case 'whopperM':
				     	Comida.nombre = "Hamburguesa whopper mixta";
						Comida.precio = 1300;
						Comida.ingredientes = "Carne, Pollo, Queso";
				     break;
					 case 'sombrero':
					 	Comida.nombre = 'Hamburguesa sombrero';
						Comida.precio = 1300;
						Comida.ingredientes = 'Carne, Pollo, lomito, papas fritas, Queso';
					 break;
			}
			goLink(8);
		}
		function getPrecio()
		{
			return Comida.precio
		}
		function getProducto()
		{
			return Comida.nombre
		}
		function getIngre()
		{
			return Comida.ingredientes
		}

		function LoadPago(){

			document.getElementByName("txtproducto").value = Comida.nombre;
			document.getElementByName("txtprecio").value = Comida.precio;
			document.getElementByName("txtingredientes").Value = Comida.ingredientes;

		}