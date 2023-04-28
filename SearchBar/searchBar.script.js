let ventanaEmergenteAbierta = true;
var popup = document.querySelector(".resultados");
var searchBtn = document.getElementById("search-btn");
let busquedasR = [
  "Code",
  "Illustrator",
  "Pokémon",
  "Aesthetic",
  "React.js",
  "Mario Bros",
];

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
  //forOff * Investigar

  //Crear las opciones de busquedas recientes.
  let res =
    `<div class="busquedasR">
                <p>Búsquedas recientes</p>
                <br>
                <label class="label-with-button" for="search-btn" id="label1">
                `+
                busquedasR[0]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
                </label>
                <label class="label-with-button" for="search-btn" id="label2">
                `+
                busquedasR[1]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
                </label>
                <label class="label-with-button" for="search-btn" id="label3">
                `+
                busquedasR[2]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
                </label>
                <label class="label-with-button" for="search-btn" id="label4">
                `+
                busquedasR[3]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
                </label>
                <label class="label-with-button" for="search-btn" id="label5">
                `+
                busquedasR[4]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
                </label>
                <label class="label-with-button" for="search-btn" id="label6">
                `+
                busquedasR[5]+
                `
                <button class="button-in-label"><ion-icon name="close-outline"></ion-icon></button>
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
  function crearTarjetas(nombreDeLaClase, titulo, imagen, descripcion) {
    // Crea una instancia de la clase con los argumentos proporcionados
    var tarjeta = new tarjetas(titulo, imagen, descripcion);
  
    // Devuelve la instancia de la clase creada
    return tarjeta;
  }

//Aca se crean las cards especiales que son generadas a partir de objetos.
  var tarjeta1 = crearTarjetas(tarjeta1, "Diseños de IA", "https://i.pinimg.com/236x/b8/73/e4/b873e4e484aa10857c1d460227549fd2.jpg", "programación_web");

  var tarjeta2 = crearTarjetas(tarjeta2, 'Aesthetic Design', 'https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg', 'aesthetic');

  var tarjeta3 = crearTarjetas(tarjeta3, 'CyberPunk', 'https://i.pinimg.com/236x/e8/2c/b8/e82cb85c82a95ed99f9139ebf9183649.jpg', 'cyberpunk');

  var tarjeta4 = crearTarjetas(tarjeta4, 'Pokémon', 'https://i.pinimg.com/236x/fd/56/5e/fd565e4e62eb6e35a69fdd9140c06a8f.jpg', 'pokemon');

  var tarjeta5 = crearTarjetas(tarjeta5, 'Retro Art', 'https://i.pinimg.com/236x/a6/e9/b1/a6e9b145f25fcc30ae82e312d43cf448.jpg', 'retro_art');

  var tarjeta6 = crearTarjetas(tarjeta6, 'Animal Crossing', 'https://i.pinimg.com/236x/fe/d1/26/fed126bff6d4642325963b8bc33b7ba3.jpg', 'animal_crossing');

  var tarjeta7 = crearTarjetas(tarjeta7, 'Web Design', 'https://i.pinimg.com/236x/95/b7/71/95b771f91a8889aabca7d3fa18e76512.jpg', 'web_design');

  var tarjeta8 = crearTarjetas(tarjeta8, 'Zelda', 'https://i.pinimg.com/236x/b9/ef/71/b9ef714bfda45d9d4f8cd8f990f40574.jpg', 'zelda');

  //Variable ideasP para almacenar la ventana que sera mostrada al presionar el searchBar
  ideasP = `
  <div class="ideasP1">
    <p style = "margin: 2%";>Ideas para ti</p>
    <div class="card search-bar" style = "margin-left: 2%;" id="div1">
        <div class="card-item">
            <div class= "titulo-card-1">
                <h3>`+ tarjeta1.titulo +`</h3>
            </div>
            <img
            src="`+tarjeta1.imagen+`"
            alt="`+tarjeta1.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%;" id="div2">
        <div class="card-item">
            <div class= "titulo-card-2">
                <h3>`+ tarjeta2.titulo +`</h3>
            </div>
            <img
            src="`+tarjeta2.imagen+`"
            alt="`+tarjeta2.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%;" id="div3">
        <div class="card-item">
            <div class= "titulo-card-3">
              <h3>`+tarjeta3.titulo+`</h3>
            </div>
            <img
            src="`+tarjeta3.imagen+`"
            alt="`+tarjeta3.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%" id="div4">
        <div class="card-item">
        <div class= "titulo-card-4">
            <h3>`+tarjeta4.titulo+`</h3>
        </div>
            <img
            src="`+tarjeta4.imagen+`"
            alt="`+tarjeta4.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%" id="div5">
        <div class="card-item">
            <div class= "titulo-card-5">
                <h3>`+tarjeta5.titulo+`</h3>
            </div>
            <img
            src="`+tarjeta5.imagen+`"
            alt="`+tarjeta5.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%" id="div6">
        <div class="card-item">
            <div class= "titulo-card-6">
                <h3>`+tarjeta6.titulo+`</h3>
            </div>
            <img
            src="`+tarjeta6.imagen+`"
            alt="`+tarjeta6.descripcion+`"
            />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%" id="div7">
    <div class="card-item">
        <div class= "titulo-card-7">
            <h3>`+tarjeta7.titulo+`</h3>
        </div>
        <img
        src="`+tarjeta7.imagen+`"
        alt="`+tarjeta7.descripcion+`"
        />
        </div>
    </div>
    <div class="card search-bar" style = "margin-left: 2%" id="div8">
    <div class="card-item">
        <div class= "titulo-card-8">
            <h3>`+tarjeta8.titulo+`</h3>
        </div>
        <img
        src="`+tarjeta8.imagen+`"
        alt="`+tarjeta8.descripcion+`"
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
    <div class="card search-bar" style = "margin-left: 2%" id="div9">
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
    <div class="card search-bar" style = "margin-left: 2%" id="div10">
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
    <div class="card search-bar" style = "margin-left: 2%" id="div11">
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
    <div class="card search-bar" style = "margin-left: 2%" id="div12">
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

