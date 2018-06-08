var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'test'
});


/*
 Create a new user (with idempotency key)
 https://checkbook.io/docs/api#post--v3-user
 */
/*
Checkbook.users.createUser({
    name: 'New User',
    user_id: 'new_user@example.com'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
}, '123456789');
*/


/*
 Create a new user (with idempotency key)
 https://checkbook.io/docs/api#post--v3-user
 */
/*
Checkbook.users.updateUser({
    user: {
        first_name: 'John',
        last_name: 'Smith'
    },
    merchant: {
        website: 'http://www.example.com'
    }
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Send SMS verification code to user
 */
/*
Checkbook.users.sendVerificationCode({
    phone: '1112223333',
    type: 'sms'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Check a given user's verification code
 */
/*
Checkbook.users.checkVerificationCode({
    code: '123123'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/