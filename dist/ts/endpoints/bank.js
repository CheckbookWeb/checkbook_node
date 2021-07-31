"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(resource) {
        this.resource = resource;
    }
    list(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank'
        }, callback);
    }
    institutions(callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank/institutions'
        }, callback);
    }
    delete(bank_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/bank/' + bank_id
        }, callback);
    }
    instantAccountVerification(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav',
            body: params
        }, callback, idempotencyKey);
    }
    addBankAccount(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank',
            body: params
        }, callback, idempotencyKey);
    }
    verifyMicrodesposits(params, callback) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/verify',
            body: params
        }, callback);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map