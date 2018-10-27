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

    this.resource = new Resource(config);

    this.checks = new Check(this.resource);
    this.invoices = new Invoice(this.resource);
    this.subscriptions = new Subscription(this.resource);
    this.banks = new Bank(this.resource);
    this.users = new User(this.resource);

}

module.exports = Checkbook;
