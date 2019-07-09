"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(_total, _client, _date) {
        this._total = _total;
        this._client = _client;
        this._date = _date;
        this._total = _total;
        this._client = _client;
        this._date = _date;
    }
    get total() {
        return this._total;
    }
    get client() {
        return this._client;
    }
    get date() {
        return this._date;
    }
}
exports.default = Invoice;
