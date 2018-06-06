# Checkbook.io Node.js Library

The [Checkbook.io](https://checkbook.io/) Node library provides convenient access to the [Checkbook.io API](https://checkbook.io/docs/api) from
applications written in server-side JavaScript.

THIS PACKAGE IS UNDER DEVELOPMENT AND IT'S NOT READY TO BE USED IN PRODUCTION YET.

## Installation

Install the package with:

    npm install checkbook-api --save
    
## Configuration

The package needs to be configured with your account's API Key and API Secret:

    const CheckbookAPI = require('checkbook-api');
    const Checkbook = new CheckbookAPI({
        api_key: '14e0ba2448894d1288c7e62cc80fb329',
        api_secret: 'ROD4evVLqy6i9ftIkKHeU1Yo44UdNB'
    });
    
You can get the API Key and API Secret values from the [Settings](https://checkbook.io/account/settings) page:

![API Key and API Secret](docs/API_Keys.png)
    
    