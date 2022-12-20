const week = {
    MONDAY: {
        open:["08", "00"],
        close:["20", "00"]
    },
    TUESDAY: {
        open:["08", "00"],
        close:["20", "00"]
    },
    WEDNESDAY: {
        open:["08", "00"],
        close:["20", "00"]
    },
    THURSDAY: {
        open:["08", "00"],
        close:["20", "00"]
    },
    FRIDAY: {
        open:["08", "00"],
        close:["20", "00"]
    },
    SATURDAY: {
        open:["10", "00"],
        close:["18", "00"]
    },
    SUNDAY: {
        open:["12", "00"],
        close:["16", "30"]
    }
};

function openingTimes(str) {

    let stringOfDay;
    let stringOfTime;
    let arrayTemp;

    arrayTemp = str.split(" ");
    stringOfDay = arrayTemp[0].toString();
    stringOfTime = arrayTemp[1].toString();

    return checkTime(checkDay(stringOfDay), stringOfTime);

}

function checkDay(stringOfDay) {

    let thisDay;

    for (let day in week) {
        if (stringOfDay.toUpperCase() === day) {
            thisDay = day;
            break;
        } else {
            thisDay = 0;
        }
    }
    return thisDay;
}

function checkTime(stringCheckedDay, stringOfTime) {

    if (stringCheckedDay === 0) {
        return "Invalid time!";
    }

    let tempArrayOfTime = stringOfTime.split(":");
    let currentDay = stringCheckedDay;
    let currentHours = tempArrayOfTime[0];
    let currentMinutes = tempArrayOfTime[1];
    let openTime = week[currentDay].open[0] + ":" + week[currentDay].open[1];
    let closeTime = week[currentDay].close[0] + ":" + week[currentDay].close[1];

    if (currentHours > 23 || currentMinutes > 59) {
        return "Invalid time!";
    }

    if (currentHours < week[currentDay].open[0]) {
        return "Library opens: today " + openTime;
    }

    if (currentHours >= week[currentDay].open[0] && currentHours < week[currentDay].close[0]) {
        return "Library closes at " +  closeTime;
    }

    if (currentHours >= week[currentDay].close[0]) {
        return theNextDay(currentDay);
    }

}

function theNextDay(previousDay) {

    let days = Object.keys(week);
    let indexOfNextDay = days.indexOf(previousDay) + 1;

    if (indexOfNextDay >= days.length) {
        indexOfNextDay = 0;
    }

    let nameOfNextDay = Object.keys(week)[indexOfNextDay];
    let nextDay = nameOfNextDay.toLowerCase();
    let nextDayOpenTime = week[nameOfNextDay].open[0] + ":" + week[nameOfNextDay].open[1];

    return "Library opens: " + nextDay.charAt(0).toUpperCase() + nextDay.slice(1) + " " + nextDayOpenTime;

}


console.log( openingTimes("Tuesday 20:00") ); // Library opens: Wednesday 08:00
console.log( openingTimes("Monday 09:30") ); // Library closes at 20:00
console.log( openingTimes("Saturday 00:00") ); // Library opens: today 10:00
console.log( openingTimes("Tuesday 20:00") ); // Library opens: Wednesday 08:00
console.log( openingTimes("MoNDay 07:59") ); // Library opens: today 08:00
console.log( openingTimes("Tuesday 13:61") ); // Invalid time!
console.log( openingTimes("wednsay 12:40") ); // Invalid time!