import { Resource } from "../resource";
export declare class VirtualCreditCard {
    private readonly resource;
    constructor(resource: Resource);
    add(params: {
        line_1: string;
        city: string;
        state: string;
        zip: string;
    }, callback: (err: any, response: any) => void, idempotencyKey?: string): void;
    update(vcc_id: string, params: {
        name?: string;
        default: true;
    }, callback: (err: any, response: any) => void): void;
    get(callback: (err: any, response: any) => void): void;
    getTransactions(vcc_id: string, callback: (err: any, response: any) => void): void;
    remove(vcc_id: string, callback: (err: any, response: any) => void): void;
}
