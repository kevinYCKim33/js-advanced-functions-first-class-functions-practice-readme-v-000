const newTaxFunction = function (countryName, taxRate, ...exemptItems) {
  return function (item, priceInCents) {
    const formattedPrice = '$' + (priceInCents / 100).toFixed(2);
    const exempt = exemptItems.indexOf(item) > -1;
    const taxDue = exempt ? 0 : priceInCents * taxRate / 100;
    const formattedTaxDue = '$' + taxDue.toFixed(2);

    console.log(`In ${countryName}, ${item} costs ${formattedPrice}.`);
    console.log(`That item`, exempt ? `is` : `is not`, `exempt from taxation.`);
    console.log(`The total tax due is: ${formattedTaxDue}.`);
  };
};

const franceTax = newTaxFunction('France', 0.15, 'wine', 'macaron', 'baguette', 'croissant');

const canadaTax = newTaxFunction('Canada', 0.125, 'maple syrup', 'poutine', 'kindness');

const mexicoTax = newTaxFunction('Mexico', 0.05, 'queso', 'futbol', 'tequila', 'avocado');

canadaTax('poutine', 599);
// LOG: In Canada, poutine costs $5.99.
// LOG: That item is exempt from taxation.
// LOG: The total tax due is: $0.00.

canadaTax('futbol', 1999);
// LOG: In Canada, futbol costs $19.99.
// LOG: That item is not exempt from taxation.
// LOG: The total tax due is: $2.50.

mexicoTax('Big Mac', 199);
// LOG: In Mexico, Big Mac costs $1.99.
// LOG: That item is not exempt from taxation.
// LOG: The total tax due is: $0.10.

franceTax('macaron', 149);
// LOG: In France, macaron costs $1.49.
// LOG: That item is exempt from taxation.
// LOG: The total tax due is: $0.00.
canadaTax;
// => ƒ (item, priceInCents) {
//        const formattedPrice = '$' + (priceInCents / 100).toFixed(2);
//        const exempt = exemptItems.indexOf(item) > -1;
//        const taxDue = exempt ? 0 : priceInCents * taxRate / 10…
