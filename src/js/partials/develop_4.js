try{
    function yaMap(){
        ymaps.ready(init);
          var myMap,
              myPlacemark;

          function init(){
              myMap = new ymaps.Map ("mapblock", {
                  center: coord,
                  zoom: 14
              });
              myMap.controls
                  .add('zoomControl')
                  .add('typeSelector')
                  .add('mapTools');;

              myPlacemark = new ymaps.Placemark(coord, {
                  hintContent: 'Торговый комплекс «ОЛИМП»'
              });
              myMap.geoObjects.add(myPlacemark);
          }
    }

    $(document).ready(function(){
        yaMap();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}