"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const split_1 = require("./split");
class SemestrialReport {
    constructor(yr, inv, cln) {
        this.year = yr;
        this.invoices = inv;
        this.clients = cln || [];
    }
    totalPerSplit() {
        let totalsSplit = [0, 0, 0, 0];
        this.invoices.forEach(element => {
            if (element.date.getFullYear() === this.year) {
                switch (element.date.getMonth()) {
                    case 0:
                    case 1:
                    case 2:
                        {
                            totalsSplit[0] += element.total;
                        }
                    case 3:
                    case 4:
                    case 5:
                        {
                            totalsSplit[1] += element.total;
                        }
                    case 6:
                    case 7:
                    case 8:
                        {
                            totalsSplit[2] += element.total;
                        }
                    case 9:
                    case 10:
                    case 11:
                        {
                            totalsSplit[3] += element.total;
                        }
                }
            }
        });
        return totalsSplit;
    }
    ;
    totalPerSplitForClient(client) {
        let totalsSplitForClient = [new split_1.default(client), new split_1.default(client), new split_1.default(client), new split_1.default(client)];
        /*this.invoices.forEach(element => {
           
            switch(element.date.getMonth())
            {
                case 0:
                case 1:
                case 2:
                {
                    totalsSplitForClient[0].total += element.total;
                }
                case 3:
                case 4:
                case 5:
                {
                    totalsSplitForClient[1].total += element.total;
                }
                case 6:
                case 7:
                case 8:
                {
                    totalsSplitForClient[2].total += element.total;
                }
                case 9:
                case 10:
                case 11:
                {
                    totalsSplitForClient[3].total += element.total;
                }
            }
            
        });*/
        for (let i = 0; i < this.invoices.length; i++) {
            if (this.invoices[i].client === client) {
                if (this.invoices[i].date.getFullYear() === this.year) {
                    if (this.invoices[i].date.getMonth() >= 0 && this.invoices[i].date.getMonth() <= 2)
                        totalsSplitForClient[0].total += this.invoices[i].total;
                    else if (this.invoices[i].date.getMonth() >= 3 && this.invoices[i].date.getMonth() <= 5)
                        totalsSplitForClient[1].total += this.invoices[i].total;
                    else if (this.invoices[i].date.getMonth() >= 6 && this.invoices[i].date.getMonth() <= 8)
                        totalsSplitForClient[2].total += this.invoices[i].total;
                    else if (this.invoices[i].date.getMonth() >= 9 && this.invoices[i].date.getMonth() <= 11)
                        totalsSplitForClient[3].total += this.invoices[i].total;
                }
            }
        }
        return totalsSplitForClient;
    }
    ;
    avgPerSplit() {
        let avgSplit = [0, 0, 0, 0];
        let totalSplit = this.totalPerSplit();
        for (let i = 0; i < totalSplit.length; i++) {
            avgSplit[i] = totalSplit[i] / this.clients.length;
        }
        return avgSplit;
    }
    ;
    procentualReportPerSplitForClient(client) {
        let percentageSplitForClient = [new split_1.default(client), new split_1.default(client), new split_1.default(client), new split_1.default(client)];
        let avgSplit = this.avgPerSplit();
        let totalPerSplit = this.totalPerSplitForClient(client);
        for (let i = 0; i < avgSplit.length; i++) {
            percentageSplitForClient[i].total = (totalPerSplit[i].total - avgSplit[i]) / avgSplit[i] * 100;
        }
        return percentageSplitForClient;
    }
    ;
}
exports.default = SemestrialReport;
