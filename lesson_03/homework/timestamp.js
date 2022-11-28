function checkHour(hour) {
    if ((hour < 0 || hour > 23) || !Number.isInteger(hour)) {
        return false;
    }
    return true;
}

function checkMinute(minute) {
    if ((minute < 0 || minute > 59) || !Number.isInteger(minute)) {
        return false;
    }
    return true;
}

function checkDate(Date) {
    if ((Date < 0 || Date > 31) || !Number.isInteger(Date)) {
        return false;
    }
    return true;
}

function checkMonth(month) {
    if ((month < 0 || month > 23) || !Number.isInteger(month)) {
        return false;
    }
    return true;
}

function checkYear(year) {
    if (year< 0 || !Number.isInteger(year)) {
        return false;
    }
    return true;
}

function timestamp(array) {
    var hour = array[0];
    var minute = array[1];
    var date = array[2];
    var month = array[3];
    var year = array[4];
    if (checkHour(hour) && checkMinute(minute) && checkDate(date) && checkMonth(month) && checkYear(year)) {
        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${date.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year} ${hour < 12 ? "AM" : "PM"}`;
    }
    return undefined;
}

console.log(timestamp([5,10,8,10,2022]));