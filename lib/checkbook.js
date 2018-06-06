'use strict';

var Resource = require('./resource');

var ENDPOINTS = {
    checks: require('./endpoints/check')
};

function Checkbook(config) {
    this.resource = new Resource(config);

    for (var name in ENDPOINTS) {
        this[name] = new ENDPOINTS[name](this.resource);
    }
}

module.exports = Checkbook;
