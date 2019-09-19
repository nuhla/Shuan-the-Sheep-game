window.onload = function(){
    var min = 0;
    var sec = 60;
     setInterval(function(){
    var a = new Date();
        document.getElementById("timer").innerHTML = min +" : " + sec ;
        sec--;
        if(sec == 00)
        {
            min--;
            sec = 60;
            if (min == 0)
            {
                min = 0;
            }
        }
        },500);
}



