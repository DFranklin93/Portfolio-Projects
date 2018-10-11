(
function($) {
  var headerHeight = $('header').outerHeight();
  var screenHeight = window.screen.height;
  // trying to use screen height in order to place divs perfect for each screen
  console.log(window.screen.height);
  $(document).ready(function(){
    //Smooth scroll function
    $('.slide-section').click(function(e) {
      var linkHref = $(this).attr('href');
      $("html, body").animate({
        scrollTop: $(linkHref).offset().top}, 900);
      e.preventDefault();
      // Closes the smallMenu when a menu item is selected
      if($('.smallMenu').css({'height':'100%'})){
        $('.smallMenu').css({'height':0});
        $('.smallMenu').css({'transition':'1s ease-in-out'});
        $('html, body').css({'overflow':'visible'});
      }else if($('.smallMenu').height() === 0){
        $('html, body').css({'overflow':'hidden'});
      }
    })
    console.log(headerHeight);
    // Placement of the smallMenu right under the smaller screen navbar
    $('.smallMenu').css({'top': headerHeight});
    // Creates responsive padding for content divs
    introPadding = headerHeight +'px' + ' 15px';
    $('.intro').css({'padding': introPadding});
    // Makes intro fit to screen Height
    $('.intro').css({'height': screenHeight});
    // Hamburger menu opening and closing function
    $('.toggle').click(function(){
      if($('.smallMenu').height() === 0){
        $('.smallMenu').css({'height':'100%'});
        $('html, body').css({'overflow':'hidden'});
      }else if($(".smallMenu").css({'height':'100%'})){
        $('html, body').css({'overflow':'visible'});
        $('.smallMenu').css({'height':0});
      }
    });
    // Hamburger meneu touchevent
    $('.toggle').on('tap',function(){
      console.log('on tap');
      if($('.smallMenu').height() === 0){
        $('.smallMenu').css({'height':'100%'});
        $('html, body').css({'overflow':'hidden'});
      }else if($(".smallMenu").css({'height':'100%'})){
        $('html, body').css({'overflow':'visible'});
        $('.smallMenu').css({'height':0});
      }
    });
  });
}
) ( jQuery );
