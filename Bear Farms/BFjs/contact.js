"use strict";
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
// const isDate = (date, datePattern, type) => {
//     if (!datePattern.test(date)) { return false; }

//     if (type == "full") {
//         const dateParts = date.split("/");
//         const month = parseInt( dateParts[0] );
//         const day = parseInt( dateParts[1] );

//         if ( month < 1 || month > 12 ) { return false; }
//         if ( day > 31 ) { return false; }
//         return true;
//     }
//     if (type == "cc") {
//         const index = date.indexOf( "/" );
//         const month = parseInt( date.substring( 0, index ) );

//         if ( month < 1 || month > 12 ) { return false; }
//         return true;
//     } 
// };

$( document ).ready( () => {

    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        
        // check user entries for validity
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( isValid ) { 
            // code that saves profile info goes here
        }
        alert("Thank you for getting in touch with us! We will send you an email with all of our information!");
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});