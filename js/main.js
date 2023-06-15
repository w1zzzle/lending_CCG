//==================== Yandex map ====================
// ADD TO CSS

/* Detele copyright panel from ya.Map */
// [class*="copyrights-pane"] {
//     display: none !important;
// }

// /* Delete color from ya.Map */
// [class*="ground-pane"] {
//     filter: grayscale(1) invert(0);
// }

// .map {
//     height: 500px;
//     background-color: #333;
// }

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

/* SLIDER */
const counterElement = document.getElementById("counter");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const sliderItems = document.getElementsByClassName("slider__item");

let currentSlide = 1;
const totalSlides = sliderItems.length;

function updateCounter() {
    counterElement.textContent = `${currentSlide}/${totalSlides}`;
  }

leftArrow.addEventListener("click", function() {
    currentSlide--;
    if (currentSlide < 1) currentSlide = totalSlides;
    updateCounter();
  });

  rightArrow.addEventListener("click", function() {
    currentSlide++;
    if (currentSlide > totalSlides) currentSlide = 1;
    updateCounter();
  });

updateCounter();

/* Lib - slick */
$('.center').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right")
  });

// ===================================



