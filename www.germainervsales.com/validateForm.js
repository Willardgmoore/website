//Combined script - Eliminate Spiders
//Set the value of a hidden text field in a form to "Go."  Since spiders don't process javascript(yet), server side conditional should 
//prevent emails, db entries, etc.
//Include this on future forms for validation.
function ValidateForm(theForm)
{
	var ch;
	var i;
	theForm.didJavascript.value = "Go";
	if (theForm.id == "customerSurvey")
	{
		if (button != "submit")
			{
			return(true);
			}
		if (theForm.LastName.value == "" && theForm.Email.value == "")
			{
				alert("Either last name or email must be entered");
				theForm.LastName.focus();
				return (false);
			}
		if(IsCharInvalid(theForm.TestimonialText.value))
		{
			alert("Characters not allowed.")
			theForm.TestimonialText.focus();
			return (false);
		}
		if (theForm.Email.value != "")
		{
			if (!validEmail(theForm.Email.value))
			{
				alert("Invalid E-mail address, please verify");
				theForm.Email.focus();
				return (false);
			}	
		}
	}
	else if (theForm.id == "jobForm")
	{
		if (button != "submit")
			{
			return(true);
			}
			
		if (theForm.FirstName.value == "")
			{
				alert("First name must be entered");
				theForm.FirstName.focus();
				return (false);
			}	
			
		if (theForm.LastName.value == "")
			{
				alert("Last name must be entered");
				theForm.LastName.focus();
				return (false);
			}		
			
		if (theForm.Email.value == "")
			{
				alert("E-mail must be entered");
				theForm.Email.focus();
				return (false);
			}	
		if (!validEmail(theForm.Email.value))
		{
				alert("Invalid E-mail address, please verify");
				theForm.Email.focus();
				return (false);
		}
		if(IsCharInvalid(theForm.JobsRequest.value))
		{
			alert("Characters not allowed.")
			theForm.JobsRequest.focus();
			return (false);
		}
	}
else if (theForm.id == "partsForm")
	{
	if (theForm.FirstName.value == "")
  		{
    		alert("First Name must be entered");
			theForm.FirstName.focus();
    		return (false);
  		}	
	if (theForm.LastName.value == "")
  		{
    		alert("Last Name must be entered");
			theForm.LastName.focus();
    		return (false);
  		}	
	if (theForm.DayPhone.value == "" && theForm.EveningPhone.value == "")
  		{
    		alert("Phone Number must be entered");
			theForm.DayPhone.focus();
    		return (false);
  		}	
	if (theForm.VehicleManufacturer.value == "")
  		{
    		alert("Manufacturer must be entered");
			theForm.VehicleManufacturer.focus();
    		return (false);
  		}	
	if (theForm.VehicleModel.value == "")
  		{
    		alert("Model must be entered");
			theForm.VehicleModel.focus();
    		return (false);
  		}	
	if (theForm.VehicleYear.value == "")
  		{
    		alert("Year must be entered");
			theForm.VehicleYear.focus();
    		return (false);
  		}
	if (theForm.CustomerEmail.value == "") {
			alert("Email Address must be entered.");
			theForm.CustomerEmail.focus();
			return (false);
		} else if (!validEmail(theForm.CustomerEmail.value)) {
			alert("Invalid E-mail address, please verify");
			theForm.CustomerEmail.focus();
			return (false);
		}	
	}
else if (theForm.id == "guestbookForm")
	{
		if (button != "submit")
			{
			return(true);
			}
			
		if (theForm.FirstName.value == "")
			{
				alert("First name must be entered");
				theForm.FirstName.focus();
				return (false);
			}	
			
		if (theForm.LastName.value == "")
			{
				alert("Last name must be entered");
				theForm.LastName.focus();
				return (false);
			}
		
		if (theForm.FirstName.value == theForm.LastName.value)
			{
				alert("First name and last name must be different");
				theForm.FirstName.focus();
				return (false);
			}
		
		if (theForm.Country.value == "")
			{
				alert("Country must be entered");
				theForm.Country.focus();
				return (false);
			}
				
		if (theForm.Email.value == "")
			{
				alert("E-mail must be entered");
				theForm.Email.focus();
				return (false);
			}	

		if (!validEmail(theForm.Email.value))
			{
					alert("Invalid E-mail address, please verify");
					theForm.Email.focus();
					return (false);
			}
		if(IsCharInvalid(theForm.Comments.value))
		{
			alert("Characters not allowed.")
			theForm.Comments.focus();
			return (false);
		}
	}
}

function validEmail(email) 
{
	invalidChars = " /:,;"
	
	if (email == "") {						// cannot be empty
		return false
	}
	for (i=0; i<invalidChars.length; i++) {	// does it contain any invalid characters?
		badChar = invalidChars.charAt(i)
		if (email.indexOf(badChar,0) > -1) {
			return false
		}
	}
	atPos = email.indexOf("@",1)			// there must be one "@" symbol
	if (atPos == -1) {
		return false
	}
	if (email.indexOf("@",atPos+1) != -1) {	// and only one "@" symbol
		return false
	}
	periodPos = email.indexOf(".",atPos)
	if (periodPos == -1) {					// and at least one "." after the "@"
		return false
	}
	if (periodPos+3 > email.length)	{		// must be at least 2 characters after the "."
		return false
	}
	return true
}

function isInteger (s)
{   var i;

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}

// Returns true if character c is a digit 
// (0 .. 9).

function isDigit (c)
{   
	return ((c >= "0") && (c <= "9"))
}

// Check whether string s is empty.

function SetSubmit()
{
	button = "submit";
}

function IsCharInvalid(theString)
{
	var valChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-+=_’~[]{};:'<>?,./` ";
	valChars = valChars + '"';
	valChars = valChars + "\n";
	valChars = valChars + "\r";
	for (i=0; i < theString.length; i++) 
	{
		if (valChars.indexOf(theString.charAt(i),0) < 0)
		{
				alert("Character not allowed: " + theString.charAt(i));
				return true;
		}
	}
}