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