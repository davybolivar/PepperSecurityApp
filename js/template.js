$( window ).ready(function() {
  navListener();
});

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
