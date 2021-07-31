import { Resource } from "../resource";
export declare class User {
    private readonly resource;
    constructor(resource: Resource);
    create(params: any, callback: any, idempotencyKey: any): void;
    update(params: any, callback: (err: any, response: any) => void): void;
    get(callback: (err: any, response: any) => void): void;
    list(query: any, callback: (err: any, response: any) => void): void;
    delete(user_id: any, callback: (err: any, response: any) => void): void;
    addSignature(params: any, callback: (err: any, response: any) => void): void;
}
