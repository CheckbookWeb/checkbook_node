# Checkbook.io Node Library

The [Checkbook.io](https://checkbook.io/) Node library provides convenient access to the [Checkbook.io API](https://checkbook.io/docs/api) from
applications written in server-side JavaScript.

## Installation

Install the package with:

    npm install checkbook-api --save
    
## Configuration

The package needs to be configured with your account's API Key and API Secret.

:key: The API credentials below are from the ```test``` environment and you can use them to try the API.

``` js
var CheckbookAPI = require('checkbook-api');
var Checkbook = new CheckbookAPI({
	api_key: 'd6aa2703655f4ba2af2a56202961ca86',
	api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
	env: 'test'
});
```
    
The ```env``` parameter is optional and can be omitted if the requests are made to the live environment.  
The possible values for this parameter are ```test``` or ```sandbox``` and the API credentials need to be from the specified environment.
    
You can get the API Key and API Secret values from the [Settings](https://checkbook.io/account/settings) page.

![API Key and API Secret](docs/API_Keys.png)

## Usage

You can use the following code snippet to send a digital check:

``` js
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
});
```

You can use the following code snippet to query the list of checks:

``` js
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
```

## Methods reference

The ```Checkbook``` class has several endpoints and you can find below the methods each one provides.  

You can click on the :book: icon to access the detailed API reference for each method. 

 * __Checkbook.checks__
 	* ```list(query, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-check)
 	* ```get(check_id, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-check-(check_id))
 	* ```delete(check_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-check-(check_id))
 	* ```sendDigitalCheck(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-check-digital)
 	* ```sendPhysicalCheck(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-check-physical)
 	* ```sendDirectDeposit(params, callback[, idempotencyKey])```
 	* ```sendMultipleChecksCSV(params, callback[, idempotencyKey])```
 	* ```convertDigitalToPhysical(params, callback)```
 	
 * __Checkbook.invoices__
 	* ```list(query, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-invoice)
 	* ```get(invoice_id, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-invoice-(invoice_id))
	* ```delete(invoice_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-invoice-(invoice_id))
	* ```sendInvoice(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-invoice)
	* ```payInvoice(params, callback[, idempotencyKey])```
 	
 * __Checkbook.subscriptions__
 
 * __Checkbook.banks__
 	* ```list(callback)``` [:book:](https://checkbook.io/docs/api#get--v3-bank)
 	
 * __Checkbook.users__
 	* ```createUser(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-user)
 	* ```updateUser(params, callback)``` [:book:](https://checkbook.io/docs/api#put--v3-user)
 	* ```sendVerificationCode(params, callback)```
 	* ```checkVerificationCode(params, callback)```
 
---

:bulb: The ```query``` object used for the ```list(query, callback)``` methods can have the following attributes:  
  * ```start_date : 'yyyy-mm-dd'```  
  * ```end_date   : 'yyyy-mm-dd'```  
  * ```direction : 'INCOMING'|'OUTGOING'```  
  * ```sort: '+NUMBER'|'-NUMBER'|'+TYPE'|'-TYPE'|'+AMOUNT'|'-AMOUNT'|'+STATUS'|'-STATUS'|'+DATE'|'-DATE'|'+DESCRIPTION'|'-DESCRIPTION'```  
  * ```status : 'PAID'|'IN_PROCESS'|'UNPAID'|'VOID'|'EXPIRED'|'PRINTED'|'MAILED'|'FAILED'|'REFUNDED'```  
  * ```q : 'search query'```  
  * ```per_page : 10|25|50```    
  * ```page : [1..N]```  
  * ```type : 'CHECK'|'INVOICE'|'SUBSCRIPTION'```  
 
## Getting help

If you need help installing or using the library, please contact Checkbook.io Support at support@checkbook.io.  

If you've instead found a bug in the library or would like new features added, please open issues or pull requests against this repo.

## More Information

 * [Code Samples](examples)
 * [API Endpoints](https://checkbook.io/docs/api#document-api_endpoints)
 * [Error Codes](https://checkbook.io/docs/api#document-error_codes)
 * [Idempotency](https://checkbook.io/docs/api#document-idempotent_requests)
    
    