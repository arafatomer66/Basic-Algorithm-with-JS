const price = 4.20;
const quantity = 20;
// The old way
let invoiceData = {
  price: price,
  quantity: quantity,
  printInvoice: function () {
    console.log(`price = ${this.price}`, `quantity = ${this.quantity}`);
  }
}
invoiceData.printInvoice(); // price = 4.2 quantity = 20
// The new way
invoiceData = {
  price,
  quantity,
  printInvoice() {
  console.log(`price = ${this.price}`, `quantity =  ${this.quantity}`);
  }
}
invoiceData.printInvoice(); //price = 4.2 quantity = 20