"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualCreditCard = void 0;
class VirtualCreditCard {
    constructor(resource) {
        this.resource = resource;
    }
    add(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/account/vcc",
            body: params,
        }, callback, idempotencyKey);
    }
    update(vcc_id, params, callback) {
        return this.resource.request({
            method: "PUT",
            uri: "/account/vcc/" + vcc_id,
            body: params,
        }, callback);
    }
    get(callback) {
        return this.resource.request({
            method: "GET",
            uri: "/account/vcc",
        }, callback);
    }
    getTransactions(vcc_id, callback) {
        return this.resource.request({
            method: "GET",
            uri: "/account/vcc/" + vcc_id + "/transaction",
        }, callback);
    }
    remove(vcc_id, callback) {
        return this.resource.request({
            method: "DELETE",
            uri: "/account/vcc/" + vcc_id,
        }, callback);
    }
}
exports.VirtualCreditCard = VirtualCreditCard;
//# sourceMappingURL=vcc.js.map