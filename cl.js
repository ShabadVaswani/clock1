var x = document.getElementById("second");
var y = document.getElementById("minute");
var z = document.getElementById("hour");

console.log();
setInterval(function() {
    var d = new Date;
    var hr = d.getHours()*30;
    var mn = d.getMinutes()*6;
    var sc = d.getSeconds()*6;
    x.style.transform = `rotate(${sc}deg)`;
    y.style.transform = `rotate(${mn}deg)`;
    z.style.transform = `rotate(${hr}deg)`;
}, 1000);



