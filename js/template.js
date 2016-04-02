var touchSize = 100;

$( window ).ready(function() {
  // navListener();
  touchEffect();
});

function touchEffect(){
  $(window).mousedown(function (e) {
    var posX = (e.pageX - ( touchSize/2) );
    var posY = (e.pageY - ( touchSize/2) );
    var $elem = $('<div class="touch-effect"></div>');
    $( "html" ).append($elem);
    var styles = {'left':posX, 'top':posY};
    $elem.css(styles);

    setTimeout(function(){
      $elem.remove();
    }, 300);
  });
}

function navListener(){
  $( ".nav-bar li" ).click(function(e) {
    var $navElem =  $( this );
    $( "body" ).removeClass();
    $( ".nav-select" ).removeClass("nav-select");
    switch($navElem.attr("id")){
      case "detect-field":
        $navElem.addClass("nav-select");
        break;
      case "sound-field":
        $navElem.addClass("nav-select");
        $( "body" ).addClass("page2");
        break;
      case "email-field":
        $navElem.addClass("nav-select");
        $( "body" ).addClass("page3");
        break;
      case "timer-field":
        $navElem.addClass("nav-select");
        $( "body" ).addClass("page4");
        break;
    }
  });
}
