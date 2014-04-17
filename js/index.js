var click_and_show = function( origin , change ){
  $(origin).click(function(){
    $(change).show();
  });
}
var timer = function(i){
  $('.time-block').html(i);
}
var clear_interval = function(){
  
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
  
  $('#third-page').click(function(){
    for( var i = 0; i < 10 ; i++){
      setInterval( timer(i) , 1000 );
    }
  });
});
