
		cliente ="";	
		
		function getNombre(){
			do{
					check=false;
					cliente = prompt("Por favor permitanos saber su nombre");
					if(cliente == ""){
							alert("no ingreso ningun nombre");
						}
					else{	for (var i = 0; i <= cliente.length; i++) {
							letra = cliente.substring(i,i+1);
							document.write(letra);
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
		
		function FormatNombre(String nom){
			var fnombre;
			var fapellido;
			var nombre_apellido = nom.split(" ");
			
			fnombre = fnombre+.nombre_apellido.charAt(0).toUpperCase();
			for (var i = 1; i < nombre_apellido[0].length; i++) {
				fnombre = fnombre+.nombre_apellido.charAt(i).toLowerCase();
			}
			return fnombre;
		}
		
		function getCumple(){
			var check = false;	
			var mesC;
			var diaC;


			while(check==false){
			check = true;
			diaC = prompt("Por favor ingrese dia de nacimiento");

			if (diaC <= 0 ||  diaC.length > 2){      
						alert ("error al ingresar dia");
						check = false;
					}
			}//while
		

			while(check==false){
			check = true;
			mesC = prompt("Por favor ingrese dia de nacimiento");

			if (mesC <= 0 ||  mesC.length > 12){      
						alert ("error al ingresar mes");
						check = false;
					}
			}//while

			return diaC+"-"+mesC;
		}
		
		function CumplePromo(string cumplannos,string nombre){
			 	
			 var fecha = new Date();
		   	 dia = fecha.getDate();
		   	 mes = fecha.getMonth();
			 var aux = cumplannos.spli("-");
			 
			 if(dia == aux[1] && mes = aux[2])
			 	{alert("FELIZ CUMPLEAÑOS "+cliente+"!!! para celebrarlo te ofrecemos un 12% de descuento!!! Feliz dia, Feliz comida!");}

		}
		
		function imprimir (string text){
			document.write(text);
		}

		function aviso(string text){
			alert(text);
		}

		function flip(){
			alert("Se lanzara una moneda");
			coin = getNum(1,2);
			if (coin == 1) alert("CARA");
			else (coin == 2) alert("SELLO");
			
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

		function getNum(min, max) {
		  return Math.floor((Math.random() * max) + min);
		}

		function goLink(link){
			switch(link){
				case 1:  window.locationf="./MenuPizza";
				break;
				case 2:  window.locationf="./MenuHamburguesas";
				break;
				case 3:  window.locationf="./MenuPerros";
				break;
				case 4:  window.locationf="./MenuTacos";
				break;
				case 5:  window.locationf="./MenuOtros";
				break;
			}
		}

		function load(){
			nom = getNombre();
		    fnom = FormatNombre(nom);
		    fecha = getCumple();
		    CumplePromo(fecha, fnom);
			imprimir(fnombre+"te Recomendamos hoy las Hamburguesas");
		}

	
