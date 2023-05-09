//Variable para verificar
let ventanaEmergenteAbierta = true;
var popup = document.querySelector(".resultados");
var searchBtn = document.getElementById("search-btn");

//Variable con las busquedas recientes.
let busquedasR = [
  "Code",
  "Illustrator",
  "Pokémon",
  "Aesthetic",
  "React.js",
  "Mario Bros",
];

//Escuhar el evento click del searchbar
searchBtn.addEventListener("click", function () {
  buscar(event);
  //popup.style.display = "block";
});

//Este código agrega un evento de escucha al documento que espera el evento "click" en cualquier lugar de la página.
document.addEventListener("click", function (event) {
  if (event.target.closest(".navbar-search")) return;
  popup.style.display = "none";
});


function buscar(event) {
  event.preventDefault();

  // Obtener el término de búsqueda del input
  const termino = document.querySelector('input[type="text"]').value;

  // Obtener la ventana emergente y mostrarla
  popup.style.display = "block";

  // Generar los componentes de tipo Card con los resultados de la búsqueda
  //forOff * Investigar

  //Crear las opciones de busquedas recientes. Esto es DOM.
  //Se crean los div con las clases correspondientes para las tarjetas.

  let res = '<div class="busquedasR"><p>Búsquedas recientes</p><br>';
  for (let i = 0; i < busquedasR.length; i++) {
      res += '<label class="label-with-button" for="search-btn" id="label' + (i+1) + '">'
       + busquedasR[i] + '<button class=\"button-in-label\"><i class="bi bi-x"></i></ion-icon></button></label>';
  }
  res += '</div>';

//////////////////////////////////////////////////////////////////////////////////
////////Creando objetos para las cards especiales del searchBar///////////////////
//////////////////////////////////////////////////////////////////////////////////

  //Objeto para las imagenes. Titulo, Imagenes, Descripción. API res -- JSON.
  class tarjetas {
    constructor(titulo, imagen, descripcion){
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
  }
  function crearTarjetas(nombreDeLaClase, titulo, imagen, descripcion) {
    // Crea una instancia de la clase con los argumentos proporcionados
    var nombreDeLaClase = new tarjetas(titulo, imagen, descripcion);
  
    // Devuelve la instancia de la clase creada
    return nombreDeLaClase;
  }

  var objetosTarjetas = [
    {titulo: "Diseños de IA", imagen: "https://i.pinimg.com/236x/b8/73/e4/b873e4e484aa10857c1d460227549fd2.jpg", categoria: "programación_web"},
    {titulo: 'Aesthetic Design', imagen: 'https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg', categoria: 'aesthetic'},
    {titulo: 'CyberPunk', imagen: 'https://i.pinimg.com/236x/e8/2c/b8/e82cb85c82a95ed99f9139ebf9183649.jpg', categoria: 'cyberpunk'},
    {titulo: 'Pokémon', imagen: 'https://i.pinimg.com/236x/fd/56/5e/fd565e4e62eb6e35a69fdd9140c06a8f.jpg', categoria: 'pokemon'},
    {titulo: 'Retro Art', imagen: 'https://i.pinimg.com/236x/a6/e9/b1/a6e9b145f25fcc30ae82e312d43cf448.jpg', categoria: 'retro_art'},
    {titulo: 'Animal Crossing', imagen: 'https://i.pinimg.com/236x/fe/d1/26/fed126bff6d4642325963b8bc33b7ba3.jpg', categoria: 'animal_crossing'},
    {titulo: 'Web Design', imagen: 'https://i.pinimg.com/236x/95/b7/71/95b771f91a8889aabca7d3fa18e76512.jpg', categoria: 'web_design'},
    {titulo: 'Zelda', imagen: 'https://i.pinimg.com/236x/b9/ef/71/b9ef714bfda45d9d4f8cd8f990f40574.jpg', categoria: 'zelda'},
    {titulo: 'Fondos de pantalla', imagen:'https://i.pinimg.com/236x/b4/67/01/b467015c1c4053cc819154a405a2c1a0.jpg', categoria: 'fondo_pantalla'},
    {titulo: 'Wallpaper PC', imagen:'https://i.pinimg.com/236x/36/fd/74/36fd7465c6efd2cc221f46ff62ef7ad3.jpg', categoria: 'wallpapers'},
    {titulo: 'Anime', imagen:'https://i.pinimg.com/236x/c0/37/c3/c037c3126d2a9eec910a8724aed0e8fa.jpg', categoria: 'anime'},
    {titulo: 'Samus', imagen: 'https://i.pinimg.com/236x/cb/58/39/cb58399828e55ed76603aea150b2998d.jpg', categoria: 'samus'},
    {titulo: 'psychedelic', imagen: 'https://i.pinimg.com/564x/35/d9/86/35d986ff686546bc4c505fc6e2c378ef.jpg', categoria: 'psychedelic'},
    {titulo: 'Gatitos', imagen: 'https://i.pinimg.com/236x/71/5b/e2/715be2a4a323b4ee5231cdfc89681534.jpg', categoria: 'Gatitos'},
    {titulo: 'Dark', imagen: 'https://i.pinimg.com/564x/71/45/6f/71456f1881f09e889603e0ef2a08e264.jpg', categoria: 'Dark'},
    {titulo: 'Arte gráfico', imagen: 'https://i.pinimg.com/236x/ad/e6/4b/ade64b387829d79678bb3652a53f42c9.jpg', categoria: 'arte_grafico'},
    {titulo: 'Tatoos', imagen: 'https://i.pinimg.com/236x/1d/18/c2/1d18c24c9b8521661d6d8ff11d5e3e11.jpg', categoria: 'tatoos'},
    {titulo: 'Code', imagen: 'https://i.pinimg.com/564x/5b/a9/82/5ba9821517a3720c8cef32596f46a062.jpg', categoria: 'code'},
    {titulo: 'Comic', imagen: 'https://i.pinimg.com/564x/5e/4b/ea/5e4beaa17a95280f5cfbb0963632b81b.jpg', categoria: 'comic'},
    {titulo: 'Batman', imagen: 'https://i.pinimg.com/236x/ef/4c/2a/ef4c2aed49c92ce27c33e6cb7c44212e.jpg', categoria: 'batman'},
    {titulo: 'Pikachu', imagen: 'https://i.pinimg.com/236x/53/02/3e/53023ee0f0e21f2363e7c2b798d7db01.jpg', categoria: 'pikachu'},
    {titulo: 'Rubik', imagen: 'https://i.pinimg.com/564x/da/8e/03/da8e03f895638771a723e1422ca8803b.jpg', categoria: 'rubik'},
    {titulo: 'Mascotas', imagen: 'https://i.pinimg.com/236x/c5/67/73/c56773dcfc53442c16eae8af38fbf164.jpg', categoria: 'mascotas'},
    {titulo: 'Rock Music', imagen: 'https://i.pinimg.com/236x/85/66/a9/8566a969e34140d1ed661f53030366e1.jpg', categoria: 'rock'},
    {titulo: 'Ciudades', imagen: 'https://i.pinimg.com/564x/c3/b2/ec/c3b2ec50f00370491f0afd46f74ecd9f.jpg', categoria: 'ciudades'},
    {titulo: 'Fotografía Callejera', imagen: 'https://i.pinimg.com/236x/bf/5f/cf/bf5fcf1a27cf8ab29cd2e39c23360fd1.jpg', categoria: 'fotografía_callejera'},
    {titulo: 'Love', imagen: 'https://i.pinimg.com/564x/af/04/c6/af04c6cb9f6b393154f9637bb5016026.jpg', categoria: 'love'},
    {titulo: 'Tokyo', imagen: 'https://i.pinimg.com/564x/50/90/ef/5090efdf34deb3988d9d2ceb43d4847e.jpg', categoria: 'tokyo'},
    {titulo: 'Naturaleza', imagen: 'https://i.pinimg.com/236x/9f/04/e6/9f04e66b01eabc78c85ddacdf28cab15.jpg', categoria: 'naturaleza'},
    {titulo: 'Pixel Art', imagen: 'https://i.pinimg.com/236x/61/8f/08/618f083c61a7460ce0a6064319af41bd.jpg', categoria: 'pixel_art'},
    {titulo: 'Vintage', imagen: 'https://i.pinimg.com/236x/15/d2/96/15d296eada716243015f100f10995fe6.jpg', categoria: 'vintage'},
    {titulo: 'Viajar', imagen: 'https://i.pinimg.com/236x/73/05/1d/73051dde3d7e875eec3b6ed3fb6779d1.jpg', categoria: 'viajar'},
    {titulo: 'Experimental', imagen: 'https://i.pinimg.com/236x/45/40/43/454043e8c35c1074fcb9cd1848779c76.jpg', categoria: 'experimental'},
    {titulo: 'Neon', imagen: 'https://i.pinimg.com/236x/d8/3b/81/d83b818b9b48d51466e87347f7ead94d.jpg', categoria: 'Neon'},
    {titulo: '80s', imagen: 'https://i.pinimg.com/236x/3b/c8/16/3bc8168223bc4833fb16d691001aa998.jpg', categoria: '80s'},
    {titulo: '2000', imagen: 'https://i.pinimg.com/236x/70/88/44/708844fb3fbee6d14ff7871beecb1db7.jpg', categoria: '2000'},
    {titulo: 'Apples', imagen: 'https://i.pinimg.com/564x/60/c3/dd/60c3dd2d6f24059a1fed2e9ba9ad43d7.jpg', categoria: 'apples'},
    {titulo: 'Night', imagen: 'https://i.pinimg.com/236x/01/a1/8b/01a18baf2f74c3289eb8fd5de4a95ae9.jpg', categoria: 'night'},
    {titulo: 'DJ', imagen: 'https://i.pinimg.com/236x/9f/e3/85/9fe385c30d03ce4b3eb9add5addb18e3.jpg', categoria: 'dj'}
  ];

  function seleccionarObjetosAleatorios(conjuntoOriginal) {
    // Hacer una copia del conjunto original
    let conjuntoCopia = conjuntoOriginal.slice();
    // Crear un conjunto vacío para los objetos seleccionados aleatoriamente
    let conjuntoSeleccionado = [];
    // Seleccionar 8 objetos al azar y agregarlos al conjunto seleccionado
    for (let i = 0; i < 8; i++) {
      // Generar un índice aleatorio en el rango del conjunto copia
      let indiceAleatorio = Math.floor(Math.random() * conjuntoCopia.length);
      // Eliminar el objeto aleatorio del conjunto copia y agregarlo al conjunto seleccionado
      conjuntoSeleccionado.push(conjuntoCopia.splice(indiceAleatorio, 1)[0]);
    }
    // Devolver el conjunto seleccionado
    return conjuntoSeleccionado;
  }
  
  var objetosSeleccionados = seleccionarObjetosAleatorios(objetosTarjetas);
  console.log(seleccionarObjetosAleatorios(objetosTarjetas));

//////////////////////////////////////////////////////////////////////////////////
////////Creando la parte de Ideas para ti utilizando objetos//////////////////////
//////////////////////////////////////////////////////////////////////////////////
  var ideasP =   `<div class="ideasP1">
                  <p style = "margin: 2%";>Ideas para ti</p>
                  `;

  for (var i = 0; i < 8; i++) {
    var tarjeta = crearTarjetas("tarjeta" + i, objetosSeleccionados[i].titulo, objetosSeleccionados[i].imagen, objetosSeleccionados[i].categoria);
    ideasP +=`
        <div class="card search-bar" style = "margin-left: 2%;" id="div` + (i+1) + `">
          <div class="card-item">
          <div class= "titulo-card-` + (i+1) + `">
          <h3>` + tarjeta.titulo + `</h3>
          <img src="` + tarjeta.imagen + `" alt=" ` + tarjeta.descripcion + `" />
          </div>
          </div>
        </div>  `;
  }
  ideasP += `</div>`;

//////////////////////////////////////////////////////////////////////////////////
////////Creando la parte de Populares en pinterest utilizando objetos/////////////
//////////////////////////////////////////////////////////////////////////////////
  var popuP =   `<div class="populares">
                <p style = "margin: 2%";>Populares en pinterest</p>
                `;
  var j = 1;
  for (var i = 8; i < 12; i++) {
    var tarjeta = crearTarjetas("tarjeta" + i, objetosTarjetas[i].titulo, objetosTarjetas[i].imagen, objetosTarjetas[i].categoria);
    popuP +=`
            <div class="card search-bar" style = "margin-left: 2%" id="div` + (i+1) + `">
            <div class="card-item">
                <div class= "titulo-popu-` + j + `">
                    <h3>` + tarjeta.titulo + `</h3>
                
                <img
                src="` + tarjeta.imagen + `"
                alt="` + tarjeta.descripcion + `"
                />
                </div>
            </div>
        </div>`;
    j++;
  }
  ideasP += `</div>`;

  // Insertar los componentes de tipo Card, busquedas recientes, ideas y populares en pinterest en la ventana emergente llamada popup
  popup.innerHTML = res + ideasP + popuP;

//////////////////////////////////////////////////////////////////////////////////
////////Funcionalidad de búsqueda en los DIVS&Etiquetas///////////////////////////
//////////////////////////////////////////////////////////////////////////////////
  
  //Funcion para que al hacer click en un label con las ideas para ti se agregue al searchBar y realize la busqueda.
  function labelClick(){
    const labelText = this.innerText;
    searchBtn.value = labelText;
    unsplashBusqueda();
    popup.style.display = "none";
  }

  //Ciclo para agregar la funcion labelClick a todos las etiquetas de búsquedas recientes
  for (let i = 1; i <= 6; i++) {
    document.querySelector(`#label` +i).addEventListener('click', labelClick);
  }

  //Cambiando el texto del searchBar con las imagenes de las opciones.
  //Con esta opcion agregamos a la barra de busqueda el texto que contienen los divs, cerramos la ventana y luego realizamos la busqueda
  function divClick(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  }

  //Ciclo para agregar la funcion divClick a todos los div de la barra de busqueda
  for (let i = 1; i <= 12; i++) {
    document.querySelector(`#div` +i).addEventListener('click', divClick);
  }

  //Cerrar la ventana si se presiona ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Cerrar la ventana emergente
      popup.style.display = "none";
    }
  });
}

