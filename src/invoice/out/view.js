"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trimestrialReport_1 = require("./model/trimestrialReport");
const repository_1 = require("./repository/repository");
const semestrialReport_1 = require("./model/semestrialReport");
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
    printPercentPerTrimesterForClient(year) {
        let report = new trimestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        console.log(`Clients percentual report for each trimester of ${year}: `);
        this.repository.clients.forEach(element => {
            let percentReportForClientPerSplit = report.procentualReportPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`trimester1: ${percentReportForClientPerSplit[0].total.toFixed(2)}%, trimester2: ${percentReportForClientPerSplit[1].total.toFixed(2)}%, trimester3: ${percentReportForClientPerSplit[2].total.toFixed(2)}% \n`);
        });
    }
    printPerSemester(year) {
        let report = new semestrialReport_1.default(year, this.repository.invoices);
        let totalPerSemester = report.totalPerSplit();
        console.log(`Total for each semester of ${year}`);
        for (let i = 0; i < totalPerSemester.length; i++) {
            console.log(`Semester${i + 1} total: ${totalPerSemester[i]}`);
        }
    }
    printPerSemesterForClient(year) {
        let report = new semestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        console.log(`Total for each semester of ${year}`);
        this.repository.clients.forEach(element => {
            let reportForClientPerSplit = report.totalPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`semester1: ${reportForClientPerSplit[0].total}, semester2: ${reportForClientPerSplit[1].total}, semester3: ${reportForClientPerSplit[2].total}, semester4: ${reportForClientPerSplit[3].total} \n`);
        });
    }
    printAvgPerSemester(year) {
        let report = new semestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        let avgPerSemester = report.avgPerSplit();
        console.log(`Average for each semester of ${year}`);
        for (let i = 0; i < avgPerSemester.length; i++) {
            console.log(`Semester${i + 1} total: ${avgPerSemester[i]}`);
        }
    }
    printPercentPerSemesterForClient(year) {
        let report = new semestrialReport_1.default(year, this.repository.invoices, this.repository.clients);
        console.log(`Clients percentual report for each semester of ${year}: `);
        this.repository.clients.forEach(element => {
            let percentReportForClientPerSplit = report.procentualReportPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`semester1: ${percentReportForClientPerSplit[0].total.toFixed(2)}%, semester2: ${percentReportForClientPerSplit[1].total.toFixed(2)}%, semester3: ${percentReportForClientPerSplit[2].total.toFixed(2)}%, semester4: ${percentReportForClientPerSplit[3].total.toFixed(2)}% \n`);
        });
    }
}
let vw = new View();
vw.printPerTrimester(2018);
console.log('\n');
vw.printPerTrimesterForClient(2018);
console.log('\n');
vw.printAvgPerTrimester(2018);
console.log('\n');
vw.printPercentPerTrimesterForClient(2018);
console.log('\n');
vw.printPerSemester(2018);
console.log('\n');
vw.printPerSemesterForClient(2018);
console.log('\n');
vw.printAvgPerSemester(2018);
console.log('\n');
vw.printPercentPerSemesterForClient(2018);
exports.default = View;
