'use strict';

var request = require('request');
var _ = require('lodash');

function Resource(config) {
    this.baseURI = 'https://' + config.env + '.checkbook.io/v3';
    this.defaultOptions = {
        json:true,
        headers: {
            'Accept': 'application/json',
            'Authorization': config.api_key + ':' + config.api_secret
        }
    }
}

Resource.prototype = {

    request: function(options, callback) {
        request(this.getRequestOptions(options), function(error, response, body) {
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

    getRequestOptions: function(options) {
        _.merge(options, this.defaultOptions);
        options.uri = this.baseURI + options.uri;
        return options;
    }

};

module.exports = Resource;
