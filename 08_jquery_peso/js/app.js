// Jquery puede seleccionar los elementos mediante su id, clase o nombre de etiqueta


//seleccion por nombre de etiqueta
//la funcion .text() sirve para recuperar o asignar:
// texto a una etiqueta

$("h1").text("xd");


// seleccion por clase ( . = class)
$(".subtitulo").text("Otro parráfo");

//seleccion por id ( # = id)
$("#p1").css("font-size","1em");

//seleccion por nombre etiqueta
//asignación de evento click al boton
//funcion anonimas que se dispara cuando ocurre el evento
$("button").click( function(){              //{} donde va a ir la funcion
 let masa = $("input").val();

  const gMar=3.7;
  const gJup=24.7;

let pj = masa * gJup;
let pm = masa * gMar;

 console.log( pj, pm )

 $("#p1").html( "Tu peso en marte es: " + pm + "<br> Tu peso en jupiter es: " + pj );
})