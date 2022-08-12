const sliderImage = document.getElementById('slider_image');
const slides = [ 
    {   imageUrl: './Image/slider_1.png',
        city: 'Rostov-on-Don LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request'
    },

    {   imageUrl: './Image/slider_2.png',
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request'
    },

    {   imageUrl: './Image/slider_3.png',
        city: 'Rostov-on-Don LCD Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request'
    }
];


let currentSlide = 0;
goToSlide(0);

function goNext() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    handleSlideChanged(currentSlide);
}

function goPrevious () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    handleSlideChanged(currentSlide);
}

function goToSlide(imageIndex) {
    currentSlide = imageIndex;
    handleSlideChanged(currentSlide);
}

function handleSlideChanged(slideNumber) {
    const slide = slides[slideNumber];
    sliderImage.src = slide.imageUrl;

    const elements = document.querySelectorAll('.information');
    elements[0].innerText = slide.city;
    elements[1].innerText = slide.apartmentArea;
    elements[2].innerText = slide.repairTime;
    elements[3].innerText = slide.repairCost;

    const dots = document.querySelectorAll('.point');
    dots.forEach((dot, index) => {
        dot.style.opacity = index === slideNumber ? 1 : 0.3;
    });

    const links = document.querySelectorAll('.header-navigation__item.image_header')
    links.forEach((link, index) => {
        if (index === slideNumber) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}