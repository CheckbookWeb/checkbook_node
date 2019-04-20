var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Create a new user (with idempotency key)
 https://checkbook.io/docs/api#post--v3-user
 */
/*
Checkbook.users.create({
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
 Update a user
 https://checkbook.io/docs/api#put--v3-user
 */
/*
Checkbook.users.update({
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
 Get the marketplace users
 https://checkbook.io/docs/api/reference/#get--v3-user-list
 */
/*
Checkbook.users.list({
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