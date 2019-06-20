var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Get sent/received invoices
 https://docs.checkbook.io/reference#get-invoices
 */
/*
Checkbook.invoices.list({
    page: 1,
    per_page: 10
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Get the specified invoice
 https://docs.checkbook.io/reference#get-invoice
 */
/*
Checkbook.invoices.get('929b8b25fc2b4bb5b90ef8c863b363fd', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Void the specified invoice
 https://docs.checkbook.io/reference#delete-invoice
 */
/*
Checkbook.invoices.delete('929b8b25fc2b4bb5b90ef8c863b363fd', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create invoice
 https://docs.checkbook.io/reference#post-invoice
 */
/*
Checkbook.invoices.sendInvoice({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Send Invoice',
    amount: 5.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create invoice (with idempotency key)
 https://docs.checkbook.io/reference#post-invoice
 */
/*
Checkbook.invoices.sendInvoice({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Send Invoice',
    amount: 10.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
}, '123456789');
*/


/*
 Pay invoice
 https://docs.checkbook.io/reference#post-invoice-payment
 */
/*
Checkbook.invoices.payInvoice({
    id: 'bcba746d677f48fcb68f411c40ff694d',
    amount: 10.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/