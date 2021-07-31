import { Resource } from "../resource";
export declare class Bank {
    private readonly resource;
    constructor(resource: Resource);
    list(callback: (err: any, response: any) => void): void;
    institutions(callback: (err: any, response: any) => void): void;
    delete(bank_id: any, callback: (err: any, response: any) => void): void;
    instantAccountVerification(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    addBankAccount(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    verifyMicrodesposits(params: any, callback: (err: any, response: any) => void): void;
}