//Colocando el texto de las etiquetas de buscados recientemente.
  const label1 = document.getElementById('label1');
  const label2 = document.getElementById('label2');
  const label3 = document.getElementById('label3');
  const label4 = document.getElementById('label4');
  const label5 = document.getElementById('label5');
  const label6 = document.getElementById('label6');
  
  
  label1.addEventListener('click', () => {
    const labelText1 = label1.innerText;
    searchBtn.value = labelText1;
    unsplashBusqueda();
    popup.style.display = "none";
  });

  label2.addEventListener('click', () => {
    const labelText2 = label2.innerText;
    searchBtn.value = labelText2;
    unsplashBusqueda();
  });

  label3.addEventListener('click', () => {
    const labelText3 = label3.innerText;
    searchBtn.value = labelText3;
    unsplashBusqueda();
  });

  label4.addEventListener('click', () => {
    const labelText4 = label4.innerText;
    searchBtn.value = labelText4;
    unsplashBusqueda();
  });

  label5.addEventListener('click', () => {
    const labelText5 = label5.innerText;
    searchBtn.value = labelText5;
    unsplashBusqueda();
  });

  label6.addEventListener('click', () => {
    const labelText6 = label6.innerText;
    searchBtn.value = labelText6;
    unsplashBusqueda();
  });

  //Cambiando el texto del searBar con las imagenes de las opciones.
  const myDiv1 = document.getElementById('div1');
  const myDiv2 = document.getElementById('div2');
  const myDiv3 = document.getElementById('div3');
  const myDiv4 = document.getElementById('div4');
  const myDiv5 = document.getElementById('div5');
  const myDiv6 = document.getElementById('div6');
  const myDiv7 = document.getElementById('div7');
  const myDiv8 = document.getElementById('div8');
  const myDiv9 = document.getElementById('div9');
  const myDiv10 = document.getElementById('div10');
  const myDiv11 = document.getElementById('div11');
  const myDiv12 = document.getElementById('div12');


  myDiv1.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv2.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv3.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv4.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv5.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv6.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv7.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv8.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv9.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv10.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv11.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  myDiv12.addEventListener('click', function(){
    const h3Text = this.querySelector('h3').textContent;
    searchBtn.value = h3Text;
    popup.style.display = "none";
    unsplashBusqueda();
  });

  //Cerrar la ventana si se presiona ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Cerrar la ventana
      popup.style.display = "none";
    }
  });
}

function updateSearchBar() {
  const searchValues = busquedasR.map(element => `<option>${element}</option>`).join('');
  document.getElementById('mySearchBarValues').innerHTML = searchValues;
}

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

/*     let lastIndex = busquedasR.length -1;
    busquedasR[lastIndex] = searchValue;

    console.log(busquedasR); */

    //Permite actualizar el array donde estan las busquedas recientes
    for (let i = busquedasR.length - 1; i > 0; i--) {
      busquedasR[i] = busquedasR[i - 1]; // Mover elementos hacia la derecha
    }
    busquedasR[0] = searchValue; // Asignar nuevo valor al primer elemento
    console.log(busquedasR); 
}

function cerrarVentana(){
  popup.style.display = "none";
}

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("click", buscar);
