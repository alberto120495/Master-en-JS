$(document).ready(function() {
  //?Load -Hace peticion Ajax por GET e incrustarlo en un elemento de la pagina
  //$("#datos").load("https://reqres.in/");

  //?GET
  $.get("https://reqres.in/api/users", { page: 2 }, function(response) {
    console.log(response.data);
    response.data.forEach(element => {
      $("#datos").append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  //?POST
  $("#formulario").submit(function(e) {
    e.preventDefault();
    let usuario = {
      name: $('input[name = "name"]').val(),
      web: $('input[name = "web"]').val()
    };
    console.log(usuario);
    /*
    $.post($(this).attr("action"), usuario, function(response) {
      console.log(response);
      $("#datos").append("<p>" + response.name + " " + response.web + "</p>");
    }).done(function() {
      alert("Usuario añadido correctamente");
    });
*/
    //?ajx
    $.ajax({
      type: "POST",
      //dataType: "json",
      // contentType: "application/json",
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function() {
        console.log("Enviando usuario...");
      },
      success: function(response) {
        console.log(response);
        $("#datos").append("<p>" + response.name + " " + response.web + "</p>");
      },
      error: function() {
        console.log("Ha ocurrido un error");
      },
      timeout: function() {
        timeout: 2000;
      }
    });
  });
});
