var click_and_show = function( origin , change ){
  $(origin).click(function(){
    $(change).show();
  });
}
var fourty_in_ten = function(){
  $('.time-block')[0].innerHTML = 0;
  $('.score-block')[0].innerHTML = 0;

  var i = 0;
  var clicked = 0;

  test = setInterval(function(){
    $('.time-block')[0].innerHTML = ++i;
    if( i == 10 ){
      if( $('.score-block')[0].innerHTML < 40 ){ $('#first-fail').fadeIn(200); }
      clearInterval(test);
    }
  }, 1000 );

  $('#fast-button').click(function(){
    $('.score-block')[0].innerHTML = ++clicked;
  });
}

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
  
  var i = 0;
  var clicked = 0;
  
  /* page three*/
  $('#setsumei01').click( fourty_in_ten );
  $('#restart-fast').click( fourty_in_ten );

});
