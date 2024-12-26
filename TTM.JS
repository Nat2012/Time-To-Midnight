document.body.style.width = window.innerWidth;
document.body.style.height = window.innerHeight;



setInterval(function MTM() {
    var d = new Date;
    const year =  d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    let yearmin = year * 525600;
    let monthmin = month * 43800;
    let daymin = day * 1440;
    let hourmin = hour *  60;
    let minutes = yearmin + monthmin + daymin + hourmin + minute;
    let midnightmin = yearmin + monthmin + daymin + (24 * 60) + 0;
    let MTM = midnightmin - minutes;
    document.getElementById("time").innerHTML = MTM + " Minutes till Midnight";
}, 1) 

setInterval(function HTM(){
    var d = new Date;
    const hour = d.getHours();
    let HTM = 24 - hour;
    document.getElementById("time2").innerHTML = HTM + " Hours till Midnight";    
}, 1);