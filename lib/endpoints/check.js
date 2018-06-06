'use strict';

function Check(resource) {
    this.resource = resource;
}

Check.prototype = {

    list: function(params, callback) {
        return this.resource.request(params, callback);
    }

};

module.exports = Check;
