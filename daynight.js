var Bodyy = {
     SetColor:function(color){
         var body = document.querySelector('body');
         body.style.color=color;
        
     },
     SetBackgroundColor:function(color){
         var body = document.querySelector('body');
         body.style.backgroundColor=color;
        
     }
}

var link={
    AlinkColor:function(color){
        var a = document.querySelectorAll('a');
        for(i=0; i<a.length; i++){
        a[i].style.color=color;
        }
    }
}
function change(that){
    var a = document.querySelectorAll('a');
    if(that.value=='NightMode'){
        Bodyy.SetBackgroundColor('black');
        Bodyy.SetColor('white');
        that.value='DayMode';
        link.AlinkColor('red');
    }else if(that.value=='DayMode'){
        Bodyy.SetBackgroundColor('white');
        Bodyy.SetColor('black');
        that.value='NightMode';
        link.AlinkColor('green');
    }
}