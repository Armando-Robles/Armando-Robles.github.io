"use strict"
/*********************************************************************
***
*Original Author: Armando Robles                                   *
*Date Created: 1/19/2022                                      *
*Version:1.00                                                *
*Date Last Modified:1/28/2022                              *
*Modified by:  Armando Robles                                        *
*Modification log:                                  *
*1/21/2022: Basic alert system informing the client that the website is incomplete.*
*1/28/2022: Added JS for slide show (which isnt working yet), FAQs, Contact us and Newletter*
******************************************************************** */

$(document).ready(() => {

    $("#join_news").click(() => {
        $("span").text("");   // clear any previous error messages

        // get values entered by user
        const email = $("#news_email").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;


        // check user entries for validity
        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            $("#news_email").next().text("Please enter a valid email.");
        }


        if (isValid) {
            // code that saves profile info goes here
        }

        $("#news_email").focus();
    });

    // set focus on initial load
    $("#news_email").focus();
});