
$(document).ready(function(){
var keys={};
var contantWidt= window.innerWidth;

$('.contant').width(contantWidt);


var xPosti= 0;
var tPosition=$('#shaun').position().top;
var IniSliderCount =$('#slider').width();
console.log(IniSliderCount);

var counterTimesUp=0;
var perScound=30;
var initailPosition=450;
var obs=[];
window.obtcls=[];
window.level={};
var shuna=$('#shaun');
var rightToleft=false;
var play=false;

window.gameInformation={
	abouMe:'<strong>Nuhla al Masri </strong> 33 years old from Palestine Ramallah . she finished her studies at AAUJ Jenen in 2008 .'+
	'Nuhla designed this game as a samll project for the prepration phase of here training in <strong>RBK</strong> -cohort7-jordan.',

	abutBtn:'this game is created in 2019 using a simple jquery and javascript functionality'+
	'. if the sheep touch the obstacles in the road his health will decrease tell it dei '
	+'<br>" if <strong>shuna</strong> collect all the dimoneds he will gain a nother try."',

	Instructions:"this game is based on the keyboard arrow  <strong> Up - Right - Left</strong> as show bellow .<br> "+
	"the Right Arrow to move Right . <br>" +
	"the left Arrow to move Right ,and " +"the Up Arrow to jumb"
}
/// game pages contents


////////////////////////////////////////////////////////////////////////array of paths ////////////////////////////////////
var paths=['recources/Gaming-Agency.png',
'recources/wall-o-fire-1.gif',
'recources/ee8f3d409243a8fdf1104e2ee99f0581_fire-and-brooklyn-on-pinterest-flame-clipart-with-transparent-_480-272.gif']

/// obstecals factory function
function makeObslecals( height, width,css,top,dangerDegree){

return { 
	img :paths[randObImg()],
	height:height,
	width:width,
	css:"obselcals",
	left:RandomPositionX(),
	top:top,
	dangerDegree:dangerDegree

	}
}


// add an event listener to the the document for the close button click
$('body').on('click', '#closeDiv', function(e){
	//create an animation to disapear the info box of the game , and after the animation is finishes the info box is removed from DOM 
		$('.infoBox').animate({ height: '0%',	width:'0%' , opacity: '0'},300,function(){
			$('div').remove('.infoBox');

		});
//Re bind the document keydown and aboutgame button events
	$('#abutBtn').on('click',aboutGame);
	$('#abouMe').on('click',aboutGame);
	$('#Instructions').on('click',aboutGame);
	$(document).on('keydown', function(e){
		keys[e.keyCode]=true;
	});

})


////////////////////////////////////////////////////////////////////////////random function for position and imges///////////
function randObImg(){
num = Math.floor(Math.random()*paths.length)
return num;
}

function RandomPositionX(){
	num = Math.floor(Math.random()*(contantWidt));

	if(num> 100)
	return num;
	return RandomPositionX();
}


////////////////////////////////////////////////////////// start creating obscales element inside the body/////////////////////
for(var i =0 ; i<paths.length ; i++){
	ob=makeObslecals(50,50,'obselcals',300,10);
	obs.push(ob);

	 $('body').append("<div class='"+ ob.css+"' id='imgnum"+i+"'><img  src='"+ob.img 
	 +"'style='width:"+ob.width+"px; height:"+ob.height+"px;'></div>");
	 $('#imgnum'+i).css("left",ob.left);
	 $('#imgnum'+i).css("top",460);
	
	obtcls.push('imgnum'+i)
}

// this event to prevent the window from scrolling
window.addEventListener("scroll",function(){
	// return it always to point 0 0 
	window.scrollTo(0,0)
})


/////////////////////////////////////////////////////////// Down & up Keys evets ///////////////////////////////////////////////////


$(document).keydown (function(e){	
keys[e.keyCode]=true;
}) 


$(document).keyup(function(e){
	delete keys[e.keyCode];
	getDown(e);

})
////////////////////////////////////////////mysound Event /////////////////////////////////////////////////////////

/// the event listner added to the button
$('#autoPlay').on('click',toggelSound);

// the event function for the listner 
function toggelSound(e){
	// toggel the sound play
	play=!play;
	
	// if the sound is not playing ... play it and change the Text of button
	if(play){

		$('#pgSound')[0].play();
		$('#toggleS').text('Pause');
	}
	// if the sound is  playing ... pause it and change the Text of button
	else{

		$('#pgSound')[0].pause();
		$('#toggleS').text('Play Music');
	}

}


////////////////////////////////////////////////////////////About Button Click Event's  ///////////////////////////////////////////////

$('#abutBtn').on('click',aboutGame);
$('#abouMe').on('click',aboutGame);
$('#Instructions').on('click',aboutGame);

//////////////////////the event function of the click listner for about///////////////////////////////////////////////////////////////
function aboutGame(){
	var temp="";
	var img="";
	var Title="";
	/// if we clicked on about the game formate about game text 
	if(this.id === 'abutBtn'){
		temp =window.gameInformation['abutBtn'];
		img='\rrecources\\AF005415_00.gif';
		Title=" Game General Information ";

	}////// if we clicked on about the game formate about auther text 
	else if(this.id === 'abouMe'){
		temp =window.gameInformation['abouMe'];
		img='\rrecources\\viber_image_2019-09-26_23-29-08.jpg';
		Title=" About The Auther";
	}// formatting Text For Instructions
	else if(this.id === 'Instructions')
	{
		temp =window.gameInformation['Instructions'];
		img='\rrecources\\keyboard-arrows-512.png';
		Title=" Instructions";
	}
	str="<div class='infoBox' ><img  id='closeDiv' src='\rrecources\\close-icon-png-18.jpg'><h3>"+Title+"</h3><p>"+
	temp+"</p> <div><img style='width=50% height=50%' src='"+img+"'></div></div>"
	$('body').append(str);
	$('.infoBox').animate({ height: '70%',	width:'40%' , opacity: '0.9'},300)
	$(document).unbind('keydown');
	$('#abutBtn').unbind('click');
	$('#abouMe').unbind('click');
	$('#Instructions').unbind('click');


}
/////////////////////////////////////////////////////// KeyUp Event function /////////////////////////////////////////////////////////

function getDown(e){
	//debugger
	if(e.keyCode ===38){

		tPosition=initailPosition;
		$('#shaun').css("top",initailPosition);
		$('#shaun').css("left",xPosti+20);
		xPosti=xPosti+20;

	}
		
}

/////////////////////////////start an Interval at the page to controle the key down and up event ///////////////////////////////////////
setInterval( movment , 3000/perScound );


function movment() {
//search for the obst that touch's shuna between a range of the obsecal size
	for(var i = 0 ; i< obtcls.length ; i++){
		if(shuna.position().left > $("#"+obtcls[i]).position().left-$("#"+obtcls[i]).width() && 
			shuna.position().left  < $("#"+obtcls[i]).position().left+$("#"+obtcls[i]).width() &&
			shuna.position().top  < $("#"+obtcls[i]).position().top+$("#"+obtcls[i]).height()/2  &&
			shuna.position().top > $("#"+obtcls[i]).position().top-$("#"+obtcls[i]).height()/2){
				
					$('div').remove("#"+obtcls[i])
					obtcls.splice(i,1);
					// if we still have soual
					if($('#slider').width()>0  ){
							// creats a motion anmation for the slider and calculate how much health remaind 
							$('#slider').animate({width:($('#slider').width()-(IniSliderCount*obs[i]['dangerDegree'])/100)+"px" },700);
							obs.splice(i,1);

						}
					}
		}
  
  if (keys[37]) {
		xPosti-=20;
		$('#shaun').css("left",xPosti);  
		if(!rightToleft){
			  // flip the image of the sheep when it turn left
    		$('#myImg').css({ '-webkit-transform': 'scaleX(-1)','transform': 'scaleX(-1)'}); 
    		rightToleft=!rightToleft;
    }
  }
  else if ( keys[39]) {
  	if(rightToleft){
  		// flip the image of the sheep when it turn right
    	$('#myImg').css({ '-webkit-transform': 'scaleX(1)','transform': 'scaleX(1)'}); 
    	rightToleft=!rightToleft;
    }
    if($('#shaun').position().left>window.innerWidth ){
    xPosti-=xPosti;
  }
    xPosti+=20;
		$('#shaun').css("left",xPosti); 
	}
  else if ( keys[40]){     
  }
  else if (keys[38]){ 

 	  tPosition-=20;
  	xPosti +=20;
 		 if($('#shaun').position().top>500)
    	tPosition+=20;
		$('#shaun').css("top",tPosition);
		$('#shaun').css("left",xPosti); 
  }

}
})