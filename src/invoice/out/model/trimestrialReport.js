"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const split_1 = require("./split");
class TrimestrialReport {
    constructor(yr, inv, cln) {
        this.year = yr;
        this.invoices = inv;
        this.clients = cln || [];
    }
    totalPerSplit() {
        let totalsSplit = [0, 0, 0];
        for (let i = 0; i < this.invoices.length; i++) {
            if (this.invoices[i].date.getFullYear() === this.year) {
                if (this.invoices[i].date.getMonth() >= 0 && this.invoices[i].date.getMonth() <= 3)
                    totalsSplit[0] += this.invoices[i].total;
                else if (this.invoices[i].date.getMonth() >= 4 && this.invoices[i].date.getMonth() <= 7)
                    totalsSplit[1] += this.invoices[i].total;
                else if (this.invoices[i].date.getMonth() >= 8 && this.invoices[i].date.getMonth() <= 11)
                    totalsSplit[2] += this.invoices[i].total;
            }
        }
        return totalsSplit;
    }
    ;
    totalPerSplitForClient(client) {
        let totalsSplitForClient = [new split_1.default(client), new split_1.default(client), new split_1.default(client)];
        for (let i = 0; i < this.invoices.length; i++) {
            if (this.invoices[i].client === client) {
                if (this.invoices[i].date.getFullYear() === this.year) {
                    if (this.invoices[i].date.getMonth() >= 0 && this.invoices[i].date.getMonth() <= 3)
                        totalsSplitForClient[0].total += this.invoices[i].total;
                    else if (this.invoices[i].date.getMonth() >= 4 && this.invoices[i].date.getMonth() <= 7)
                        totalsSplitForClient[1].total += this.invoices[i].total;
                    else if (this.invoices[i].date.getMonth() >= 8 && this.invoices[i].date.getMonth() <= 11)
                        totalsSplitForClient[2].total += this.invoices[i].total;
                }
            }
        }
        return totalsSplitForClient;
    }
    ;
    avgPerSplit() {
        let avgSplit = [0, 0, 0];
        let totalSplit = this.totalPerSplit();
        for (let i = 0; i < totalSplit.length; i++) {
            avgSplit[i] = totalSplit[i] / this.clients.length;
        }
        return avgSplit;
    }
    ;
    procentualReportPerSplitForClient(client) {
        let percentageSplitForClient;
        percentageSplitForClient[0].client = client;
        percentageSplitForClient[1].client = client;
        percentageSplitForClient[2].client = client;
        let avgSplit = this.avgPerSplit();
        let totalPerSplit = this.totalPerSplitForClient(client);
        for (let i = 0; i < avgSplit.length; i++) {
            percentageSplitForClient[i].total = (totalPerSplit[i].total - avgSplit[i]) / avgSplit[i] * 100;
        }
        return percentageSplitForClient;
    }
    ;
}
exports.default = TrimestrialReport;
