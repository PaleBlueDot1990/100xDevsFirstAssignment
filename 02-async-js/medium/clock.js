function printCurrentTime() {
    console.clear();
    let currentDate=new Date();

    var hoursIn24=currentDate.getHours()+"";
    if(hoursIn24.length==1) {
        hoursIn24="0"+hoursIn24;
    }

    var minutes=currentDate.getMinutes()+"";
    if(minutes.length==1) {
        minutes="0"+minutes;
    }

    var seconds=currentDate.getSeconds()+"";
    if(seconds.length==1) {
        seconds="0"+seconds;
    }

    var timeIn24=hoursIn24+":"+minutes+":"+seconds;
    console.log(timeIn24);

    if(hoursIn24>=13) {
        var timeIn12=(hoursIn24-12)+":"+minutes+":"+seconds+" PM";
        console.log(timeIn12);
    } else if(hoursIn24==12) {
        var timeIn12=hoursIn24+":"+minutes+":"+seconds+" PM";
        console.log(timeIn12);
    } else {
        var timeIn12=hoursIn24+":"+minutes+":"+seconds+" AM";
        console.log(timeIn12);
    }
}

setInterval(printCurrentTime, 1000);

