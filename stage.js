
$(document).ready(function(){

var content = $('#shaun');
var keys={};

var xPosti= $('#shaun').position().left;
var tPosition=$('#shaun').position().top;
var counterTimesUp=0;
var perScound=30;
var initailPosition=450;
var obs;
var score;

window.obtcls=[];


var paths=['https://www.pngkey.com/png/full/8-85541_green-cartoon-drawing-grass-cartoon-png.png',
'https://img.123clipartpng.com/rock-clipart-rocks-clipart-png-2400_2171.png',
'https://clipartion.com/wp-content/uploads/2015/11/cartoon-carrot-clipart-free-clip-art-images.png'
,'http://www.pngmart.com/files/3/Cartoon-Coin-Transparent-Background.png']


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



for(var i =0 ; i<paths.length ; i++){
ob=makeObslecals(50,50,'obselcals');

	 $('body').append("<div class='"+ ob.css+"' id='imgnum"+i+"'><img src='"+ob.img +"'style='width:"+ob.width+"px; height:"+ob.height+"px;'></div>");
	 $('#imgnum'+i).css("left",ob.left);
	 $('#imgnum'+i).css("top",500);
	 
obtcls.push('imgnum'+i)
}

window.scrollTo(0,0);


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
var shuna=$('#shaun');
var obst=$("#"+obtcls[0]);

function movment() {

for(var i = 0 ; i< obtcls.length ; i++){
	if(shuna.position().left > $("#"+obtcls[i]).position().left-$("#"+obtcls[i]).width()/2 && 
		shuna.position().left  < $("#"+obtcls[i]).position().left+$("#"+obtcls[i]).width()/2  ){
		$("#"+obtcls[i]).hide();

		
}
		
		}
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