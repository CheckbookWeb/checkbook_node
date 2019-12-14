var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Create a new user (with idempotency key)
 https://docs.checkbook.io/reference#post-user
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
 https://docs.checkbook.io/reference#put-user
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
 Get user information
 https://docs.checkbook.io/reference#get-user
 */
/*
Checkbook.users.get(function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Get the marketplace users
 https://docs.checkbook.io/reference#get-users
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


/*
 Delete the specified marketplace user
 https://docs.checkbook.io/reference#delete-user
 */
/*
Checkbook.users.delete('222e276dc9b548fda3faa7eacb56c655', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Add user signature
 https://docs.checkbook.io/reference#post-user-signature
 */
/*
Checkbook.users.addSignature({
    signature: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/