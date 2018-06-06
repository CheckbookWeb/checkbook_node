'use strict';

function CheckbookAPI(config) {
    this.config = config;
}

CheckbookAPI.prototype = {

    getConfig: function() {
        return this.config;
    }

};

module.exports = CheckbookAPI;
