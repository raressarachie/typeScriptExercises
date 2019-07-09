"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Split {
    constructor(client) {
        this._total = 0;
        this._client = client;
        this._total = 0;
    }
    set client(client) {
        this._client = client;
    }
    set total(total) {
        this._total = total;
    }
    get client() {
        return this._client;
    }
    get total() {
        return this._total;
    }
}
exports.default = Split;
