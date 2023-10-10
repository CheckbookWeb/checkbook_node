import { Resource } from "../resource";
export declare class Wallet {
    private readonly resource;
    constructor(resource: Resource);
    add(params: {
        name: string;
    }, callback: (err: any, response: any) => void, idempotencyKey?: string): void;
    update(wallet_id: string, params: {
        name?: string;
    }, callback: (err: any, response: any) => void): void;
    get(callback: (err: any, response: any) => void): void;
    remove(wallet_id: string, callback: (err: any, response: any) => void): void;
}
