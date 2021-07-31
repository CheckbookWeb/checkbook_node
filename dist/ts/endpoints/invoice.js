"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(resource) {
        this.resource = resource;
    }
    list(query, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice',
            qs: query
        }, callback);
    }
    get(invoice_id, callback) {
        return this.resource.request({
            method: 'GET',
            uri: '/invoice/' + invoice_id
        }, callback);
    }
    delete(invoice_id, callback) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/invoice/' + invoice_id
        }, callback);
    }
    sendInvoice(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice',
            body: params
        }, callback, idempotencyKey);
    }
    payInvoice(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/invoice/payment',
            body: params
        }, callback, idempotencyKey);
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.js.map