"use strict";

const getDate = futureValue => {
    const today = new Date();

    // gets the date
    let month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let day = today.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    const year = today.getFullYear();

    // and this one gets the time
    const hour = today.getHours();
    let minutes = today.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const date = `Today is ${month}/${day}/${year} at ${hour}:${minutes}.`;
    return date;
};

$(document).ready(() => {
    $("#date").text(getDate());
});