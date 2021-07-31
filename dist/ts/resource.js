"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const request = require("request");
const _ = require("lodash");
class Resource {
    constructor(config) {
        this.baseURI = "https://" + config.env + ".checkbook.io/v3";
        this.defaultOptions = {
            json: true,
            headers: {
                Accept: "application/json",
                Authorization: config.auth,
            },
        };
    }
    request(options, callback, idempotencyKey) {
        request(this.getRequestOptions(options, idempotencyKey), function (error, response, body) {
            if (error) {
                return callback.call(this, error, null);
            }
            if (!_.includes([200, 201], response.statusCode) || body.error) {
                error = response.statusCode + " " + body.error;
                return callback.call(this, error, null);
            }
            return callback.call(this, null, body);
        });
    }
    getRequestOptions(options, idempotencyKey) {
        _.merge(options, this.defaultOptions);
        if (idempotencyKey) {
            options.headers["Idempotency-Key"] = idempotencyKey;
        }
        options.uri = this.baseURI + options.uri;
        return options;
    }
}
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map