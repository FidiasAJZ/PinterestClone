// // Scroll infinito

const container = document.querySelector('.gallery');
let page = 1;
const imagesToFetch = 100;

const fetchImagesFromUnsplash = async (count) => {
  const accessKey = '4b0pExZtB3of1pv5IEVE9leVibY2shEZfe-tijEaCyg';
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`
  );
  const data = await response.json();
  return data;
};

const loadMorePictures = async () => {
  const lastPicture = container.lastElementChild;
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

