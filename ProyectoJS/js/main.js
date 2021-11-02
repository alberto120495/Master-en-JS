$(document).ready(function() {
  if (window.location.href.indexOf("index") > -1) {
    //?Slider
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      responsive: true,
      pager: true
    });
    moment.defineLocale("es-foo", {
      parentLocale: "es"
    });
  }

  if (window.location.href.indexOf("index") > -1) {
    //?Post
    let posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      },
      {
        title: "Prueba de titulo 6",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga, nulla porro beatae eveniet illum natus soluta obcaecati odio facere saepe? Facere hic at ducimus alias cupiditate quo consequatur cum.Maiores eligendi debitis, quae magni veritatis iure sunt cum unde iusto voluptates, aspernatur libero? Necessitatibus amet consectetur nobis in accusantium minus repellendus? Aliquam molestiae nesciunt vero incidunt, itaqueadipisci tempora."
      }
    ];

    posts.forEach(elemento => {
      let post = `
      <article class="post">
            <h2>${elemento.title}</h2>
            <span class="date">${elemento.date}</span>
            <p>
              ${elemento.content}
            </p>
            <a href="#" class="boton-more">Leer mas</a>
          </article>
      `;

      $("#posts").append(post);
    });
  }

  //?SELECTOR DE THEME
  let style = $("#theme");
  $("#toGreen").click(function() {
    style.attr("href", "css/green.css");
  });
  $("#toRed").click(function() {
    style.attr("href", "css/red.css");
  });
  $("#toBlue").click(function() {
    style.attr("href", "css/blue.css");
  });

  //?Scroll Suavizado
  $(".subir").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  //?Login Falso

  $("#login form").submit(function() {
    let formName = $("#name").val();
    localStorage.setItem("formName", formName);
    location.reload();
  });
  let formName = localStorage.getItem("formName");
  if (formName != null) {
    let aboutParrafo = $("#about p");
    aboutParrafo.html("<h2>Bienvenido</h2>" + formName + "   ");
    aboutParrafo.append('<a href="#" id="logout">Cerrar Sesion</a>');
    $("#login").hide();

    $("#logout").click(function() {
      localStorage.clear();
      location.reload();
    });
  }

  //?Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //?Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function() {
      let reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  //?Validacion
  if (window.location.href.indexOf("contact") > -1) {
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true
    });
  }
});
