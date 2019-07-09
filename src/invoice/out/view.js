"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trimestrialReport_1 = require("./model/trimestrialReport");
const repository_1 = require("./repository/repository");
class View {
    constructor() {
        this.repository = new repository_1.default();
    }
    printPerTrimester(year) {
        let report = new trimestrialReport_1.default(year, this.repository.invoices);
        let totalPerTrimester = report.totalPerSplit();
        console.log(`Total for each trimester of ${year}`);
        for (let i = 0; i < totalPerTrimester.length; i++) {
            console.log(`Trimester${i + 1} total: ${totalPerTrimester[i]}`);
        }
    }
    printPerTrimesterForClient(year) {
        let report = new trimestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        console.log(`Total for each trimester of ${year}`);
        this.repository.clients.forEach(element => {
            let reportForClientPerSplit = report.totalPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`trimester1: ${reportForClientPerSplit[0].total}, trimester2: ${reportForClientPerSplit[1].total}, trimester3: ${reportForClientPerSplit[2].total} \n`);
        });
    }
    printAvgPerTrimester(year) {
        let report = new trimestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        let avgPerTrimester = report.avgPerSplit();
        console.log(`Average for each trimester of ${year}`);
        for (let i = 0; i < avgPerTrimester.length; i++) {
            console.log(`Trimester${i + 1} total: ${avgPerTrimester[i]}`);
        }
    }
}
let vw = new View();
vw.printPerTrimester(2018);
vw.printPerTrimesterForClient(2018);
vw.printAvgPerTrimester(2018);
exports.default = View;
