(
function($) {
  var headerHeight = $('header').outerHeight();
  //Smooth scroll function
  $(document).ready(function(){

    $('.slide-section').click(function(e) {

      var linkHref = $(this).attr('href');

      $("html, body").animate({
        scrollTop: $(linkHref).offset().top}, 900);

      e.preventDefault();
    })
  });
  //Height placement for smallMenu
  $('.smallMenu').css({'top': headerHeight})
  introPadding = headerHeight + 120 +'px' + ' 15px 60px 15px';
  $('.intro').css({'padding': introPadding})

  //Toggling hidden menu for smaller screens. Fade in from Right
  // $('.toggle').click(function(){
  //   if($('.smallMenu').width() === 0){
  //     $('.smallMenu').css({'width': '100%'});
  //   }else if($('.smallMenu').css({'width': '100%'})){
  //     $('.smallMenu').css({'width': 0});
  //   }
  // });
  //Toggliong hidden menu for small screens. Fade in from Top
  $('.toggle').click(function(){
    if($('.smallMenu').height() === 0){
      $('.smallMenu').css({'height':'100%'});
      $('html, body').css({'overflow':'hidden'});
    }else if($(".smallMenu").css({'height':'100%'})){
      $('html, body').css({'overflow':'visible'});
      $('.smallMenu').css({'height':0});
    }
  });
}
) ( jQuery );
