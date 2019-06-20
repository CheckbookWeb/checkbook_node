var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Get sent/received checks
 https://docs.checkbook.io/reference#get-checks
 */
/*
Checkbook.checks.list({
    page: 1,
    per_page: 10,
    status: 'UNPAID'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Get the specified check
 https://docs.checkbook.io/reference#get-check
 */
/*
Checkbook.checks.get('222e276dc9b548fda3faa7eacb56c655', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Void the specified check
 https://docs.checkbook.io/reference#delete-check
 */
/*
Checkbook.checks.delete('222e276dc9b548fda3faa7eacb56c655', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create a digital check
 https://docs.checkbook.io/reference#post-check-digital
 */
/*
Checkbook.checks.sendDigitalCheck({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Send Check',
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
 Create a digital check (with idempotency key)
 https://docs.checkbook.io/reference#post-check-digital
 */
/*
Checkbook.checks.sendDigitalCheck({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Send Check',
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
 Create a physical check
 https://docs.checkbook.io/reference#post-check-physical
 */
/*
Checkbook.checks.sendPhysicalCheck({
    name: 'Widgets Inc.',
    recipient: {
        'line_1': '1234 N. 1st Street',
        'line_2': '#56',
        'city': 'San Francisco',
        'state': 'CA',
        'zip': '78901'
    },
    description: 'Test Send Check',
    amount: 10.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/