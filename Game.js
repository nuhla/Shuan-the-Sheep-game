


var content = $('#shaun');
var keys={};

var xPosti= $('#shaun').position().left;
var tPosition=$('#shaun').position().top;
var counterTimesUp=0;
var perScound=30;
var initailPosition=450;

var strgs=[];
var paths=['https://img.123clipartpng.com/rock-clipart-rocks-clipart-png-2400_2171.png','https://img.123clipartpng.com/rock-clipart-rocks-clipart-png-2400_2171.png']






window.scrollTo(0,0);// to return window scrolling to 0
$('#contaner').animate({"left": "+=100px"}, 10000, "linear");

$(document).keydown (function(e){
	
keys[e.keyCode]=true;
}) 


$(document).keyup(function(e){

	delete keys[e.keyCode];
	getDown(e);

})

function getDown(e){
		if(e.keyCode ===38)
	{
		tPosition=initailPosition;

		$('#shaun').css("top",initailPosition);
		$('#shaun').css("left",xPosti+30);
		xxPosti=xPosti+30;

	}
		
	}


var stop=setInterval( movment , 5500/perScound );


function movment() {

	if($('#shaun'))
   
    if (keys[37]) {
			 xPosti-=17;
			$('#shaun').css("left",xPosti);   
    }
    else if ( keys[39]) {
    	if($('#shaun').position().left>window.innerWidth)
    		xPosti-=17;
       xPosti+=17;
      

			$('#shaun').css("left",xPosti); 

		}
    else if ( keys[40]) {
        
    }
    else if (keys[38]) { 
    
    	 tPosition-=17;
    	 xPosti +=17;
    
    	if($('#shaun').position().top>500)
    		tPosition+=17;
			$('#shaun').css("top",tPosition);
		  $('#shaun').css("left",xPosti); 
    }

}