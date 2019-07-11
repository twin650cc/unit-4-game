$(document).ready(function() {


var agumon = 
{   
    Name: "agumon",
    image: "agumon",
    lifepoints: 150,
    damage: 15,
    damageMultiplier:2,

}

var gabumon = 
{   
    Name: "gabumon",
    lifepoints: 150,
    damage:24,
    damageMultiplier:4,
}

var gomamon = 
{   
    Name: "gomamon",
    lifepoints: 150,
    damage: 15,
    damageMultiplier:3,
}

var patamon = 
{   
    Name: "patamon",
    lifepoints: 150,
    damage:20,
    damageMultiplier:5,
}


function chooseCharacter()
{
    
}





    //move characters from starting position to enemy position after selecting character
    $(".agumon").on("click", function(){
    $(".agumon").html("")
    })





$(".gomamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gabumon").appendTo("#gabumonDestination").css('display', 'inline');
$(".patamon").appendTo("#patamonDestination").css('display', 'inline');
return
})

$(".patamon").on("click", function(){
$(".agumon").appendTo("#agumonDestination").css('display', 'inline');
$(".gabumon").appendTo("#gabumonDestination").css('display', 'inline');    
$(".gomamon").appendTo("#gomamonDestination").css('display', 'inline');
return
})

//move character from enemies available to attack to the defender section

$("#agumonDestination").on("click", function(){
    $(".agumon").appendTo("#agumonDestinationDefender")
    return
})
$("#gabumonDestination").on("click", function(){
    $(".gabumon").appendTo("#gabumonDestinationDefender")
    return
})
$("#gomamonDestination").on("click", function(){
    $(".gomamon").appendTo("#gomamonDestinationDefender")
    return
})
$("#patamonDestination").on("click", function(){
    $(".patamon").appendTo("#patamonDestinationDefender")
    return
})



//lifepoints

var agumonlp = 120
var gabumonlp = 150
var gomamonlp = 110
var patamonlp = 200



function agumonlifepointsfunc()
{
$("#agumonlifepoints").html(agumonlp)
}
agumonlifepointsfunc()


function gabumonlifepointsfunc()
{
$(".gabumonlifepoints").html(gabumonlp)
}
gabumonlifepointsfunc()


function gomamonlifepointsfunc()
{
$(".gomamonlifepoints").html(gomamonlp)
}
gomamonlifepointsfunc()


function patamonlifepointsfunc()
{
$(".patamonlifepoints").html(patamonlp)
}
patamonlifepointsfunc()



function  attack(){
    
    

}




    document.getElementById('attackbutton').onclick = function(){
   
        document.getElementById('agumonlifepoints').innerHTML= agumonlp--;
    }



})
