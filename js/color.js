var col = 0;
var elements = document.getElementsByClassName( "fa" ) ;

window.onscroll = function(){
  var scrollTop =
          document.documentElement.scrollTop || // IE、Firefox、Opera
          document.body.scrollTop;              // Chrome、Safari
  col = -1 * scrollTop/5 + 0;
  console.log(col);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "hsl(" + col + ", 40%, 65%)";
  }
}
