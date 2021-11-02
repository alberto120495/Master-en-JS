$(document).ready(function() {
  $("#caja").hide();
  //?Efecto con dos botones
  /*
  $("#mostrar").click(function() {
    $("#mostrar").hide();
    $("#ocultar").show();
    //$("#caja").show("normal");
    $("#caja").fadeIn("slow");
    //$("#caja").fadeTo("slow", 0.8); // segundo parametro: opacidad
  });
  $("#ocultar").click(function() {
    $("#ocultar").hide();
    $("#mostrar").show();
    $("#caja").fadeOut("slow");
    //$("#caja").fadeTo("slow", 0.2); // segundo parametro: opacidad
  });
  */

  //?Efecto con un solo boton
  $("#todoEnUno").click(function() {
    $("#caja").slideToggle("fast", function() {
      console.log("Oculto");
    });
  });

  //?Efectos Personalizados

  $("#animame").click(function() {
    $("#caja")
      .animate(
        { marginLeft: "500px", fontSize: "40px", height: "100px" },
        "slow"
      )
      .animate(
        {
          borderRadius: "50px",
          marginTop: "100px"
        },
        "slow"
      )
      .animate(
        {
          marginLeft: "0px",
          borderRadius: "0px",
          marginTop: "0px"
        },
        "slow"
      );
  });
});
