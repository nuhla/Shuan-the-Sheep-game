
$(document).ready(function(){

var content = $('#shaun');
var keys={};

var xPosti= $('#shaun').position().left;
var tPosition=$('#shaun').position().top;
var counterTimesUp=0;
var perScound=30;
var initailPosition=450;
var obs;
window.obtcls=[];

var paths=['http://www.clker.com/cliparts/H/W/2/X/1/1/brown-log-with-green-leaf.svg',
'https://img.123clipartpng.com/rock-clipart-rocks-clipart-png-2400_2171.png',
'https://purepng.com/public/uploads/large/purepng.com-cactusplantcactuscacticactaceae-1411526817042a1t8g.png']


function makeObslecals( height, width,css){

return { 
img :paths[randObImg()],
height:height,
width:width,
css:"obselcals",
left:RandomPositionX(),
top:300,

}
}


function randObImg(){
num = Math.floor(Math.random()*paths.length)
return num;
}

function RandomPositionX(){
	num = Math.floor(Math.random()*(window.innerWidth)+100);
	return num;
}


debugger
for(var i =0 ; i<paths.length ; i++){
ob=makeObslecals(50,50,'obselcals');

	 $('body').append("<div class='"+ ob.css+"' id='imgnum"+i+"'><img src='"+ob.img +"'style='width:"+ob.width+"px; height:"+ob.height+"px;'></div>");
	 $('#imgnum'+i).css("left",ob.left);
	 $('#imgnum'+i).css("top",450);
	 
obtcls.push('imgnum'+i)
}
//obtcls =$('.obselcals');
//obtcls[0].position()
//console.log(obtcls[0])
// to return window scrolling to 0
window.scrollTo(0,0);

//$('#contaner').animate({"left": "+=100px"}, 10000, "linear");

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
		$('#shaun').css("left",xPosti+20);
		xxPosti=xPosti+20;

	}
		
	}


setInterval( movment , 5000/perScound );


function movment() {

//console.log($('#shaun').position().top + " "+ "shaun");
//console.log(obtcls[0].position() + " "+ "obstecals");

		// for(var i = 0 ; i< obtcls[i].length ; i++){
		
		// }
  // 				 }
    if (keys[37]) {
			 xPosti-=20;
			$('#shaun').css("left",xPosti);   
    }
    else if ( keys[39]) {
    	if($('#shaun').position().left>window.innerWidth){
    		xPosti-=20;
    		//window.animate(window.scrollBy(window.scrollY+200,window.scrollY),100)
      	 //window.scrollBy(indow.scrollY+200,window.scrollY);

    	}
      xPosti+=20;

			$('#shaun').css("left",xPosti); 

		}
    else if ( keys[40]) {
        
    }
    else if (keys[38]) { 
    
    	 tPosition-=20;
    	 xPosti +=20;
    
    	if($('#shaun').position().top>500)
    		tPosition+=20;
			$('#shaun').css("top",tPosition);
		  $('#shaun').css("left",xPosti); 
    }

}
})