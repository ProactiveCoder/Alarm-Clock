var a= document.querySelectorAll("select"),
 b= document.querySelector(".first h1"),
c= document.querySelector("button"),
d = document.querySelector(".second");

let alarmTime; 
let isAlarmSet=false;
let ringtone= new Audio("./tone.mp3");

console.log(a)
for (let i = 12; i >=1; i--) {
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    a[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i = 59; i >=1; i--) {
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    a[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i = 2; i >=1; i--) {
   var ampm=i==1?"AM":"PM"
    let option=`<option value="${ampm}">${ampm}</option>`;
    a[2].firstElementChild.insertAdjacentHTML("afterend",option);
}
setInterval(function(){
    var time= new Date();
     h= time.getHours();
    m=time.getMinutes();
     s= time.getSeconds();
     me="AM";
    
    if(h>12){
        h=h-12;
        me="PM";
    }
    h=h==0?h=12:h;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    // console.log(`${h}:${m}:${s} ${me}`);
    b.innerText=`${h}:${m}:${s} ${me}`;
    // alarmTime=`${h}:${m} ${me}`;
    if(alarmTime==`${h}:${m} ${me}`){
        ringtone.play();
        ringtone.loop=true;
    }

},1000)
function setAlarm(){
    if(isAlarmSet){
        alarmTime="";
        ringtone.pause();
        d.classList.remove("disable");
        c.innerText="Set Alarm";
        return isAlarmSet=false;

    }
    alarm=`${a[0].value}:${a[1].value} ${a[2].value}`
    console.log(alarm)
    if(alarm.includes("Hours")||alarm.includes("Minutes")||alarm.includes("AM/PM")){
        return alert("Enter valid Input ")
    }
    isAlarmSet=true;
    alarmTime=alarm;
    d.classList.add("disable")
    c.innerText="Clear Alarm";
}
c.addEventListener("click",setAlarm);