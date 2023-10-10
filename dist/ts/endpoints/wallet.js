"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(resource) {
        this.resource = resource;
    }
    add(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/account/wallet",
            body: params,
        }, callback, idempotencyKey);
    }
    update(wallet_id, params, callback) {
        return this.resource.request({
            method: "PUT",
            uri: "/account/wallet/" + wallet_id,
            body: params,
        }, callback);
    }
    get(callback) {
        return this.resource.request({
            method: "GET",
            uri: "/account/wallet",
        }, callback);
    }
    remove(wallet_id, callback) {
        return this.resource.request({
            method: "DELETE",
            uri: "/account/wallet/" + wallet_id,
        }, callback);
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map