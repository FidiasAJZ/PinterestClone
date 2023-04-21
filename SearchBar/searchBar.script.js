let ventanaEmergenteAbierta = true;
var popup = document.querySelector(".resultados");
var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  buscar(event);
  //popup.style.display = "block";
});

document.addEventListener("click", function (event) {
  if (event.target.closest(".navbar-search")) return;
  popup.style.display = "none";
});

function buscar(event) {
  //console.log("funciona ventana abierta");
  //ventanaEmergenteAbierta = false;
  //console.log(ventanaEmergenteAbierta);
  //console.log(popup);
  // Prevenir que el formulario se envíe y recargue la página
  event.preventDefault();

  // Obtener el término de búsqueda del input
  const termino = document.querySelector('input[type="text"]').value;

  // Obtener la ventana emergente y mostrarla
  popup.style.display = "block";

  // Generar los componentes de tipo Card con los resultados de la búsqueda
  const resultadosRe = ["Resultado 1", "Resultado 2", "Resultado 3"]; // Ejemplo de resultados
  let cards = "";
  //forOff * Investigar
  resultadosRe.forEach((resultado) => {
    cards += `
        <div class="card search-bar" style = "margin-left: 2%;">
            <div class="card-item">
                <h3>${resultado}</h3>
                <p>Descripción del resultado</p>
                <img
                src="https://i.pinimg.com/564x/ad/59/2d/ad592d7a5afb28d8ac2ab8f48019cd22.jpg"
                alt="Imagen 1"
                />
            </div>
        </div>
      `;
  });

  //Misma función de arriba pero en sintaxis anonima, la de arriba es flecha.
  /*     resultadosRe.forEach(function(resultado) {
        cards += `
          <div class="card search-bar">
            <div class="card-item">
              <h3>${resultado}</h3>
              <p>Descripción del resultado</p>
              <img src="https://i.pinimg.com/564x/ad/59/2d/ad592d7a5afb28d8ac2ab8f48019cd22.jpg" alt="Imagen 1" />
            </div>
          </div>
        `;
      }); */

  //Crear las opciones de busquedas recientes.

  let busquedasR = [
    "Programación web",
    "Ilustrador",
    "Pokémon",
    "Aesthetic Design",
    "React.js",
    "Kodigo.org",
  ];
  let res =
    `<div class="busquedasR">
                <p>Búsquedas recientes</p>
                <br>
                <label class="label-with-button">
                ` +
    busquedasR[0] +
    `
                <button class="button-in-label">x</button>
                </label>
                <label class="label-with-button">
                ` +
    busquedasR[1] +
    `
                <button class="button-in-label">x</button>
                </label>
                <label class="label-with-button">
                ` +
    busquedasR[2] +
    `
                <button class="button-in-label">x</button>
                </label>
                <label class="label-with-button">
                ` +
    busquedasR[3] +
    `
                <button class="button-in-label">x</button>
                </label>
                <label class="label-with-button">
                ` +
    busquedasR[4] +
    `
                <button class="button-in-label">x</button>
                </label>
                <label class="label-with-button">
                ` +
    busquedasR[5] +
    `
                <button class="button-in-label">x</button>
                </label>
             </div>`;
  //Crear las opciones de Ideas para ti
  //Objeto para las imagenes. Titulo, Imagenes, Descripción. API res -- JSON.
  class tarjetas {
    constructor(titulo, imagen, descripcion){
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
  }
  let ideasPa = [
    "Diseños de IA",
    "Aesthetic Design",
    "CyberPunk",
    "Pokemon",
    "Retro Art",
    "Animal Crossing",
    "Web Design",
    "Zelda"
  ];

  ideasP = `
  <div class="ideasP1">
    <p style = "margin: 2%";>Ideas para ti</p>
    <div class="card search-bar" style = "margin-left: 2%;">
        <div class="card-item">
            <div class= "titulo-card-1">
                <h3>`+ ideasPa[0] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/b8/73/e4/b873e4e484aa10857c1d460227549fd2.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%;">
        <div class="card-item">
            <div class= "titulo-card-2">
                <h3>`+ ideasPa[1] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%;">
        <div class="card-item">
            <div class= "titulo-card-3">
              <h3>`+ ideasPa[2] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/e8/2c/b8/e82cb85c82a95ed99f9139ebf9183649.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
        <div class= "titulo-card-4">
            <h3>`+ ideasPa[3] +`</h3>
        </div>
            <img
            src="https://i.pinimg.com/236x/fd/56/5e/fd565e4e62eb6e35a69fdd9140c06a8f.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-card-5">
                <h3>`+ ideasPa[4] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/a6/e9/b1/a6e9b145f25fcc30ae82e312d43cf448.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-card-6">
                <h3>`+ ideasPa[5] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/fe/d1/26/fed126bff6d4642325963b8bc33b7ba3.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
    <div class="card-item">
        <div class= "titulo-card-7">
            <h3>`+ ideasPa[6] +`</h3>
        </div>
        <img
        src="https://i.pinimg.com/236x/95/b7/71/95b771f91a8889aabca7d3fa18e76512.jpg"
        alt="Imagen 1"
        />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
    <div class="card-item">
        <div class= "titulo-card-8">
            <h3>`+ ideasPa[7] +`</h3>
        </div>
        <img
        src="https://i.pinimg.com/236x/b9/ef/71/b9ef714bfda45d9d4f8cd8f990f40574.jpg"
        alt="Imagen 1"
        />
        </div>
    </div>
  </div>
`;

//Crear las opciones de Populares en pinterest.
let popuP = ["Fondos de pantalla", "Wallpaper PC", "Anime", "Samus", "Nintendo lovers", "Zelda"];
  popuP = `
  <div class="populares">
    <p style = "margin: 2%";>Populares en pinterest</p>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-popu-1">
                <h3>`+ popuP[0] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/b4/67/01/b467015c1c4053cc819154a405a2c1a0.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-popu-2">
                <h3>`+ popuP[1] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/36/fd/74/36fd7465c6efd2cc221f46ff62ef7ad3.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-popu-3">
                <h3>`+ popuP[2] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/c0/37/c3/c037c3126d2a9eec910a8724aed0e8fa.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%">
        <div class="card-item">
            <div class= "titulo-popu-4">
                <h3>`+ popuP[3] +`</h3>
            </div>
            <img
            src="https://i.pinimg.com/236x/cb/58/39/cb58399828e55ed76603aea150b2998d.jpg"
            alt="Imagen 1"
            />
        </div>
    </div>
  </div>
  `;

  // Insertar los componentes de tipo Card, busquedas recientes, ideas y populares en pinterest en la ventana emergente
  popup.innerHTML = res + ideasP + popuP;
}

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("click", buscar);
