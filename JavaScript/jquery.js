//!Selectores
/*
//? $ = jQuery -  Es lo mismo
$(document).ready(function() {
  //?Selector de ID
  $("#rojo")
    .css("background", "red")
    .css("color", "white");

  $("#amarillo")
    .css("background", "yellow")
    .css("color", "green");

  $("#verde")
    .css("background", "green")
    .css("color", "white");

  //?Selector de Clase
  $(".zebra").css("border", "dashed 2px black");
  /*$(".sinBorde").click(function() {
    $(this).addClass("zebra");
  });

  //?Selector de etiqueta
  $("p")
    .css("padding", "5px")
    .css("cursor", "pointer")
    .click(function() {
      $(this).css("padding", "3px");
      if (!$(this).hasClass("gris")) {
        $(this).addClass("gris");
      } else {
        $(this).removeClass("gris");
      }
    });

  //?Selector de atributo
  $('[title = "Google"]').css("background", "pink");
  $('[title = "Facebook"]').css("background", "cyan");

  //?otro
  //$("p, a").addClass("margenSup");

  //!Find y Parent
  var busqueda = $("#caja").find(".resaltado");
  console.log(busqueda);

  //Busqueda feura del elemento con parent sales un nivel
  var busquedaFuera = $("#caja")
    .parent()
    .find('[title = "Google"]');
  console.log(busquedaFuera);
  
});*/
//!Eventos mouse y Hover
$(document).ready(function() {
  //?MouseOver y MouseOut
  /*
  $("#caja").mouseover(function() {
    $(this)
      .css("background", "red")
      .css("transition", "300ms");
  });
  $("#caja").mouseout(function() {
    $(this).css("background", "green");
  });*/
  //?Hover
  /*
  $("#caja").hover(
    function() {
      $(this)
        .css("background", "red")
        .css("transition", "300ms");
    },
    function() {
      $(this).css("background", "yellow");
    }
  );
  */
  //?Click y dobleclick
  /*
  $("#caja").click(function() {
    $(this).css("background", "pink");
  });
  $("#caja").dblclick(function() {
    $(this).css("background", "cyan");
  });
  */

  //?Focus y blur
  let nombre = $("#nombre"); //Para que solo accesa una vez en el dom
  let datos = $("#datos");
  nombre.focus(function() {
    $(this).css("border", "solid 2px green");
    $("#datos").hide();
  });

  nombre.blur(function() {
    $(this).css("border", "solid 2px pink");
    let data = $(this).val();
    datos.show().text(data);
  });

  //?MouseUp MouseDown
  datos.mousedown(function() {
    $(this).css("border-color", "blue");
  });
  datos.mouseup(function() {
    $(this).css("border-color", "orange");
  });

  //?Mousemove
  $(document).mousemove(function() {
    let sigueme = $("#sigueme");
    console.log("En x: " + event.clientX);
    console.log("En y: " + event.clientY);
    $("body").css("cursor", "none");
    sigueme.css("left", event.clientX).css("top", event.clientY);
  });
});
