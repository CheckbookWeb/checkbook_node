import { Resource } from "../resource";

export class Wallet {
  /**
   *
   */
  constructor(private readonly resource: Resource) {}

  add(
    params: {
      name: string;
    },
    callback: (err, response) => void,
    idempotencyKey?: string
  ) {
    return this.resource.request(
      {
        method: "POST",
        uri: "/account/wallet",
        body: params,
      },
      callback,
      idempotencyKey
    );
  }

  update(
    wallet_id: string,
    params: { name?: string; },
    callback: (err, response) => void
  ) {
    return this.resource.request(
      {
        method: "PUT",
        uri: "/account/wallet/" + wallet_id,
        body: params,
      },
      callback
    );
  }

  get(callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "GET",
        uri: "/account/wallet",
      },
      callback
    );
  }

  remove(wallet_id: string, callback: (err, response) => void) {
    return this.resource.request(
      {
        method: "DELETE",
        uri: "/account/wallet/" + wallet_id,
      },
      callback
    );
  }
}
