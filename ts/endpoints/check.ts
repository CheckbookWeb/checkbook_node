import { Resource } from "../resource";

export class Check {
  /**
   *
   */
  constructor(private readonly resource: Resource) {}
  list(query, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "GET",
        uri: "/check",
        qs: query,
      },
      callback
    );
  }

  get(check_id, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "GET",
        uri: "/check/" + check_id,
      },
      callback
    );
  }

  delete(check_id, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "DELETE",
        uri: "/check/" + check_id,
      },
      callback
    );
  }

  deposit(
    check_id: string,
    params: { account: string },
    callback: (err, response) => void
  ) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/check/deposit/" + check_id,
        body: params,
      },
      callback
    );
  }

  sendDigitalCheck(params, callback: (err, response) => void, idempotencyKey?) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/check/digital",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }

  sendPhysicalCheck(
    params,
    callback: (err, response) => void,
    idempotencyKey?
  ) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/check/physical",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }

  sendDirectCheck(params, callback: (err, response) => void, idempotencyKey?) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/check/direct",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }

  sendMultipleChecksCSV(
    params,
    callback: (err, response) => void,
    idempotencyKey?
  ) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/check/csv",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }
}
