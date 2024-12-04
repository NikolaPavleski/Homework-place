let PhonePrice = 119.95;

let numberOfPhones = 30;

let Taxes = 0.05

let withoutTaxes = PhonePrice * numberOfPhones

let withTaxes = withoutTaxes * Taxes

let total = withoutTaxes + withTaxes

console.log("total: $" + total)