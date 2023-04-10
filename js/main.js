
let center = [58.13957631670024,52.67546458055673];

function init() {
  let map = new ymaps.Map("map-test", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(center, {
      // Зададим содержимое заголовка балуна.
      balloonContentHeader: '<a href = "#">Cyber Club Glazov #1</a><br>' +
      '<span class="description">Компьютерный клуб</span>',
      // Зададим содержимое основной части балуна.
      balloonContentBody: '<img href="https://vk.link/fungamersglazov" src="img/logo.jpg" height="100" width="100"> <br/> ' +
      '<a href="tel:+79097135329">+7 (909) 713-53-29</a><br/>',
      // Зададим содержимое нижней части балуна.
      balloonContentFooter: 'вс-чт 11:00 - 23:00<br/>пт, сб 11:00 - 04:00',
      // Зададим содержимое всплывающей подсказки.
      hintContent: 'Cyber Club Glazov #1'
    }, {
      iconLayout: "default#image",
      iconImageHref: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44],
    }
  );
  
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark); // вставляем метку
}

ymaps.ready(init);

//==================== Yandex map ====================
let center = [58.13957631670024, 52.67546458055673];

function init() {
    let map = new ymaps.Map("map-test", {
        center: center,
        zoom: 16,
    });

    let placemark = new ymaps.Placemark(center, {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#">Cyber Club Glazov #1</a><br>' +
            '<span class="description">Компьютерный клуб</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img href="https://vk.link/fungamersglazov" src="img/logo.jpg" height="100" width="100"> <br/> ' +
            '<a href="tel:+79097135329">+7 (909) 713-53-29</a><br/>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'вс-чт 11:00 - 23:00<br/>пт, сб 11:00 - 04:00',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Cyber Club Glazov #1'
    }, {
        iconLayout: "default#image",
        iconImageHref: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-19, -44],
    }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placemark); // вставляем метку
}
ymaps.ready(init);

// window.addEventListener("scroll", e => {
// let navbar = document.getElementById("navbar").classList
// let active_class = "navbar_scrolled"

//      if (pageYOffset > 120)
//         navbar.add(active_class)
//     else
//         navbar.remove(active_class)
// })

let header = document.querySelector('header');
let headerH = document.querySelector('header').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    }
    else{
    header.classList.remove('fixed')
    document.body.removeAttribute('style')
    }
}

/* =============== PRICE MENU SLIDER =============== */ 
let offSet = 0;
const priceSlider = document.querySelector('.price-box');

document.querySelector('.price-pc').addEventListener('click', function() {
    offSet = 0;
    priceSlider.style.left = -offSet + 'px'
});

document.querySelector('.price-kitchen').addEventListener('click', function() {
    offSet = -1200;
    priceSlider.style.left = offSet + 'px'
});
/* =============== =============== =============== */ 

var aboutMenu = document.getElementById("about-menu");
var advantagesMenu = document.getElementById("advantages-menu");
var priceMenu = document.getElementById("price-menu");
var reviewMenu = document.getElementById("review-menu");
var contactMenu = document.getElementById("contact-menu");

var navAboutMenu = document.querySelector('.nav-about-menu');
var navAdvantagesMenu = document.querySelector('.nav-advantages-menu');
var navPriceMenu = document.querySelector('.nav-price-menu');
var navReviewMenu  = document.querySelector('.nav-review-menu');
var navContactMenu = document.querySelector('.nav-contact-menu');

function aboutMenuScroll() {
    aboutMenu.scrollIntoView({block: "center", behavior: "smooth"});
}
function advantagesMenuScroll() {
    advantagesMenu.scrollIntoView({block: "center", behavior: "smooth"});
}
function priceMenuScroll() {
    priceMenu.scrollIntoView({block: "center", behavior: "smooth"});
}
function reviewMenuScroll() {
    reviewMenu.scrollIntoView({block: "center", behavior: "smooth"});
}
function contactMenuScroll() {
    contactMenu.scrollIntoView({block: "center", behavior: "smooth"});
}


navAboutMenu.addEventListener('click', aboutMenuScroll);
navAdvantagesMenu.addEventListener('click', advantagesMenuScroll);
navPriceMenu.addEventListener('click', priceMenuScroll);
navReviewMenu.addEventListener('click', reviewMenuScroll);
navContactMenu.addEventListener('click', contactMenuScroll);

