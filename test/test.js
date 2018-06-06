var CheckbookAPI = require("../lib/checkbook-api");
var Checkbook = new CheckbookAPI({
    api_key: 'd6aa2703655f4ba2af2a56202961ca86',
    api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8'
});

Checkbook.getChecks(function (error, response) {
    if (error) {
        console.log('Error:', error);
    }

    console.log(response.checks);
});
