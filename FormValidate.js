function FormValidate()
{
    var FormObj = document.getElementById("mailingForm");
    var Name = FormObj.Name.value;
    var phone = FormObj.Phone.value;
    var email = FormObj.Email.value;
    var everythingOK = true;

    if (!validateName(Name))
    {
        alert("Error: Invalid name.");
        everythingOK = false;
    }
    
     if (!validatePhone(phone))
    {
        alert("Error: Invalid phone number.");
        everythingOK = false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }
    
    if (everythingOK)
    {
        if (FormObj.reply.checked)
            alert("Warning: The e-mail feature is currently not supported.")
        alert("Thank you for signing up!");
        return true;
    }
    else
        return false;
}
function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}