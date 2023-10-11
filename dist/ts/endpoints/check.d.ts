import { Resource } from "../resource";
export declare class Check {
    private readonly resource;
    constructor(resource: Resource);
    list(query: any, callback: (err: any, response: any) => void): void;
    get(check_id: any, callback: (err: any, response: any) => void): void;
    delete(check_id: any, callback: (err: any, response: any) => void): void;
    deposit(check_id: string, params: {
        account: string;
    }, callback: (err: any, response: any) => void): void;
    sendDigitalCheck(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    sendPhysicalCheck(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    sendDirectCheck(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    sendMultipleChecksCSV(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
}