function updateSearchBar() {
  const searchValues = busquedasR.map(element => `<option>${element}</option>`).join('');
  document.getElementById('mySearchBarValues').innerHTML = searchValues;
}

//Funcion para realizar la busqueda en unsplash
function unsplashBusqueda(){
  const searchValue = searchBtn.value;
  const url = `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=4b0pExZtB3of1pv5IEVE9leVibY2shEZfe-tijEaCyg`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const images = data.results;
      container.innerHTML = '';
      images.forEach((image) => {
        const img = new Image();
        img.src = image.urls.regular;
        img.alt = image.description;
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', getRandomSize());
        galleryItem.appendChild(img);
        container.appendChild(galleryItem);
      });
    });

    //Permite actualizar el array donde estan las busquedas recientes en la ventana emergente
    for (let i = busquedasR.length - 1; i > 0; i--) {
      busquedasR[i] = busquedasR[i - 1]; // Mover elementos hacia la derecha
    }
    busquedasR[0] = searchValue; // Asignar nuevo valor al primer elemento
    console.log(busquedasR); 
}

//funcion para cerrar la ventana generada por el DOM
function cerrarVentana(){
  popup.style.display = "none";
}


const searchBar = document.querySelector(".search-bar");
//Evento para que al clickear la barra se ejecute la función buscar.
searchBar.addEventListener("click", buscar);