import { Resource } from "../resource";
export declare class Subscription {
    private readonly resource;
    constructor(resource: Resource);
    list(query: any, callback: (err: any, response: any) => void): void;
    get(subscription_id: any, callback: (err: any, response: any) => void): void;
    delete(subscription_id: any, callback: (err: any, response: any) => void): void;
    update(subscription_id: any, params: any, callback: (err: any, response: any) => void): void;
    sendRecurringCheck(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    sendRecurringInvoice(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
}
