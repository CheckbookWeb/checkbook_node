"use strict";

import * as request from 'request';
export class Resource {
  private readonly baseURI: string;
  private readonly defaultOptions: {
    json: boolean;
    headers: { Accept: string; Authorization: any };
  };
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

  public request(options, callback: (err, response) => void, idempotencyKey?) {
    request(
      this.getRequestOptions(options, idempotencyKey),
      function (error, response, body) {
        if (error) {
          return callback.call(this, error, null);
        }

        if ([200, 201].includes(response.statusCode) || body.error) {
          error = response.statusCode + " " + body.error;
          return callback.call(this, error, body);
        }

        return callback.call(this, null, body);
      }
    );
  }

  getRequestOptions(options, idempotencyKey?) {
    options = {...options, ...this.defaultOptions};

    if (idempotencyKey) {
      options.headers["Idempotency-Key"] = idempotencyKey;
    }

    options.uri = this.baseURI + options.uri;

    return options;
  }
}

// Resource.prototype = {
//   request: function (options, callback, idempotencyKey) {
//     request(
//       this.getRequestOptions(options, idempotencyKey),
//       function (error, response, body) {
//         if (error) {
//           return callback.call(this, error, null);
//         }

//         if (!_.includes([200, 201], response.statusCode) || body.error) {
//           error = response.statusCode + " " + body.error;
//           return callback.call(this, error, null);
//         }

//         return callback.call(this, null, body);
//       }
//     );
//   },

//   getRequestOptions: function (options, idempotencyKey) {
//     _.merge(options, this.defaultOptions);

//     if (idempotencyKey) {
//       options.headers["Idempotency-Key"] = idempotencyKey;
//     }

//     options.uri = this.baseURI + options.uri;

//     return options;
//   },
// };
