
$(document).ready(function(){
var keys={};
var contantWidt= window.innerWidth;

$('.contant').width(contantWidt);


var xPosti= 0;
var tPosition=$('#shaun').position().top;

var counterTimesUp=0;
var perScound=30;
var initailPosition=450;
var obs;
window.obtcls=[];

var paths=['recources/Gaming-Agency.png',
'recources/wall-o-fire-1.gif',
'recources/ee8f3d409243a8fdf1104e2ee99f0581_fire-and-brooklyn-on-pinterest-flame-clipart-with-transparent-_480-272.gif']


function makeObslecals( height, width,css,top){

return { 
	img :paths[randObImg()],
	height:height,
	width:width,
	css:"obselcals",
	left:RandomPositionX(),
	top:top,

	}
}


function randObImg(){
num = Math.floor(Math.random()*paths.length)
return num;
}

function RandomPositionX(){
debugger
	num = Math.floor(Math.random()*(contantWidt));

	if(num> 100)
	return num;
	return RandomPositionX();
}



for(var i =0 ; i<paths.length ; i++){
	ob=makeObslecals(50,50,'obselcals',300);

	 $('body').append("<div class='"+ ob.css+"' id='imgnum"+i+"'><img  src='"+ob.img +"'style='width:"+ob.width+"px; height:"+ob.height+"px;'></div>");
	 $('#imgnum'+i).css("left",ob.left);
	 $('#imgnum'+i).css("top",460);
	
	obtcls.push('imgnum'+i)
}

// this event to prevent the window from scrolling
window.addEventListener("scroll",function(){
	// return it always to point 0 0 
	window.scrollTo(0,0)
})


$(document).keydown (function(e){	
keys[e.keyCode]=true;
}) 


$(document).keyup(function(e){

	delete keys[e.keyCode];
	getDown(e);

})

function getDown(e){
	//debugger
		if(e.keyCode ===38)
	{
		tPosition=initailPosition;

		$('#shaun').css("top",initailPosition);
		$('#shaun').css("left",xPosti+20);
		xPosti=xPosti+20;

	}
		
	}


setInterval( movment , 3000/perScound );
var shuna=$('#shaun');

function movment() {

//search for the obst that touch's shuna between a range of the obsecal size
	for(var i = 0 ; i< obtcls.length ; i++){
		if(shuna.position().left > $("#"+obtcls[i]).position().left-$("#"+obtcls[i]).width() && 
			shuna.position().left  < $("#"+obtcls[i]).position().left+$("#"+obtcls[i]).width() &&
			shuna.position().top  < $("#"+obtcls[i]).position().top+$("#"+obtcls[i]).height()/2  &&
			shuna.position().top > $("#"+obtcls[i]).position().top-$("#"+obtcls[i]).height()/2){
					/// if we found it then hide();
					$("#"+obtcls[i]).hide();
		}
	}
  
  if (keys[37]) {
		xPosti-=20;
		$('#shaun').css("left",xPosti);   
  }
  else if ( keys[39]) {
    if($('#shaun').position().left>window.innerWidth ){
    xPosti-=xPosti;
  }
    xPosti+=20;
		$('#shaun').css("left",xPosti); 
		//$('#shaun').motion()
	}
  else if ( keys[40])
  {     
  }
  else if (keys[38]) 
  { 
 	  tPosition-=20;
  	xPosti +=20;
  if($('#shaun').position().top>500)
    tPosition+=20;
		$('#shaun').css("top",tPosition);
		$('#shaun').css("left",xPosti); 
  }

}
})