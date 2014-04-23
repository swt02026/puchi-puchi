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

var random_in_ten = function(){
  //var the_top = Math.floor(Math.random()*(100-0));
  //var the_left = Math.floor(Math.random()*(100-0));
  //$('#mov-button').css('top', the_top+'%');
  //$('#mov-button').css('left', the_left+'%');
  //setTimeout( random_in_ten , 1000 );
  var i = 0;
  test = setInterval(function(){
    $('.time-block')[0].innerHTML = ++i;
  	var the_top = Math.floor(Math.random()*(100-0));
  	var the_left = Math.floor(Math.random()*(100-0));
  	$('#mov-button').css('top', the_top+'%');
  	$('#mov-button').css('left', the_left+'%');

    if( i >= 20 ){
        clearInterval(test);
    }
  }, 1000);

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
  click_and_show( '#fourth-page' , '#fifth-page' );
  
  $('#to_page4').click(function(){
    $('#third-page').remove();
    $('#fourth-page').show();
    $('#setsumei02').fadeIn(800);
  });
  /* page three*/
  $('#setsumei01').click( fourty_in_ten );
  $('.restart-fast').click( fourty_in_ten );
  $('.explore').click(function(){window.open('','_self').close();}); // explore would close it the app itself

  /*page five*/
  $('#setsumei02').click(random_in_ten);
  $('#mov-button').click(function(){$('.score-block')[0].innerHTML++;});
});
