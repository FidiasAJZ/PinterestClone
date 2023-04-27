// Agregar Botones a las imagenes
function addButtonsToImages() {
  const images = document.querySelectorAll('.gallery-item img');
  images.forEach((img) => {
    const galleryItem = img.parentNode;
    const button = document.createElement('button');
    button.classList.add('btnOpciones');
    button.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
    const btnCompartir = document.createElement('button');
    btnCompartir.classList.add('btnCompartir');
    btnCompartir.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i>';
    const btnGuardar = document.createElement('button');
    btnGuardar.classList.add('btnGuardar');
    btnGuardar.textContent = 'Guardar';
    galleryItem.appendChild(button);
    galleryItem.appendChild(btnCompartir);
    galleryItem.appendChild(btnGuardar);
  });
}

// Scroll infinito

const container = document.querySelector('.gallery');
let lastPicture = container.lastElementChild;
const imagesToFetch = 200;

// Agregar una clase de tamaño al azar para cada contenedor de imagen
const getRandomSize = () => ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => item.classList.add(getRandomSize()));

// Llama imagenes atraves de la API de unsplash
const fetchImagesFromUnsplash = async (count) => {
  const accessKey = '4b0pExZtB3of1pv5IEVE9leVibY2shEZfe-tijEaCyg';
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`
  );
  const data = await response.json();
  return data;
};

const loadMorePictures = async () => {
  const lastPictureOffset = lastPicture.offsetTop + lastPicture.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;
  const bottomOffset = 20;
  if (pageOffset > lastPictureOffset - bottomOffset) {
    try {
      const images = await fetchImagesFromUnsplash(imagesToFetch);
      images.forEach((image) => {
        const img = new Image();
        img.src = image.urls.regular;
        img.alt = image.description;
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', getRandomSize());
        galleryItem.appendChild(img);

        // Adding buttons to the fetched images
        addButtonsToImages();

        container.appendChild(galleryItem);
        lastPicture = galleryItem;
      });
      if (container.querySelectorAll('img').length >= imagesToFetch) {
        window.removeEventListener('scroll', debounce(loadMorePictures, 200));
      }
      // si hay problema llamando fotos de unspash, entonces clonara las fotos ya existentes
    } catch (error) {
      const pictures = container.querySelectorAll('.gallery-item');
      if (pictures.length > 0) {
        const numClones = Math.max(0, imagesToFetch - pictures.length);
        for (let i = 0; i < numClones; i++) {
          const original = galleryItems[i % galleryItems.length];
          const clone = original.cloneNode(true);
          clone.classList.add(getRandomSize());

          // Adding buttons to the cloned images
          addButtonsToImages();

          container.appendChild(clone);
        }
        lastPicture = container.lastElementChild;
      }
    }
  }
};
// Ayuda a evitar llamadas inecesarias a la API poniendo un delay una vez se hace scroll hasta el final
const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// Evento que activa la funcion cuando se hace scroll
window.addEventListener('scroll', debounce(loadMorePictures, 200));



/*------------------------- funtion Button of dropdown ----------------------------- */
const toggleBtns = document.querySelectorAll(".dropdown-toggle");
const drops = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", () => {
    drops[i].classList.toggle("active");

    //este codigo hace que al darle click en cualquier para del document se oculte el dropdown
    document.addEventListener("click", (event) => {
      if (
        !toggleBtns[i].contains(event.target) &&
        !drops[i].contains(event.target)
      ) {
        drops[i].classList.remove("active");
      }
    });

    /* ------------------ function hover efect -----------------------------*/
    drops[i].addEventListener("mouseover", () => {
      const elementoActivo = document.querySelectorAll(".dropdown-item");
      elementoActivo.forEach((item) => {
        item.addEventListener("mouseenter", (event) => {
          elementoActivo.forEach((otherItem) => {
            otherItem.classList.remove("active");
          });
          item.classList.add("active");
        });
        item.addEventListener("mouseleave", () => {
          if (item.target === item) {
            item.classList.remove("active");
          }
        });
      });
    });
  });
}


//Search con Unsplash API
const form = document.querySelector('form');
const searchInput = document.querySelector('#search-btn');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchValue = searchInput.value;
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
      addButtonsToImages();

      //Permite actualizar el array donde estan las busquedas recientes
      for (let i = busquedasR.length - 1; i > 0; i--) {
        busquedasR[i] = busquedasR[i - 1]; // Mover elementos hacia la derecha
      }
      busquedasR[0] = searchValue; // Asignar nuevo valor al primer elemento
      console.log(busquedasR);
    });
});