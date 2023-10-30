import { Resource } from "./resource";
import { Check } from "./endpoints/check";
import { Invoice } from "./endpoints/invoice";
import { Subscription } from "./endpoints/subscription";
import { Bank } from "./endpoints/bank";
import { User } from "./endpoints/user";
import { VirtualCreditCard } from "./endpoints/vcc";
import { Wallet } from "./endpoints/wallet";
export default class Checkbook {
    checks: Check;
    resource: Resource;
    invoices: Invoice;
    subscriptions: Subscription;
    banks: Bank;
    users: User;
    virtualCreditCards: VirtualCreditCard;
    wallet: Wallet;
    constructor(config: {
        env?: string;
        auth?: string;
        bearer?: string;
        api_key?: string;
        api_secret?: string;
    });
}
