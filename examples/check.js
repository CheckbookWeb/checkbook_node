var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'test'
});


/*
 Get sent/received checks
 https://checkbook.io/docs/api#get--v3-check
 */
/*
Checkbook.checks.list({
    page: 2,
    per_page: 10,
    status: 'IN_PROCESS'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log(response);
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
        console.log(response);
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
        console.log(response);
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
        console.log(response);
    }
});


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
        console.log(response);
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
        console.log(response);
    }
});
*/


/*
 Create a new direct deposit
 */
/*
Checkbook.checks.sendDirectDeposit({
    name: 'Widgets Inc.',
    recipient: 'cmolea+ioioio@checkbook.io',
    description: 'Test Direct Deposit',
    amount: 5.00,
    routing_number: '021000021',
    account_number: '123456789',
    account_type: 'CHECKING'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log(response);
    }
});
*/


/*
 Convert a check between digital and physical
 */
/*
Checkbook.checks.convertDigitalToPhysical({
    id: '358439acd1d9481bbdc6badb241565c4',
    address: {
        'line_1': '1234 N. 1st Street',
        'line_2': '#56',
        'city': 'San Francisco',
        'state': 'CA',
        'zip': '78901'
    }
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log(response);
    }
});
*/