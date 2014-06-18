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
  $(origin).click(function(){ $(change).show(); });
}

var tool_click_event = function(){
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
  var j = 0;
  $('#fast-button').click(function(){
    $('.score-block')[0].innerHTML = ++j;
  });
  var i = 0;
  test = setInterval(function(){
    $('.time-block')[0].innerHTML = ++i;
    if( i >= 10 ){
      if( $('.score-block')[0].innerHTML < 10 ){ $('#first-fail').fadeIn(200); }
      if( $('.score-block')[0].innerHTML >= 10 ){ $('#first-success').fadeIn(200);}
      clearInterval(test);
    }
  }, 1000 );

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
  $('#mov-button').click(function(){ $('.score-block')[0].innerHTML++;});
}

var change_page_from_progress = function( clicker , target ){
  $( clicker ).click(function(){
    $( target ).fadeIn('slow');
    $('#progress-list').hide();
  });  
}


var isfirst = false, oldPosition = 0,CounterForJumpingMatrix= 0;
var change_jumping_matrix=function()
{
  move = setInterval(function(){
	  var newPosition = Math.floor(Math.random()*(8-0)+0);
  	if(!isfirst)
	    isfirst = true;
  	else
	    $($('.jumping-matrix')[oldPosition]).removeClass('activate');
	    $($('.jumping-matrix')[oldPosition=newPosition]).addClass('activate');
	if(CounterForJumpingMatrix++>=20)
	    clearInterval(move);
  },1000);
}

var FirstStageCounter = 0,score = 0;
var FirstStage = function()
{
  var Image = ['#target_alian',"#target_nothing"];
  var selectImg = 0;
  moveFirstSatge = setInterval(function(){
	selectImg = Math.floor(Math.random()*2);
	$(Image[selectImg]).show();
	$(Image[1-selectImg]).hide();
	if(FirstStageCounter++>=20)
		clearInterval(moveFirstSatge);
  },2000);
  $('#first-button').click(function(){
	console.log(score+=((selectImg==0)-(selectImg==1)));
  });
}
/* main function */
jQuery(function($){
//  src="./source/0514.mp3"
//  var soundObj = new Media(src,onSuccess,onError);
//  soundObj.play();
  var progress = localStorage.getItem('progress');
  $('#start-button').click(function(){
    $('#index-page').fadeOut('fast');
    
    if(progress == undefined || progress == null){
	    localStorage.setItem('progress',0);
	    $('#second-page').fadeIn(2000);
      }
    else if(progress == 1 ){
        $('#first-stage-setsumei').fadeIn(2000);
    }
    else if(progress == 2){
        $('#second-stage-setsumei').fadeIn(2000);
    }
    else{ $('#progress-list').fadeIn(1000);}
  });

  $('.tool').click( tool_click_event );

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
  
  /* control functions of progress list */
  remove_and_show( '#to_real' , '#fifth-page' , '#progress-list');
  change_page_from_progress( '#first-circle' , '#first-stage-setsumei' );
  remove_and_show( '#first-setsumei' , '#first-stage-setsumei' , '#first-stage' );
  FirstStage();
  change_page_from_progress( '#second-circle' , '#second-stage-setsumei');
  remove_and_show( '#second-setsumei' , '#second-stage-setsumei' , '#second-stage');
  change_jumping_matrix();
});
