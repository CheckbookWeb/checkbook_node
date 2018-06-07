var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
    env: 'test'
});

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
