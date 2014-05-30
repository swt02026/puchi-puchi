/* use while changing object */
var hide_and_show = function( hider , shower ){
  $(hider).vclick(function(){
    $(this).hide();
    $(shower).show();
  });
}

/* use while changing page */
var remove_and_show = function( remover , remove_target , shower ){
  $(remover).vclick(function(){
    $(remove_target).remove();
    $(shower).show();
  });
}

var vclick_and_show = function( origin , change ){
  $(origin).vclick(function(){ $(change).show(); });
}

var tool_vclick_event = function(){
  if($('.tool-control').css('display') == 'none'){
    $('.tool-control').show();
  }else if($('.tool-control').css('display') == 'block'){
    $('.tool-control').hide();
  }
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

  $('#fast-button').vclick(function(){
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
  $('#mov-button').vclick(function(){ $('.score-block')[0].innerHTML++;});
}

var change_page_from_progress = function( vclicker , target ){
  $( vclicker ).click(function(){
    $( target ).fadeIn('slow');
    $('#progress-list').hide();
  });  
}
var isfirst = false, oldPosition = 0,CounterForJumpingMatrix= 0;

var change_jumping_matrix=function(){
  move = setInterval(function(){
	  var newPosition = Math.floor(Math.random()*(8-0)+0);
  	if(!isfirst)
	    isfirst = true;
  	else
	    $($('.jumping-matrix')[oldPosition]).removeClass('activate');
	    $($('.jumping-matrix')[oldPosition=newPosition]).addClass('activate');
	if(CounterForJumpingMatrix++>=20) clearInterval(move);
  },1000);
}
/* main function */
$(document).on('pageinit', function(event){
//jQuery(function($){
  var progress = localStorage.getItem('progress');
  $('#start-button').vclick(function(){
    $('#index-page').fadeOut('fast');
    
    if(progress == undefined || progress == null){
	    localStorage.setItem('progress',0);
	    $('#second-page').fadeIn(2000);
      }
    else{ $('#progress-list').fadeIn(1000);}
  });

  $('.tool').vclick( tool_click_event );

  $('.banner').vclick(function(){$(this).fadeOut(800);});

  vclick_and_show( '#tutorial-banner' , '#setsumei01' );
  vclick_and_show( '#setsumei01' , '#third-page');
  vclick_and_show( '#to_page4' , '#fourth-page' );
  vclick_and_show( '#fourth-page' , '#fifth-page' );
  
  /* page three */
  remove_and_show( '#to_page4' , '#third-page', '#fourth-page' );
  $('#setsumei02').fadeIn(800);
  $('#setsumei01').vclick( fourty_in_ten );
  $('.restart-fast').vclick( fourty_in_ten );
  $('.explore').vclick(function(){window.open('','_self').close();}); // explore would close it the app itself

  /*page five*/
  $('#setsumei02').vclick(random_in_ten);
  $('.restart-mov').vclick(random_in_ten);
  
  /* control functions of progress list */
  remove_and_show( '#to_real' , '#fifth-page' , '#progress-list');
  change_page_from_progress( '#first-circle' , '#first-stage-setsumei' );
  remove_and_show( '#first-setsumei' , '#first-stage-setsumei' , '#first-stage' );
  change_page_from_progress( '#second-circle' , '#second-stage-setsumei');
  remove_and_show( '#second-setsumei' , '#second-stage-setsumei' , '#second-stage');
  change_jumping_matrix();
});
