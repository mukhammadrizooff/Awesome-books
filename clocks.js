
function display_clock() {
    let time = new Date()

    let dayPeriod = "";

    let month = time.getMonth();

    let date = dateWithSuffix(time.getDate());

    let hours = time.getHours() % 12;

    if (time.getHours() > 12) {
        dayPeriod = "PM";
    }
    else {
        dayPeriod = "AM";
    }

    function dateWithSuffix(date) {
        let num1 = date % 10,
            num2 = date % 100;
        if (num1 == date && num2 != 11) {
            return date + "st";
        }
        else if (num1 == 2 && num2 != 12) {
            return date + "nd";
        }
        else if (num1 == 3 && num2 != 13) {
            return date + "rd";
        }
        else {return date + "th";}
    }

    let monthOfYear = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    month = monthOfYear[month];

    let clock = month + " " + date + " " + time.getFullYear() + "," + " " + hours + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + dayPeriod;
    document.querySelector('.clock').innerHTML = clock;
}
display_clock();

setInterval(display_clock, 1000);

