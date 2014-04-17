var click_and_show = function( origin , change ){
  $(origin).click(function(){
    $(change).show();
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
  

  $('#setsumei01').click(function(){
    var i=0;
    test = setInterval(function(){
      $('#time-block')[0].innerHTML = ++i;
      if(i==10){clearInterval(test);}
      },1000)
  });
});
