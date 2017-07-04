var main = function() {
  if ($('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "185px"
    }, 200);
  }));

  if ($('.icon-menu').click(function() {
    $('.menu').animate({
      left: "-185px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  }));
};

$(document).ready(main);

function roll()
{
  var roll1,roll2
  roll1=parseInt(Math.random()*6+1)
  roll2=parseInt(Math.random()*6+1)
 document.getElementById("dice").innerHTML=roll1+" , "+roll2
}
