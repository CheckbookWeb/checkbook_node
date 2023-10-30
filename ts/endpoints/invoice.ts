import { Resource } from "../resource";

export class Invoice {
    /**
     *
     */
    constructor(private readonly resource: Resource) {
        
    }
    list(query, callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice',
            qs: query
        }, callback);
    }

    get(invoice_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice/' + invoice_id
        }, callback);
    }

    delete(invoice_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/invoice/' + invoice_id
        }, callback);
    }

    sendInvoice(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice',
            body: params
        }, callback, idempotencyKey);
    }

    payInvoice(params, callback: (err, response) => void, idempotencyKey?) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice/payment',
            body: params
        }, callback, idempotencyKey);
    }
}
