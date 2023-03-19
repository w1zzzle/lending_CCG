let center = [58.13957631670024,52.67546458055673];

function init() {
  let map = new ymaps.Map("map-test", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(center, 
    {
    balloonContentHeader: 'Cyber Club Glazov',
    balloonContentBody: '+7 909 713-53-29',
    balloonContentFooter: 'пн-вс 11:00 - 23:00'
    },
    {
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
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
