var isMenuOpen = false;

function main() {
  $(".icon-menu").click(function() {
    if (isMenuOpen) {
       $("body").toggleClass("move",false)
       $(".menu").slideToggle();
    }else{
       $("body").toggleClass("move",true);
       $(".menu").slideToggle();
        }
   isMenuOpen = !isMenuOpen;
    })
}
$(document).ready(main)
