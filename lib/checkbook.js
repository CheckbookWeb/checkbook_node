'use strict';

var _ = require('lodash');

var Resource = require('./resource');

var ENDPOINTS = {
    checks: require('./endpoints/check')
};

function Checkbook(config) {
    if (!config.env || !_.includes(['test', 'sandbox'], config.env)) {
        config.env = 'www';
    }

    this.resource = new Resource(config);

    for (var name in ENDPOINTS) {
        this[name] = new ENDPOINTS[name](this.resource);
    }
}

module.exports = Checkbook;
