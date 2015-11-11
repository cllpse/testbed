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
        "h1, h2, label, li, input, a, span, .errorExplanation p",
        {
            // top level headers
            "Configure Your Plan:":     "Tilkøb point og services",
            "Tax Information:":         "Tax Information",
            "Billing Information":      "Kortinformation",
            "Billing Address:":         "Billing Address",
            "Contact Information:":     "Contact Information",

            // errors
            "There were problems with your submission":         "Vi kunne ikke gennemføre din bestilling",
            "Please correct the following problems:":           "Ret venligst følgende fejl",
            "First name: cannot be blank.":                     "Fornavn skal udfyldes",
            "Last name: cannot be blank.":                      "Efternavn skal udfyldes",
            "Email address: cannot be blank.":                  "E-mail adresse skal udfyldes",
            "Credit card expiration month: cannot be blank.":   "Udløbsmåned på kreditkort skal udfyldes",
            "Credit card expiration year: cannot be blank.":    "Udløbsår på kreditkort skal udfyldes",
            "Credit card number: cannot be blank.":             "Kortnummer på kreditkort skal udfyldes",

            // buttons
            "Update Totals":        "Opdater totaler",
            "Validate VAT Number":  "Validate VAT Number",
            "Place My Order":       "Godkend betaling og køb",

            // misc
            "Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.":    "Residents of the EU, outside of DK, may enter their VAT number to be exempt from tax.",
            "Please enter your VAT number without the country code":                                    "Please enter your VAT number without the country code",

            // labels
            "VAT Number":               "VAT Number",
            "* First Name on Account":  "Fornavn på kort",
            "* Last Name on Account":   "Efternavn på kort",
            "* Card Number":            "Kortnummer",
            "* CVV":                    "CVV",
            "* Expiration Date":        "Udløbsdato",
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
            "kr1,350.00": "1.350,00 Kr",
            "kr2,000.00": "2.000,00 Kr",
            "Add for kr19.00": "Tilføj til 19,00 DKK per måned"
        }
    );


    $(document).ajaxComplete(function ()
    {
        translate
        (
            "h2, h3, span",
            {
                // top level headers
                "Purchase Summary:": "Købstotal"
            }
        );
    });


    $("#subscription_submit").click(function ()
    {
        var that = this;
        var i = 0;

        if ($("#accept_terms").is(":checked"))
        {
            var interval = setInterval(function ()
            {
                i++;

                if (i > 500) clearInterval(interval);

                that.value = "Arbejder...";
            }, 1);
        }
    });

});
