'use strict';

var request = require('request');
var _ = require('lodash');

function Resource(config) {
    this.config = config;
}

var options = {
    method: 'GET',
    uri: 'https://test.checkbook.io/v3/check',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'd6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8'
    }
};

Resource.prototype = {

    request: function(callback) {
        request(options, function(error, response, body) {
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
    }

};

module.exports = Resource;
