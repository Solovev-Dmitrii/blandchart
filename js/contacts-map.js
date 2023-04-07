document.addEventListener("DOMContentLoaded", function() {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.760512544446094,37.611054978557334],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
        },
        {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition:  { top: "200px", right: "20px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "120px", right: "20px" }
        })



      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/contacts/map-mark.svg',
          iconImageSize: [20, 20],

      });



      //Размещение геобъекта на карте.
      // myMap.geoObjects.add(myGeoObject);
      myMap.geoObjects.add(myPlacemark);
  }




})
