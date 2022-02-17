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
$(document).ready( () => {

    // handle click on Join List button
    $("#join_list").click( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (email1 == "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("Must equal first email entry.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry  
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        // validate the check boxes	
        let checkedOptions = [];
        checkedOptions = $(":checkbox:checked");
        if (checkedOptions.length == 0) {
            $("#venue").next().text("Select at least one.");
            isValid = false;
        } else {
            $("#venue").next().text("");
        }
						
		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}
        if (isValid == true) {
			alert("Thank you very much! We will get back to you ASAP!");
            
		}
    });

    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        
        $("#email_1").focus();
    });

    // move focus to first text box
    $("#first_name").focus();
});