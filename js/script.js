var isMenuOpen = false;

function main() {
  $(".icon-menu").click(function() {
    if (isMenuOpen) {
       $("body").toggleClass("move",false);
       $("body").toggleClass("moveback",true);
       $(".menu").slideToggle();
    }else{
       $("body").toggleClass("move",true);
       $("body").toggleClass("moveback",false);
       $(".menu").slideToggle();
        }
   isMenuOpen = !isMenuOpen;
    })
}
$(document).ready(main)
