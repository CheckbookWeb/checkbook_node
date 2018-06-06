'use strict';

var request = require('request');
var _ = require('lodash');

function Resource(config) {
    this.config = config;
}

Resource.prototype = {

    request: function(params, callback) {
        request(this.getOptions(params), function(error, response, body) {
            if (error) {
                return callback.call(this, error, null);
            }

            if (!_.includes([200, 201], response.statusCode) || body.error) {
                error = response.statusCode + ' ' + body.error;
                return callback.call(this, error, null);
            }

            return callback.call(this, null, body);
        });
    },

    getOptions: function(params) {
        return {
            method: 'GET',
            uri: 'https://test.checkbook.io/v3/check',
            json:true,
            headers: {
                'Accept': 'application/json',
                'Authorization': this.config.api_key + ':' + this.config.api_secret
            },
            qs: params
        };
    }

};

module.exports = Resource;
