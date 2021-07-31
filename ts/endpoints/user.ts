import { Resource } from "../resource";

export class User {
    /**
     *
     */
    constructor(private readonly resource: Resource) {
        
    }

    create(params, callback, idempotencyKey) {
        return this.resource.request({
            method: 'POST',
            uri: '/user',
            body: params
        }, callback, idempotencyKey);
    }

    update(params, callback: (err, response) => void) {
        return this.resource.request({
            method: 'PUT',
            uri: '/user',
            body: params
        }, callback);
    }

    get(callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/user'
        }, callback);
    }

    list(query, callback: (err, response) => void) {
        return this.resource.request({
            method: 'GET',
            uri: '/user/list',
            qs: query
        }, callback);
    }

    delete(user_id, callback: (err, response) => void) {
        return this.resource.request({
            method: 'DELETE',
            uri: '/user/' + user_id
        }, callback);
    }

    addSignature(params, callback: (err, response) => void) {
        return this.resource.request({
            method: 'POST',
            uri: '/user/signature',
            body: params
        }, callback);
    }

}