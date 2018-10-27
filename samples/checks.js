var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Get sent/received checks
 https://checkbook.io/docs/api#get--v3-check
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
 https://checkbook.io/docs/api#get--v3-check-(check_id)
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
 https://checkbook.io/docs/api#delete--v3-check-(check_id)
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
 https://checkbook.io/docs/api#post--v3-check-digital
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
 https://checkbook.io/docs/api#post--v3-check-digital
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
 https://checkbook.io/docs/api#post--v3-check-physical
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