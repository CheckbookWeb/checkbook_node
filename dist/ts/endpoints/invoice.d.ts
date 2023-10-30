import { Resource } from "../resource";
export declare class Invoice {
    private readonly resource;
    constructor(resource: Resource);
    list(query: any, callback: (err: any, response: any) => void): void;
    get(invoice_id: any, callback: (err: any, response: any) => void): void;
    delete(invoice_id: any, callback: (err: any, response: any) => void): void;
    sendInvoice(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    payInvoice(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
}
