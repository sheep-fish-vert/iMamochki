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

    function footerLinkClick(){
      $('.footer .call-back').click(function(event) {
        event.preventDefault();
        $('#mapblock').toggleClass('active');
        $('.map-form').toggleClass('active');
        $('form').trigger("reset");
      });
    }
    $(document).ready(function(){
        yaMap();
        footerLinkClick();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}