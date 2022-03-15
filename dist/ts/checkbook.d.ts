import { Resource } from "./resource";
import { Check } from "./endpoints/check";
import { Invoice } from "./endpoints/invoice";
import { Subscription } from "./endpoints/subscription";
import { Bank } from "./endpoints/bank";
import { User } from "./endpoints/User";
import { VirtualCreditCard } from "./endpoints/vcc";
export default class Checkbook {
    checks: Check;
    resource: Resource;
    invoices: Invoice;
    subscriptions: Subscription;
    banks: Bank;
    users: User;
    virtualCreditCards: VirtualCreditCard;
    constructor(config: {
        env?: string;
        auth?: string;
        bearer?: string;
        api_key?: string;
        api_secret?: string;
    });
}
