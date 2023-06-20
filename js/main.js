// ==================== Yandex map ==================== //
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
        // iconImageHref: "./img/mark.png",
        iconImageSize: [50, 50],
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
// ================================================================================ //





/* ==================== SLIDER ==================== */
const counterElement = document.getElementById("counter");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const sliderItems = document.getElementsByClassName("slider__item");

let currentSlide = 1;
const totalSlides = sliderItems.length;

function updateCounter() {
    counterElement.textContent = `${currentSlide}/${totalSlides}`;
  }

// Счетчик по стрелкам
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

  // Счетчик при помощи перетаскивания мышкой
  $('.center').on('mousedown', function() {
    // Установить флаг, что началось перетаскивание слайдера
    isDragging = true;
  });
  
  // Обработчик события "mouseup"
  $('.center').on('mouseup', function() {
    // Если перетаскивание слайдера было завершено
    if (isDragging) {
      // Обновить текущий слайд и счетчик
      currentSlide = $('.center').slick('slickCurrentSlide') + 1;
      updateCounter();
      // Сбросить флаг перетаскивания
      isDragging = false;
    }
  });

updateCounter();

/* Lib - slick */
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

// ================================================================================ //





/* ==================== Navigation SCROLL ==================== */

// Находим все ссылки в навигационном меню
const menuLinks = document.querySelectorAll('ul li a[href^="#"]');

// Обходим каждую ссылку и добавляем обработчик события "click"
menuLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Функция, вызываемая при нажатии на ссылку
function scrollToSection(event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();

  // Получаем атрибут href ссылки
  const targetId = this.getAttribute('href');

  // Находим целевой блок для прокрутки
  const targetElement = document.querySelector(targetId);

  // Проверяем, существует ли целевой блок
  if (targetElement) {
    // Вычисляем позицию целевого блока относительно верхней границы страницы
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Прокручиваем страницу к целевому блоку
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Добавляем плавную прокрутку
    });
  }
}
// ================================================================================ //





/* ==================== POPUP's  ==================== */
const foodMenuButton = document.querySelector('.btn__food');
const gamesMenuButton = document.querySelector('.btn__games');
const foodMenuPopup = document.getElementById('foodMenuPopup');
const gamesMenuPopup = document.getElementById('gamesMenuPopup');
const overlay = document.getElementById('overlay');

foodMenuButton.addEventListener('click', () => {
    foodMenuPopup.classList.add('show');
    overlay.classList.add('show');
});

gamesMenuButton.addEventListener('click', () => {
    gamesMenuPopup.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
    foodMenuPopup.classList.remove('show');
    gamesMenuPopup.classList.remove('show');
    overlay.classList.remove('show');
});
/* ================================================================================ */

const header = document.getElementById('header');
const background = document.querySelector('.header__background');

window.addEventListener('mousemove', function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  background.style.transform = `translate(-${x * 50}px, -${y * 10}px`
});

header.addEventListener('mouseleave', function() {
  background.style.transform = 'translate(0, 0)';
});