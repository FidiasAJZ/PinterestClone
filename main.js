// Scroll infinito

const loadMorePictures = () => {
    const container = document.querySelector('.gallery');
    const lastPicture = container.querySelector('img:last-of-type');
    const lastPictureOffset = lastPicture.offsetTop + lastPicture.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastPictureOffset - bottomOffset) {
        const pictures = container.querySelectorAll('.gallery-item');
        pictures.forEach((picture) => {
            const clone = picture.cloneNode(true);
            container.appendChild(clone);
        });

        if (container.querySelectorAll('img').length >= 100) {
            window.removeEventListener('scroll', loadMorePictures);
        }
    }
};

window.addEventListener('scroll', loadMorePictures);
