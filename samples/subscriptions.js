var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Return the subscriptions for a user
 https://docs.checkbook.io/reference#get-subscriptions
 */
/*
Checkbook.subscriptions.list({
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
 Get the specified subscription for a user
 https://docs.checkbook.io/reference#get-subscription
 */
/*
Checkbook.subscriptions.get('23b0943c3a4e4f13a61703f6650ee5cf', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Remove the specified subscription for a user
 https://docs.checkbook.io/reference#delete-subscription
 */
/*
Checkbook.subscriptions.delete('23b0943c3a4e4f13a61703f6650ee5cf', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Update the specified subscription for a user
 https://docs.checkbook.io/reference#put-subscription
 */
/*
Checkbook.subscriptions.update('906f0a5e9e344839a6f47b3d929c5326', {
    skipped: [1]
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create a new check subscription
 https://docs.checkbook.io/reference#post-subscription-check
 */
/*
Checkbook.subscriptions.sendRecurringCheck({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Recurring Check',
    amount: 5.00,
    interval: 'WEEKLY'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create a new invoice subscription
 https://docs.checkbook.io/reference#post-subscription-invoice
 */
/*
Checkbook.subscriptions.sendRecurringInvoice({
    name: 'Widgets Inc.',
    recipient: 'widgets@example.com',
    description: 'Test Recurring Invoice',
    amount: 7.00,
    interval: 'WEEKLY'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/