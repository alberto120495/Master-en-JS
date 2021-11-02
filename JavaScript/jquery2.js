//!Trabajo con DOM y Textos
$(document).ready(function() {
  realoadLinks();
  var boton = $("#boton");
  let input = $("#add");
  boton.removeAttr("disabled");

  boton.click(function() {
    $("#menu").append(`<li><a href="${$("#add").val()}"></a></li>`); // o prepend
    realoadLinks();
    input.val("");
  });
});

function realoadLinks() {
  //?Mostrar Enlaces en los li
  console.log($("a").length);
  $("a").each(function(index) {
    let that = $(this);
    let enlace = that.attr("href");
    that.attr("target", "_blank");
    that.text(enlace);
  });
}
