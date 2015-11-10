$(function ()
{

    var whitespaceExpression = /^\s+|\s+$/g;


    var translate = function (selector, stringCollection)
    {
        $(selector).each(function ()
        {
            if (this.nodeName.toLowerCase() == "input")
            {
                var s = stringCollection[this.value];

                if (s)
                {
                    this.value = s;
                }
            }
            else
            {
                var s = stringCollection[this.innerText.replace(whitespaceExpression, "")];

                if (s)
                {
                    this.innerText = s;
                }
            }
        });
    };


    translate
    (
        "h1, h2, label, li, input, a, span",
        {
            // top level headers
            "Configure Your Plan:":     "Tilkøb point og services",
            "Purchase Summary:":        "Purchase Summary",
            "Tax Information:":         "Tax Information",
            "Billing Information":      "Billing Information",
            "Billing Address:":         "Billing Address",
            "Contact Information:":     "Contact Information",

            // errors
            "There were problems with your submission":         "There were problems with your submission",
            "Please correct the following problems:":           "Please correct the following problems",
            "First name: cannot be blank.":                     "First name: cannot be blank.",
            "Last name: cannot be blank.":                      "Last name: cannot be blank.",
            "Email address: cannot be blank.":                  "Email address: cannot be blank.",
            "Credit card expiration month: cannot be blank.":   "Credit card expiration month: cannot be blank.",
            "Credit card expiration year: cannot be blank.":    "Credit card expiration year: cannot be blank.",
            "Credit card number: cannot be blank.":             "Credit card number: cannot be blank.",

            // buttons
            "Update Totals":        "Update Totals",
            "Validate VAT Number":  "Validate VAT Number",
            "Place My Order":       "Place My Order",

            // misc
            "Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.":    "Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.",
            "Please enter your VAT number without the country code":                                    "Please enter your VAT number without the country code",

            // labels
            "VAT Number":               "VAT Number",
            "* First Name on Account":  "First Name on Account",
            "* Last Name on Account":   "Last Name on Account",
            "* Card Number":            "Card Number",
            "* CVV":                    "CVV",
            "* Expiration Date":        "Expiration Date",
            "* Address 1":              "Address 1",
            "Address 2":                "Address 2",
            "* Billing Country":        "Billing Country",
            "* Billing State":          "Billing State",
            "* Billing City":           "Billing City",
            "* Billing ZIP Code":       "Billing ZIP Code",
            "* First Name":             "First Name",
            "* Last Name":              "Last Name",
            "* Email Address":          "Email Address",
            "Phone":                    "Phone",
            "Organization":             "Organization",

            // unit price fix
            "kr1,350.00": "1.350,00 DKK",
            "kr2,000.00": "2.000,00 DKK",
            "Add for kr19.00": "Tilføj til 19,00 DKK per måned"
        }
    );


    $(document).ajaxComplete(function ()
    {
        translate
        (
            "h2, span",
            {
                // top level headers
                "Purchase Summary:": "Purchase Summary"
            }
        );
    });

});
