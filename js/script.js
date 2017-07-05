var isMenuOpen = false;

function main() {
  $(".icon-menu").click(function(){ 
    if(isMenuOpen){
      $(".menu").animate({
      left: "-185px"
    }, 500);
    }else{
        $(".menu").animate({
      left: "0px"
    }, 500);
        }
 isMenuOpen =!isMenuOpen;}
    )}
$(document).ready(main)
