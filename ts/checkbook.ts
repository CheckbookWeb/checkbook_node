import * as _ from "lodash";

import { Resource } from "./resource";
import { Check } from "./endpoints/check";
import { Invoice } from "./endpoints/invoice";
import { Subscription } from "./endpoints/subscription";
import { Bank } from "./endpoints/bank";
import { User } from "./endpoints/User";
export default class Checkbook {
  checks: Check;
  resource: Resource;
  invoices: Invoice;
  subscriptions: Subscription;
  banks: Bank;
  users: User;
  /**
   *
   */
  constructor(config: {
    env?: string;
    auth?: string;
    bearer?: string;
    api_key?: string;
    api_secret?: string;
  }) {
    if (!config.env || !_.includes(["demo", "sandbox"], config.env)) {
      config.env = "www";
    }

    if (config.bearer) {
      config.auth = "Bearer " + config.bearer;
    } else if (config.api_key && config.api_secret) {
      config.auth = config.api_key + ":" + config.api_secret;
    } else {
      throw "Invalid Authorization";
    }

    this.resource = new Resource(config);

    this.checks = new Check(this.resource);
    this.invoices = new Invoice(this.resource);
    this.subscriptions = new Subscription(this.resource);
    this.banks = new Bank(this.resource);
    this.users = new User(this.resource);
  }
}
