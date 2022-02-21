function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    // Adding Am & Pm Section //

    var ampm = ( hours < 12) ? "Am" : "PM";

    // Converting the hours component to 12 hour format //

    hours = ( hours > 12) ? hours - 12 : hours;
   
    // Pad the hours , minutes and seconds with leading zeros //

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0"+ seconds).slice(-2);

    // Display the clock //

    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " : " +ampm;
    var t = setTimeout(realtimeClock, 500);
}