console.log("content running for slot booking ");

//console.log($('div[name="det"]')[0]);
//$('div[name="det]')[0].trigger('click');
//console.log(document.getElementsByClassName("col-sm-2"));
//chrome.runtime.onMessage.addListener(receiver);


//$('.col-sm-2')[9].click();
//$('button')[5].click();
//confirm_temp = window.confirm;
//window.confirm = function() {};
//$('#finalsub')[0].click();
//$('script[type="text/javascript"]').prepend("confirm_temp = window.confirm; window.confirm = function(x) {return true};");

//var datetime ='';



//$('header').prepend('<div id="delete"> <input type="text" id="date_time" value="dd-mm hh-mm AM" > <br> <button id="but" >Try it</button></div>');



var g_time ='';
var g_today = new Date();




 
let intervalId = window.setInterval(function(){ 
    var today = new Date(); 
    var time = today.getHours() + ":" + today.getMinutes() ;
   
    if(today.getHours() == 2 && today.getMinutes() == 33 && today.getSeconds() == 0)
     document.location.reload(true);
   //console.log(today.getMinutes()+today.getSeconds());
    if(today.getHours() == 2 && today.getMinutes() == 33 && today.getSeconds() >= 2){ 
        
        g_time = time;
        g_today = today;
        action();
        window.clearInterval(intervalId);
      
    }
}, 1000);


function action()
{ 
console.log('action called');
var section_num = 0;
var date_of_section = '';
var time_of_section = '';

    for (var i=0 ;i < $('div[class="card-body text-center"]').length; i++)
    {  
       if( $('div[class="card-body text-center"]')[i].innerText.split(' ')[0][0] == '0')
       {
        date_of_section = $('div[class="card-body text-center"]')[i].innerText.split(' ')[0][1];
       }
    else {
         date_of_section = $('div[class="card-body text-center"]')[i].innerText.split(' ')[0][0] + $('div[class="card-body text-center"]')[0].innerText.split(' ')[0][1];
        }
       

        if($('div[class="card-body text-center"]')[i].innerText.split(' ')[3][0] == '0')
         time_of_section = $('div[class="card-body text-center"]')[i].innerText.split(' ')[3][1]//+ $('div[class="card-body text-center"]')[i].innerText.split(' ')[3][2]+ $('div[class="card-body text-center"]')[i].innerText.split(' ')[3][3] +$('div[class="card-body text-center"]')[i].innerText.split(' ')[3][4];
       
        else
        { time_of_section = $('div[class="card-body text-center"]')[i].innerText.split(' ')[3][0] + $('div[class="card-body text-center"]')[i].innerText.split(' ')[3][1];}
       
        //console.log(date_of_section);
        console.log(time_of_section);
      
        if((g_today.getDate()+1).toString() == date_of_section && g_time.split(':')[0] == time_of_section)
       {  
           section_num = i;
           break;
       }
    }
//console.log(section_num);


var str = $('script[type="text/javascript"]').html();
var insert = str.split('confirm("Are you sure you want to book the selected court in the selected slot?")')[0] + 'true' + str.split('confirm("Are you sure you want to book the selected court in the selected slot?")')[1];
//console.log(insert);
$('script[type="text/javascript"]').html();
$('body').prepend("<script type='text/javascript'>"+insert+"</script>");






for (var i = 1; i<$('.col-sm-2').length; i++)
{
    if($('.col-sm-2')[i].innerText.includes('1/2') || $('.col-sm-2')[i].innerText.includes('2/2'))
    {   

        if((i >= section_num*5) && (i <= section_num*5+5) )
        {
        console.log($('.col-sm-2')[i]);

        
         $('.col-sm-2')[i].click();
        $('button')[5].click();
        }
    }
}


}







