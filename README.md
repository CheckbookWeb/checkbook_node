# Node.js library for the Checkbook.io API

This library provides convenient access to the [Checkbook.io API](https://checkbook.io/) from applications written in Node.js.

## Installation

Install the package with:

    npm install checkbook-api --save
    
## Configuration

The package needs to be configured with your account's API Key and API Secret.

:key: The API credentials below are from the ```demo``` environment and you can use them to try the API.

``` js
var CheckbookAPI = require('checkbook-api');
var Checkbook = new CheckbookAPI({
	api_key: 'd6aa2703655f4ba2af2a56202961ca86',
	api_secret: 'dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8',
	env: 'demo'
});
```
    
The ```env``` parameter is optional and can be omitted if the requests are made to the live environment.  
The possible values for this parameter are ```demo``` or ```sandbox``` and the API credentials need to be from the specified environment.
    
You can get the API Key and API Secret values from the [Settings](https://checkbook.io/account/settings) page.

![API Key and API Secret](docs/API_Keys.png)

## OAuth

If you wish to send requests on behalf of another user, this user will use OAuth in order to generate a key that may be used on their behalf.

You can get more details on our [OAuth documentation page](https://checkbook.io/docs/api/products/#oauth).

Once you obtain the bearer token for a user, you can use it to send API requests on its behalf:


``` js
var CheckbookAPI = require('checkbook-api');
var Checkbook = new CheckbookAPI({
	bearer: '3658db04db340ce57b35fde7a56f669be222d96e33219bf28409812d1ca364b5',
	env: 'demo'
});
```
    
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

:star: You can find more [code samples here](samples).  

## Methods reference

The ```Checkbook``` class has several endpoints and you can find below the methods each one provides.  

You can click on the :book: icon to access the detailed API reference for each method. 

 * __Checkbook.checks__
 	* ```list(query, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-check)
 	* ```get(check_id, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-check-(check_id))
 	* ```delete(check_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-check-(check_id))
 	* ```sendDigitalCheck(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-check-digital)
 	* ```sendPhysicalCheck(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-check-physical)
 	* ```sendMultipleChecksCSV(params, callback[, idempotencyKey])```
 	
 * __Checkbook.invoices__
 	* ```list(query, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-invoice)
 	* ```get(invoice_id, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-invoice-(invoice_id))
	* ```delete(invoice_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-invoice-(invoice_id))
	* ```sendInvoice(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-invoice)
	* ```payInvoice(params, callback[, idempotencyKey])```
 	
 * __Checkbook.subscriptions__
 	* ```list(query, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-subscription)
	* ```get(subscription_id, callback)``` [:book:](https://checkbook.io/docs/api#get--v3-subscription-(subscription_id))
	* ```delete(subscription_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-subscription-(subscription_id))
	* ```update(subscription_id, params, callback)``` [:book:](https://checkbook.io/docs/api#put--v3-subscription-(subscription_id))
	* ```sendRecurringCheck(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-subscription-check)
	* ```sendRecurringInvoice(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-subscription-invoice)
 
 * __Checkbook.banks__
 	* ```list(callback)``` [:book:](https://checkbook.io/docs/api#get--v3-bank)
 	* ```institutions(callback)``` [:book:](https://checkbook.io/docs/api#get--v3-bank-institutions)
 	* ```delete(bank_id, callback)``` [:book:](https://checkbook.io/docs/api#delete--v3-bank-(bank_id))
 	* ```instantAccountVerification(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-bank-iav)
 	* ```addBankAccount(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-bank)
 	* ```verifyMicrodesposits(params, callback)``` [:book:](https://checkbook.io/docs/api#post--v3-bank-verify)
 	
 * __Checkbook.users__
 	* ```create(params, callback[, idempotencyKey])``` [:book:](https://checkbook.io/docs/api#post--v3-user)
 	* ```update(params, callback)``` [:book:](https://checkbook.io/docs/api#put--v3-user)
 
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

 * [API Endpoints](https://checkbook.io/docs/api#document-api_endpoints)
 * [Error Codes](https://checkbook.io/docs/api#document-error_codes)
 * [Idempotency](https://checkbook.io/docs/api#document-idempotent_requests)
    
    