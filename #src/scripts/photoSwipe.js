import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js'
import PhotoSwipe from './photoswipe.esm.min.js';

new PhotoSwipeLightbox({
	gallery: '#portfolio-about-modal__gallery',
	children: 'a',
	pswpModule: PhotoSwipe,
}).init()