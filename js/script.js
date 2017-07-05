$(document).ready(function(){
$(".icon-menu").click(function(){
$(".menu").animate({
left: 'toggle'
});
});
});

$(document).ready(main);

$(document).ready(main);

function roll()
{
  var roll1,roll2
  roll1=parseInt(Math.random()*6+1)
  roll2=parseInt(Math.random()*6+1)
 document.getElementById("dice").innerHTML=roll1+" , "+roll2
}
