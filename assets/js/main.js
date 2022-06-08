 /* Menu icon hide and show */
 function myFunction(x) {
    x.classList.toggle("change");
}

$('.menu-icon').click(function(){
    $('.main-menu').toggleClass('open-menu')
 })
 
/* Search button */
 $('.search-btn').click(function(){
    $('.search-form-area').toggleClass('search-form-open')
 })

/* Scrool btn up  */
var mybutton = document.getElementById("scrolBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}