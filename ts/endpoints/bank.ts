import { Resource } from "../resource";

export class Bank {
    /**
     *
     */
    constructor(private readonly resource: Resource) {
        
    }

    list(callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank'
        }, callback);
    }

    institutions(callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/bank/institutions'
        }, callback);
    }

    delete(bank_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/bank/' + bank_id
        }, callback);
    }

    instantAccountVerification(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav',
            body: params
        }, callback, idempotencyKey);
    }

    instantAccountVerificationPlaid(params: { processor_token: string }, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/iav/plaid',
            body: params
        }, callback, idempotencyKey);
    }

    addBankAccount(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank',
            body: params
        }, callback, idempotencyKey);
    }

    verifyMicrodesposits(params, callback: (err, response) => void) {
        return this.resource.request({
            method: 'POST',
            uri: '/bank/verify',
            body: params
        }, callback);
    }
}
