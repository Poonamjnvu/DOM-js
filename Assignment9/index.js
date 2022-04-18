function time()

{

    var hours = document.getElementById("hour")
    var minutes = document.getElementById("minute")
    var seconds = document.getElementById("second")
    var ampm = document.getElementById("ampm")


    var time = new Date()

    var hrs = time.getHours()
    var mins = time.getMinutes()
    var secs = time.getSeconds()
    var am_pm = "AM"

    if (hrs == 0) {

        hrs = 12 //11:59AM -->00:00 _-->12:00
    }
    if (hrs > 12) {

        hrs = hrs - 12;
        am_pm = "PM"


    } //24 hrs format into 12hrs format

    if (hrs < 10) {

        hrs = "0" + hrs
    }
    if (mins < 10) {

        mins = "0" + mins
    }

    if (secs < 10) {

        secs = "0" + secs
    }

    hours.innerText = hrs
    minutes.innerText = mins
    seconds.innerText = secs
    ampm.innerText = am_pm

}

var oneseconds = 1000

setInterval(time, oneseconds)