/* use while changing object */
var hide_and_show = function( hider , shower ){
  $(hider).click(function(){
    $(this).hide();
    $(shower).show();
  });
}

/* use while changing page */
var remove_and_show = function( remover , remove_target , shower ){
  $(remover).click(function(){
    $(remove_target).remove();
    $(shower).show();
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
  test = setInterval(function(){
    $('.time-block')[0].innerHTML = ++i;
    if( i >= 10 ){
      if( $('.score-block')[0].innerHTML < 40 ){ $('#first-fail').fadeIn(200); }
      if( $('.score-block')[0].innerHTML >= 40 ){ $('#first-success').fadeIn(200);}
      clearInterval(test);
    }
  }, 1000 );

  $('#fast-button').click(function(){
    $('.score-block')[0].innerHTML ++;
  });
}

var random_in_ten = function(){
  $('.time-block')[0].innerHTML = 0;
  $('.score-block')[0].innerHTML = 0;
  var i = 0;
  test = setInterval(function(){
    $('.time-block')[0].innerHTML=++i;
  	var the_top = Math.floor(Math.random()*(80-20)+20);
  	var the_left = Math.floor(Math.random()*(80-20)+20);
  	$('#mov-button').css('top', the_top+'%');
  	$('#mov-button').css('left', the_left+'%');

    if( i >= 20 ){
        if( $('.score-block')[0].innerHTML < 10 ){ $('#second-fail').fadeIn(200);}
        if( $('.score-block')[0].innerHTML >= 10 ){ $('#second-success').fadeIn(200);}
        clearInterval(test);
    }
  }, 1000);
  $('#mov-button').click(function(){
      $('.score-block')[0].innerHTML ++;
  });
}


/* main function */
jQuery(function($){
var progress = localStorage.getItem('progress');
  $('#start-button').click(function(){
    $('#index-page').fadeOut('fast');
    
  localStorage.setItem('progress',0);
  if(progress==undefined || progress==null)
    {
	$('#second-page').fadeIn(2000);
    }
  else 
    $('#progress-list').fadeIn(1000);    
  });
  $('.banner').click(function(){$(this).fadeOut(800);});

  click_and_show( '#tutorial-banner' , '#setsumei01' );
  click_and_show( '#setsumei01' , '#third-page');
  click_and_show( '#to_page4' , '#fourth-page' );
  click_and_show( '#fourth-page' , '#fifth-page' );
  
  /* page three */
  remove_and_show( '#to_page4' , '#third-page', '#fourth-page' );
  $('#setsumei02').fadeIn(800);
  $('#setsumei01').click( fourty_in_ten );
  $('.restart-fast').click( fourty_in_ten );
  $('.explore').click(function(){window.open('','_self').close();}); // explore would close it the app itself

  /*page five*/
  $('#setsumei02').click(random_in_ten);
  $('.restart-mov').click(random_in_ten);
  remove_and_show( '#to_real' , '#fifth-page' , '#progress-list');

});
