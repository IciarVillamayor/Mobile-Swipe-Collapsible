$(document).on("mobileinit", function() {
  $(function() {

    // SWIPE 
    /* He encontrado la solución en una respuesta de stack overflow 
    pero he quitado varias cosas como el event.handled y el $.mobile.activePage 
    porque he visto que realmente no eran imprescindibles y se podían eliminar
    
    https://stackoverflow.com/questions/23797331/using-swipe-gestures-to-change-pages-in-multi-page-jquery-mobile-application

    */
    $(document).on("swipeleft", ".ui-page", function() {
      let siguientePag = $(this).next('[data-role="page"]');

      if (siguientePag.length > 0) {
        $.mobile.changePage(siguientePag);
      }
    });
    $(document).on("swiperight", ".ui-page", function() {
      let pagAnterior = $(this).prev('[data-role="page"]');

      if (pagAnterior.length > 0) {
        $.mobile.changePage(pagAnterior);
      }
    });

    //ELEMENTO COLAPSABLE ABIERTO EN PORTRAIT

    /* No funcionaba el .attr("data-colapsed", true); y he investigado hasta encontrar
    esta pregunta en stackOverflow y la propia documentación de Jquery Mobile 
    
    https://stackoverflow.com/questions/25169117/jquery-mobile-collapsible-set-not-collapsing-on-demand
    
    https://api.jquerymobile.com/collapsible/
    */

    $(window).on("orientationchange", function(event) {
      if (event.orientation == "portrait") {
        $("#colapsarse").collapsible({ collapsed: false });
        console.log("holas");
      } else {
        $("#colapsarse").collapsible({ collapsed: true });
      }

      //$("#orient").text("este dispositivo está en modo " + event.orientation);
    });

    $(window).orientationchange();
  });
});




/*function swipingLeft(event) {
      
    }
    function swipingRight(event) {
      for (i = 1; i >= 3; i--) {}
    }*/

/*$("#main").on("swipeleft", function(){
            $(this).css("background-color", "red");
        })

        $("#elem").on("swiperight", function(){
            $(this).css("background-color", "blue");
        })

        $("#elem").on("tap", function(){
            $(this).css("background-color", "yellowgreen");
        })
        $("#elem").on("taphold", function(){
            $(this).css("background-color", "peachpuff");
        })*/
