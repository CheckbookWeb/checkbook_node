'use strict';

var request = require('request');
var _ = require('lodash');

function Resource(config) {
    this.config = config;
}

Resource.prototype = {

    request: function(callback) {
        request(this.getOptions(), function(error, response, body) {
            if (error) {
                return callback.call(this, error, null);
            }

            try {
                var data = JSON.parse(body);

                if (!_.includes([200, 201], response.statusCode) || data.error) {
                    error = response.statusCode + ' ' + data.error;
                    return callback.call(this, error, null);
                }

                return callback.call(this, null, data);
            } catch (e) {
                return callback.call(this, e, null);
            }
        });
    },

    getOptions: function() {
        return {
            method: 'GET',
            uri: 'https://test.checkbook.io/v3/check',
            headers: {
                'Accept': 'application/json',
                'Authorization': this.config.api_key + ':' + this.config.api_secret
            }
        };
    }

};

module.exports = Resource;
