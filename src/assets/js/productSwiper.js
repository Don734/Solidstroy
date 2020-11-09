document.addEventListener('DOMContentLoaded', Init());

function Init() {
    productSwiper();
}

function productSwiper() {
    let productSwiper = '.product-slider';
    let productSwiperOptions = {
            spaceBetween: 10,
            loop: false,
            thumbs: {
                swiper: productThumbSwiper()
            }
        };


    let productSlider = new Swiper(productSwiper, productSwiperOptions)
}

function productThumbSwiper() {
    let productThumbSwiper = '.product-thumb-slider';
    let productThumbSwiperOptions = {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 2,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            },
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        };


    let productThumb = new Swiper(productThumbSwiper, productThumbSwiperOptions);

    return productThumb;
}