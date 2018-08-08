//wikipedia api funtion
$(function(){

//on clicking search do this
$('#search').click(function(){
  //search whatever is inputed into the text box
  var articalSearch = $('#articalSearch').val();
      url:'https://en.wikipedia.org/w/index.php?search=' + articalSearch + '&title=Special:Search&profile=default&fulltext=1&searchToken'

  window.open ( 'https://en.wikipedia.org/w/index.php?search=' + articalSearch + '&title=Special:Search&profile=default&fulltext=1&searchToken');

});
  //onclick load random artical
  $('#random-artical').click(function(){
      window.open ('https://en.wikipedia.org/wiki/Special:Random');
});
  //type enter on keyboard to search
  $('#articalSearch').bind('keypress', function(e){
    if (e.keyCode == 13){
      $('#search').click();
    }
  })
});
