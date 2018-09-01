(
function($) {
  var headerHeight = $('header').outerHeight();
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
    introPadding = headerHeight + 120 +'px' + ' 15px 60px 15px';
    $('.intro').css({'padding': introPadding});
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
  });
  //
  // Moving Code into above doc.ready function
  // //Height placement for smallMenu
  // console.log(headerHeight);
  // $('.smallMenu').css({'top': headerHeight});
  // introPadding = headerHeight + 120 +'px' + ' 15px 60px 15px';
  // $('.intro').css({'padding': introPadding});

  //Toggling hidden menu for smaller screens. Fade in from Right
  // $('.toggle').click(function(){
  //   if($('.smallMenu').width() === 0){
  //     $('.smallMenu').css({'width': '100%'});
  //   }else if($('.smallMenu').css({'width': '100%'})){
  //     $('.smallMenu').css({'width': 0});
  //   }
  // });
  //Toggliong hidden menu for small screens. Fade in from Top
  // $('.toggle').click(function(){
  //   if($('.smallMenu').height() === 0){
  //     $('.smallMenu').css({'height':'100%'});
  //     $('html, body').css({'overflow':'hidden'});
  //   }else if($(".smallMenu").css({'height':'100%'})){
  //     $('html, body').css({'overflow':'visible'});
  //     $('.smallMenu').css({'height':0});
  //   }
  // });
  // Moving Code into above doc.ready function
  //
}
) ( jQuery );
