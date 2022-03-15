import { Resource } from "../resource";

export class VirtualCreditCard {
  /**
   *
   */
  constructor(private readonly resource: Resource) {}

  add(
    params: {
      address: { line_1: string; city: string; state: string; zip: string };
    },
    callback: (err, response) => void,
    idempotencyKey?: string
  ) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/account/vcc",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }

  update(
    vcc_id: string,
    params: { name?: string; default?: boolean },
    callback: (err, response) => void
  ) {
    return this.resource.request(
      {
        method: "PUT",
        uri: "/account/vcc" + vcc_id,
        body: params,
      },
      callback
    );
  }

  get(callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "GET",
        uri: "/account/vcc",
      },
      callback
    );
  }

  getTransactions(vcc_id: string, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "GET",
        uri: "/account/vcc" + vcc_id + "/transaction",
      },
      callback
    );
  }

  remove(vcc_id: string, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "DELETE",
        uri: "/account/vcc/" + vcc_id,
      },
      callback
    );
  }
}
