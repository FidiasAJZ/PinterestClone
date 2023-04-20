// // Scroll infinito

const container = document.querySelector('.gallery');
let page = 1;
const imagesToFetch = 200;
const lastPicture = container.lastElementChild;

const fetchImagesFromUnsplash = async (count) => {
  const accessKey = '4b0pExZtB3of1pv5IEVE9leVibY2shEZfe-tijEaCyg';
  const secretKey = 'TvHhh76XWCrh1U2reqdP7Nx-hdy0IfdfBKkSkoXxUfA';
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&client_secret=${secretKey}&count=${count}`
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
        galleryItem.classList.add('gallery-item');
        galleryItem.appendChild(img);
        container.appendChild(galleryItem);
      });
      page++;
    } catch (error) {
      const pictures = container.querySelectorAll('.gallery-item');
      if (pictures.length > 0) {
        const numClones = Math.max(0, imagesToFetch - pictures.length);
        for (let i = 0; i < numClones; i++) {
          const clone = pictures[i % pictures.length].cloneNode(true);
          container.appendChild(clone);
        }
      }
      page++;

      if (container.querySelectorAll('img').length >= imagesToFetch) {
        window.removeEventListener('scroll', loadMorePictures);
      }
    }
  }
};

window.addEventListener('scroll', loadMorePictures);




/*------------------------- funtion Button of Crear ----------------------------- */
const btnDropdown = document.querySelector("#navCrear");
const drop = document.querySelector(".crear-down");

function dropdown() {
  btnDropdown.addEventListener("click", () => {
    drop.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (event.target === btnDropdown || event.target === drop) {
      return;
    }
    drop.classList.remove("active");
  });

  drop.addEventListener("mouseover", () => {
    const elementoActivo = document.querySelectorAll("#creaOption");

    elementoActivo.forEach((item) => {
      item.addEventListener("mouseenter", (event) => {
        elementoActivo.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });
        item.classList.add("active");
      });
      item.addEventListener("mouseleave", () => {
        if (item.event.target === item) {
          item.classList.remove("active");
        }
      });
    });
  });
}
dropdown();
 