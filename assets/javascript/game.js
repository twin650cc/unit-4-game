$(document).ready(function() {


    //move characters from starting position to enemy position after selecting character
$(".agumon").on("click", function(){
$(".gabumon").appendTo("#gabumonDestination").css('display','inline-block');    
$(".gomamon").appendTo("#gomamonDestination").css('display','inline-block');
$(".patamon").appendTo("#patamonDestination").css('display','inline-block');
})

$(".gabumon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gomamon").appendTo("#gomamonDestination").css('display', 'inline');
$(".patamon").appendTo("#patamonDestination").css('display', 'inline');
})

$(".gomamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination");
$(".gabumon").appendTo("#gabumonDestination");
$(".patamon").appendTo("#patamonDestination");
})

$(".patamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination");
$(".gabumon").appendTo("#gabumonDestination");    
$(".gomamon").appendTo("#gomamonDestination");
})

//move character from enemies available to attack to the defender section

$("#agumonDestination").on("click", function(){
    

})





})
