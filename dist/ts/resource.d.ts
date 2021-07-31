export declare class Resource {
    private readonly baseURI;
    private readonly defaultOptions;
    constructor(config: any);
    request(options: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    getRequestOptions(options: any, idempotencyKey?: any): any;
}
