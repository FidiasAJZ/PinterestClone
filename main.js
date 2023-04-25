// // Scroll infinito

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
window.addEventListener('scroll', debounce(loadMorePictures, 500));



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
