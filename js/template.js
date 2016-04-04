var touchSize = 100;
var formList = ['step1','step2','step3','step4'];
var map = {};

// Object
var settingsData = {
  "detectMove" : 2,     //Both
     "alarmOn" : true,  //Sound on
       "email" : '',    //Empty Email
     "clockIn" : 0,     //Empty time
    "clockOut" : 0
}

$( window ).ready(function() {
  // navListener();
  sliderArrow();
  touchEffect();
  toggleSwitch();

  // Init
  getInputData(settingsData);
  setupProfile(settingsData);
});

// Helper functions
function toggleSwitch(){
  $( ".switch-button" ).click(function(e) {
    var $parentContainer = $( this ).closest(".input-wrapper");
    var $radioButton = $parentContainer.find("input[type='radio']");
    $radioButton.click();
    getInputData(settingsData);
    setupProfile(settingsData);
  });
}

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

function sliderArrow(){
  $( ".slider .arrow" ).click(function(e) {
    var $arrow = $( this );
    var $pageElem = $( "#settings-page" );
    var currentIndex = getIndexOfVal(formList,$pageElem.attr("class"))

    if($arrow.hasClass("slide-left")){
      if(currentIndex >  0){
        $pageElem.removeClass();
        $pageElem.addClass(formList[currentIndex - 1]);
      }

      if( currentIndex <= 1){
        $( ".slide-left" ).addClass("hide-arrow");
      }

      if( currentIndex <= (formList.length - 1)){
        $( ".slide-right" ).removeClass("hide-arrow");
      }
    }
    else if($arrow.hasClass("slide-right")){
      if(currentIndex <  (formList.length - 1)){
        $pageElem.removeClass();
        $pageElem.addClass(formList[currentIndex + 1]);
      }

      if( currentIndex == (formList.length - 2)){
        $( ".slide-right" ).addClass("hide-arrow");
      }

      if( currentIndex >= 0){
        $( ".slide-left" ).removeClass("hide-arrow");
      }
    }
  });
}

function getIndexOfVal(array, target){
  var index = -1;
  for(var ctr = 0, temp = ''; temp != target && ctr < array.length; ctr++){
    temp = array[ctr];
    if(temp == target){
      index = ctr;
    }
  }
  return index;
}

function setupProfile(data){
  var $statusIcons = $( ".header-section:nth-child(3) ul" );
  var $moveIcon = $statusIcons.find("li:nth-child(1)");
  var $hearIcon = $statusIcons.find("li:nth-child(2)");
  var $alarmIcon = $statusIcons.find("li:nth-child(3)");

  $moveIcon.removeClass("active-icon");
  $hearIcon.removeClass("active-icon");
  $alarmIcon.removeClass("active-icon");

  if(data.detectMove == 0){
    $moveIcon.addClass("active-icon");
  }

  if(data.detectMove == 1){
    $hearIcon.addClass("active-icon");
  }

  if(data.detectMove == 2){
    $moveIcon.addClass("active-icon");
    $hearIcon.addClass("active-icon");
  }

  if(data.alarmOn){
    $alarmIcon.addClass("active-icon");
  }
}

function getInputData(data){
  if ($('input[name=detect-mode]:first').is(':checked')){
    data.detectMove = 0;
  }
  else if($('input[name=detect-mode]:last').is(':checked')){
    data.detectMove = 2;
  }
  else{
    data.detectMove = 1;
  }

  if ($('input[name=alarm-switch]:first').is(':checked')){
    data.alarmOn = true;
  }
  else{
    data.alarmOn = false;
  }
}
