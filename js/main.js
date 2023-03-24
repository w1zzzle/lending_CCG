//==================== Yandex map ====================
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
//==================== Add weather with api ==================== youtube guide - https://www.youtube.com/live/2yi252YNGKU?feature=share

/*const apiKeyWeather = 'd66f080c8be64bb38e543249232403';
const queryWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKeyWeather}&q=Glazov`;

fetch(queryWeather).then((response) => {
  return response.json()
}).then((data) => {
  console.log(data);
  console.log(data.current.temp_c);
  console.log(data.current.feelslike_c);
  console.log(data.current.condition.text);
}) */

//==================== Smooth background change ==================== 24.03.2023

// const backgroundImg = [
//   './img/promo.jpg',
//   './img/photo1.jpg',
//   './img/photo2.jpg'
// ];
// const delay = 5000;
// let currentIndex = 0;
// setInterval(function() {
//     document.getElementById('image').src = backgroundImg[currentIndex];
//     currentIndex++;
//     if(currentIndex >= backgroundImg.length) {
//         currentIndex = 0;
//     }
// }, delay);
