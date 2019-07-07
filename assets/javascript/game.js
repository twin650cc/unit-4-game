$(document).ready(function() {


    //move characters from starting position to enemy position after selecting character
$(".agumon").on("click", function(){
$(".gabumon").appendTo("#gabumonDestination").css('display','inline');    
$(".gomamon").appendTo("#gomamonDestination").css('display','inline');
$(".patamon").appendTo("#patamonDestination").css('display','inline');
})

$(".gabumon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gomamon").appendTo("#gomamonDestination").css('display', 'inline');
$(".patamon").appendTo("#patamonDestination").css('display', 'inline');
})

$(".gomamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gabumon").appendTo("#gabumonDestination").css('display', 'inline');
$(".patamon").appendTo("#patamonDestination").css('display', 'inline');
})

$(".patamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gabumon").appendTo("#gabumonDestination").css('display', 'inline');    
$(".gomamon").appendTo("#gomamonDestination").css('display', 'inline');
})

//move character from enemies available to attack to the defender section

$("#agumonDestination").on("click", function(){
    $(".agumon").appendTo("#agumonDestinationDefender")
})
$("#gabumonDestination").on("click", function(){
    $(".gabumon").appendTo("#gabumonDestinationDefender")
})
$("#gomamonDestination").on("click", function(){
    $(".gomamon").appendTo("#gomamonDestinationDefender")
})
$("#patamonDestination").on("click", function(){
    $(".patamon").appendTo("#patamonDestinationDefender")
})



//lifepoints

var agumonlp = 120
var gabumonlp = 150
var gomamonlp = 110
var patamonlp = 200

function lifepoints()
{
$("patamonlifepoints").html("<h1>patamonlp</h1>")
}



lifepoints()



})
