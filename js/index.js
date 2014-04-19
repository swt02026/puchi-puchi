var hide_and_show = function( hider , shower ){
  $(hider).click(function(){
    $(this).hide();
    $(shower).hide();
  });
}

var click_and_show = function( origin , change ){
  $(origin).click(function(){
    $(change).show();
  });
}

/* the page three*/
var fourty_in_ten = function(){
  $('.time-block')[0].innerHTML = 0;
  $('.score-block')[0].innerHTML = 0;

  var i = 0;
  var clicked = 0;

  test = setInterval(function(){
    $('.time-block')[0].innerHTML = ++i;
    if( i == 10 ){
      if( $('.score-block')[0].innerHTML < 40 ){ $('#first-fail').fadeIn(200); }
      if( $('.score-block')[0].innerHTML >= 40 ){ $('#first-success').fadeIn(200);}
      clearInterval(test);
    }
  }, 1000 );

  $('#fast-button').click(function(){
    $('.score-block')[0].innerHTML = ++clicked;
  });
}

/* main function */
jQuery(function($){
  $('#start-button').click(function(){
    $('#index-page').fadeOut('fast');
    $('#second-page').fadeIn(3000);
  });
  $('.banner').click(function(){
    $(this).fadeOut(800);
  });

  click_and_show( '#tutorial-banner' , '#setsumei01' );
  click_and_show( '#setsumei01' , '#third-page');
  click_and_show( '#to_page4' , '#fourth-page' );
  
  $('#to_page4').click(function(){
    $('#third-page').remove();
    $('#fourth-page').show();
  });
  /* page three*/
  $('#setsumei01').click( fourty_in_ten );
  $('.restart-fast').click( fourty_in_ten );
  $('.explore').click(function(){window.open('','_self').close();}); // explore would close it the app itself
});
