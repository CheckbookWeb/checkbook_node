var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'demo'
});


/*
 Return the bank accounts for a user
 https://docs.checkbook.io/reference#get-banks
 */
/*
Checkbook.banks.list(function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Get a list of our supported institutions for IAV (Instant Account Verification)
 https://docs.checkbook.io/reference#get-bank-institutions
 */
/*
Checkbook.banks.institutions(function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Remove the specified bank account for a user
 https://docs.checkbook.io/reference#delete-bank
 */
/*
Checkbook.banks.delete('830166be0f194097b60da1cd5d76a642', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Add a new bank account for user
 https://docs.checkbook.io/reference#post-bank
 */
/*
Checkbook.banks.addBankAccount({
    routing: '021000021',
    account: '12344321',
    type: 'CHECKING'
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/



/*
 Verify the microdeposits for a bank account
 https://docs.checkbook.io/reference#post-bank-verify
 */
/*
Checkbook.banks.verifyMicrodesposits({
    amount_1: 0.07,
    amount_2: 0.15
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/