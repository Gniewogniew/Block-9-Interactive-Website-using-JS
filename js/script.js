var isMenuOpen = false;

function main() {
  $(".icon-menu").click(function(){ 
    if(isMenuOpen){
      $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "185px"
    }, 200);
  
    }else{
        $('.menu').animate({
      left: "-185px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
        }
      isMenuOpen =!isMenuOpen;  
      }
  
  )
  }
$(document).ready(main);
