var isMenuOpen = false;

function main() {
  $(".icon-menu").click(function() {
    if (isMenuOpen) {
      $('body').animate({
        left: "0px"
        }, 500);
      $(".menu").slideToggle();
    }else{
      $('body').animate({
        left: "185px"
        }, 500);
      $(".menu").slideToggle();
        }
     isMenuOpen = !isMenuOpen;
    })
}
$(document).ready(main)
