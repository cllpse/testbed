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
            "Configure Your Plan:":     "___Configure Your Plan:",
            "Purchase Summary:":        "___Purchase Summary:",
            "Tax Information:":         "___Tax Information:",
            "Billing Information":      "___Billing Information",
            "Billing Address:":         "___Billing Address:",
            "Contact Information:":     "___Contact Information:",

            // errors
            "There were problems with your submission":         "___There were problems with your submission",
            "Please correct the following problems:":           "___Please correct the following problems:",
            "First name: cannot be blank.":                     "___First name: cannot be blank.",
            "Last name: cannot be blank.":                      "___Last name: cannot be blank.",
            "Email address: cannot be blank.":                  "___Email address: cannot be blank.",
            "Credit card expiration month: cannot be blank.":   "___Credit card expiration month: cannot be blank.",
            "Credit card expiration year: cannot be blank.":    "___Credit card expiration year: cannot be blank.",
            "Credit card number: cannot be blank.":             "___Credit card number: cannot be blank.",

            // buttons
            "Update Totals":        "___Update Totals",
            "Validate VAT Number":  "___Validate VAT Number",
            "Place My Order":       "___Place My Order",

            // misc
            "Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.":    "___Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.",
            "Please enter your VAT number without the country code":                                    "___Please enter your VAT number without the country code",

            // labels
            "VAT Number":               "___VAT Number",
            "* First Name on Account":  "___* First Name on Account",
            "* Last Name on Account":   "___* Last Name on Account",
            "* Card Number":            "___* Card Number",
            "* CVV":                    "___* CVV",
            "* Expiration Date":        "___* Expiration Date",
            "* Address 1":              "___* Address 1",
            "Address 2":                "___Address 2",
            "* Billing Country":        "___* Billing Country",
            "* Billing State":          "___* Billing State",
            "* Billing City":           "___* Billing City",
            "* Billing ZIP Code":       "___* Billing ZIP Code",
            "* First Name":             "___* First Name",
            "* Last Name":              "___* Last Name",
            "* Email Address":          "___* Email Address",
            "Phone":                    "___Phone",
            "Organization":             "___Organization"
        }
    );


    $(document).ajaxComplete(function ()
    {
        translate
        (
            "h2, span",
            {
                // top level headers
                "Purchase Summary:": "___Purchase Summary:"
            }
        );
    });

});
