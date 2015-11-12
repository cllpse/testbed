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
            "kr1,350.00": "Pris: 1.350,00 kr",
            "kr2,000.00": "Pris: 2.000,00 kr",
            "Add for kr19.00": "Tilføj til 19,00 kr per måned"
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


    $("#component_configuration").after((function ()
    {/*
        <div id="do-the-math">
            <h2>Købstotal</h2>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th>Enhedspris</th>
                            <th>Antal</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Abonnement, basis</td>
                            <th id="do-the-math-subscription-unit-amount">199,00 kr</th>
                            <th id="do-the-math-subscription-unit-count">3</th>
                            <th id="do-the-math-subscription-unit-total-amount">597,00 kr</th>
                        </tr>

                        <tr class="highlight">
                            <td>Introduktionsrabat</td>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th id="do-the-math-subscription-rebate-total-amount">-199,00 kr</th>
                        </tr>

                        <tr class="line">
                            <td>Profilside, top-billede</td>
                            <th id="do-the-math-subscription-extra-amount">19,00 kr</th>
                            <th id="do-the-math-subscription-extra-count">3</th>
                            <th id="do-the-math-subscription-extra-total-amount">57,00 kr</th>
                        </tr>

                        <tr class="line sum">
                            <th colspan="4">455,00 kr</th>
                        </tr>
                    <tbody>

                    <tbody>
                        <tr id="do-the-math-point-addition-15">
                            <td>Tilkøb, 15 point</td>
                            <th id="do-the-math-point-addition-15-unit-amount">1.350,00 kr</th>
                            <th id="do-the-math-point-addition-15-unit-count">3</th>
                            <th id="do-the-math-point-addition-15-unit-total-amount">4.050,00 kr</th>
                        </tr>

                        <tr class="line" id="do-the-math-point-addition-25">
                            <td>Tilkøb, 25 point</td>
                            <th id="do-the-math-point-addition-25-unit-amount">2.000,00 kr</th>
                            <th id="do-the-math-point-addition-25-unit-count">3</th>
                            <th id="do-the-math-point-addition-25-unit-total-amount">6.000,00 kr</th>
                        </tr>

                        <tr class="line sum">
                            <th colspan="4">10.050,00 kr</th>
                        </tr>
                    <tbody>

                    <tfoot>
                        <tr>
                            <td colspan="3">Moms &ndash; 25%</td>
                            <th colspan="1" id="do-the-math-vat-amount">2.626,25 kr</th>
                        </tr>

                        <tr class="line total">
                            <td colspan="3">Til betaling</td>
                            <th colspan="1" id="do-the-math-total-amount">13.131,25 kr</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]);
});

// do-the-math-subscription-unit-amount
// do-the-math-subscription-unit-count
// do-the-math-subscription-unit-total-amount

// do-the-math-subscription-rebate-total-amount

// do-the-math-subscription-extra-amount
// do-the-math-subscription-extra-count
// do-the-math-subscription-extra-total-amount

// do-the-math-point-addition-15
// do-the-math-point-addition-15-unit-amount
// do-the-math-point-addition-15-unit-count
// do-the-math-point-addition-15-unit-total-amount

// do-the-math-point-addition-25
// do-the-math-point-addition-25-unit-amount
// do-the-math-point-addition-25-unit-count
// do-the-math-point-addition-25-unit-total-amount

// do-the-math-vat-amount
// do-the-math-total-amount
