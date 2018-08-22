(
function($) {
  $(document).ready(function(){

    var headerHeight = $('header').outerHeight();
    console.log(headerHeight);

    $('.slide-section').click(function(e) {

      var linkHref = $(this).attr('href');

      $("html, body").animate({
        scrollTop: $(linkHref).offset().top}, 900);

      e.preventDefault();
    })
  });
  $('.toggle').click(function(){
    if($('.smallMenu').width() === 0){
      $('.smallMenu').css({'width': '250px'});
    }else if($('.smallMenu').width() === 250){
      $('.smallMenu').css({'width': 0});
    }
  });
}
) ( jQuery );
