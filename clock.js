const hourEl=document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondEl = document.getElementById("second")
const miniS = document.getElementById("miniSecond")
const ampmEl = document.getElementById("ampm")

function upDateClock(){
   var h = new Date().getHours()
   var m = new Date().getMinutes()
   var s = new Date().getSeconds()
   var ms = new Date().getMilliseconds()
   var ampm = "AM"

   if(h>=12){
      ampm = "PM"
   }
   if(h>12){
      h = h-12
   }

   m = (m<10)? "0"+ m : m;
   h = (h<10) ? "0" + h : h;
   s = (s<10) ? "0"+ s : s;
   

   hourEl.innerText = h;
   minutesEl.innerText = m;
   secondEl.innerText = s;
   miniS.innerText = ms;
   ampmEl.innerText = ampm;

   s%2==0? ampmEl.style.backgroundColor = "#fbda61 ": ampmEl.style.backgroundColor = "#ff5acd";

   setTimeout(()=>{
      upDateClock()
   },10)

}

upDateClock()