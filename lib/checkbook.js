'use strict';

var _ = require('lodash');

var Resource = require('./resource');

var Check = require('./endpoints/check');
var Invoice = require('./endpoints/invoice');
var Subscription = require('./endpoints/subscription');
var Bank = require('./endpoints/bank');
var User = require('./endpoints/user');

function Checkbook(config) {
    if (!config.env || !_.includes(['demo', 'sandbox'], config.env)) {
        config.env = 'www';
    }

	if (config.bearer) {
		config.auth = 'Bearer ' + config.bearer;
	} else if (config.api_key && config.api_secret){
		config.auth = config.api_key + ':' + config.api_secret;
	} else {
		throw 'Invalid Authorization';
	}

    this.resource = new Resource(config);

    this.checks = new Check(this.resource);
    this.invoices = new Invoice(this.resource);
    this.subscriptions = new Subscription(this.resource);
    this.banks = new Bank(this.resource);
    this.users = new User(this.resource);

}

module.exports = Checkbook;
