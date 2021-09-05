console.log('background running for slot booking');
var msg = {check: false};
/*
window.setInterval(function(){ 
    var today = new Date(); 
    var time = today.getHours() + ":" + today.getMinutes() ;
    
   //console.log(today.getMinutes()+today.getSeconds());
    if(today.getHours() == 1 && today.getMinutes() == 53 && today.getSeconds() == 0){ 
        //chrome.runtime.reload();
        msg = {receiver: 'content',
        time: time,
        today:today,
        check: true
    };
    }
}, 1000);

*/
//chrome.runtime.sendMessage(msg, function(response) {console.log('sent from back');});




