$(document).ready(function() {
  //!jQuery UI
  //?Draggable - MOVER ELEMENTO POR LA PAGINA
  $(".elemento").draggable();
  //?Resizable -REDIMENSIONAR
  $(".elemento").resizable();
  //?Selectable -Seleccionar elementos
  //$(".listaSeleccionable").selectable();
  //?Sortable - Ordena los elementos
  $(".listaSeleccionable").sortable({
    update: function(event, ui) {
      console.log("Cambio la lista");
    }
  }); //Se utiliza solo

  //?Droppable
  $("#elementoMovido").draggable();
  $("#area").droppable({
    drop: function() {
      console.log("Se solto algo en el area");
      $("#area").css("background", "yellow");
    }
  });

  //?EFECTOS
  $("#mostrar").click(function() {
    $(".cajaEfectos").toggle("explode"); // blind, slide, drop, fall, puff, scale, ("shake", "slow"),
  });

  //!Tooltip
  $(document).tooltip();

  //!Dialog
  $("#mostrarDialogo").click(function() {
    $("#popup").dialog();
  });

  //!Calendario - Datepicker
  $("#calendario").datepicker();

  //!Tabs

  $("#pestanas").tabs();
});
