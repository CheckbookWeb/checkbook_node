'use strict';

function Bank(resource) {
    this.resource = resource;
}

Bank.prototype = {

    list: function(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank'
        }, callback);
    }

};

module.exports = Bank;
