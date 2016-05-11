// Funciones en JQuery
		
		
$(function()
{	


		url = window.location.search;
		sinsigno= url.split("?");
		if(sinsigno.length>1)
		{
			url = sinsigno[1];
			var_val = url.split("&");
			if(var_val.length>1){
				pedido = new comida(var_val[0],var_val[1],var_val[2])

				$valor = pedido.nombre
				$('#txtproducto').val($valor);
				$valor = pedido.precio		
				$('#txtprecio').val($valor);
				$valor = pedido.ingredientes		
				$('#txtingredientes').val($valor);		
			}
		}
		
		
	
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

	$('#maracaibo , #valencia , #caracas , #pizza, #hamburguesa , #perro , #taco , #nachos, #Contactos').click(function(){
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
						var hamburguesa = new comida('Hamburguesa-clasica',800,'Carne');
						window.location="./Pago.html"+"?"+hamburguesa.nombre+"&"+hamburguesa.precio+"&"+hamburguesa.ingredientes;
					
				     break;
				     case 'whopperC':
				     	var hamburguesa = new comida('Hamburguesa-whopper-carne',1200,'Carne-Queso');
						window.location="./Pago.html"+"?"+hamburguesa.nombre+"&"+hamburguesa.precio+"&"+hamburguesa.ingredientes;
					
				     break;
					 case 'whopperP':
						hamburguesa = new comida('Hamburguesa-whopper-Pollo',1300,'Pollo-Queso');
						window.location="./Pago.html";
					
					 break;
				     case 'whopperM':
				     	hamburguesa = new comida('Hamburguesa-whopper-mixta',1400,'Carne-Pollo-Queso');
						window.locatiwindow.location="./Pago.html"+"?"+hamburguesa.nombre+"&"+hamburguesa.precio+"&"+hamburguesa.ingredientes;
					
				     break;
					 case 'sombrero':
					 	hamburguesa = new comida('Hamburguesa-sombrero',2000,'Carne-Pollo-lomito-papas-fritas-Queso');
						window.location="./Pago.html"+"?"+hamburguesa.nombre+"&"+hamburguesa.precio+"&"+hamburguesa.ingredientes;
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
function pasarVariables(pagina, nombres) {
pagina +="?";
nomVec = nombres.split(",");
for (i=0; i<nomVec.length; i++)
pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
pagina = pagina.substring(0,pagina.length-1);
location.href=pagina;
//return pagina;
}*/