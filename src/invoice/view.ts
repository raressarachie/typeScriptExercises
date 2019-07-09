import TrimestrialReport from "./model/trimestrialReport";
import Invoice from "./model/invoice";
import Repository from "./repository/repository"
import Split from "./model/split";
import SemestrialReport from "./model/semestrialReport";

class View{
    repository : Repository;
    constructor(){
        this.repository = new Repository();
    }
    
    printPerTrimester(year : number) : void{
        let report : TrimestrialReport = new TrimestrialReport(year, this.repository.invoices);
        let totalPerTrimester : number[] = report.totalPerSplit();
        console.log(`Total for each trimester of ${year}`)

        for(let i:number = 0; i<totalPerTrimester.length; i++)
        {
            console.log(`Trimester${i+1} total: ${totalPerTrimester[i]}`);
        }

    }
    
   
    printPerTrimesterForClient(year : number) : void{
        let report : TrimestrialReport = new TrimestrialReport(year, this.repository.invoices, this.repository.clients);
        console.log(`Total for each trimester of ${year}`)
        this.repository.clients.forEach(element => {
            let reportForClientPerSplit = report.totalPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`trimester1: ${reportForClientPerSplit[0].total}, trimester2: ${reportForClientPerSplit[1].total}, trimester3: ${reportForClientPerSplit[2].total} \n`);
                      
        });

    }

    printAvgPerTrimester(year: number){
        let report : TrimestrialReport = new TrimestrialReport(year, this.repository.invoices, this.repository.clients);
        let avgPerTrimester : number[] = report.avgPerSplit();
        console.log(`Average for each trimester of ${year}`)

        for(let i:number = 0; i<avgPerTrimester.length; i++)
        {
            console.log(`Trimester${i+1} total: ${avgPerTrimester[i]}`);
        }
    }

    printPercentPerTrimesterForClient(year: number){
        let report : TrimestrialReport = new TrimestrialReport(year, this.repository.invoices, this.repository.clients);
        console.log(`Clients percentual report for each trimester of ${year}: `)
        this.repository.clients.forEach(element => {
            let percentReportForClientPerSplit = report.procentualReportPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`trimester1: ${percentReportForClientPerSplit[0].total.toFixed(2)}%, trimester2: ${percentReportForClientPerSplit[1].total.toFixed(2)}%, trimester3: ${percentReportForClientPerSplit[2].total.toFixed(2)}% \n`);
                      
        });
    
    }

    printPerSemester(year : number) : void{
        let report : SemestrialReport = new SemestrialReport(year, this.repository.invoices);
        let totalPerSemester : number[] = report.totalPerSplit();
        console.log(`Total for each semester of ${year}`)

        for(let i:number = 0; i<totalPerSemester.length; i++)
        {
            console.log(`Semester${i+1} total: ${totalPerSemester[i]}`);
        }

    }

     
    printPerSemesterForClient(year : number) : void{
        let report : SemestrialReport= new SemestrialReport(year, this.repository.invoices, this.repository.clients);
        console.log(`Total for each semester of ${year}`)
        this.repository.clients.forEach(element => {
            let reportForClientPerSplit = report.totalPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`semester1: ${reportForClientPerSplit[0].total}, semester2: ${reportForClientPerSplit[1].total}, semester3: ${reportForClientPerSplit[2].total}, semester4: ${reportForClientPerSplit[3].total} \n`);
                      
        });

    }

    printAvgPerSemester(year: number){
        let report : SemestrialReport = new SemestrialReport(year, this.repository.invoices, this.repository.clients);
        let avgPerSemester : number[] = report.avgPerSplit();
        console.log(`Average for each semester of ${year}`)

        for(let i:number = 0; i<avgPerSemester.length; i++)
        {
            console.log(`Semester${i+1} total: ${avgPerSemester[i]}`);
        }
    }

    printPercentPerSemesterForClient(year: number){
        let report : SemestrialReport = new SemestrialReport(year, this.repository.invoices, this.repository.clients);
        console.log(`Clients percentual report for each semester of ${year}: `)
        this.repository.clients.forEach(element => {
            let percentReportForClientPerSplit = report.procentualReportPerSplitForClient(element);
            console.log(`for client: ${element}`);
            console.log(`semester1: ${percentReportForClientPerSplit[0].total.toFixed(2)}%, semester2: ${percentReportForClientPerSplit[1].total.toFixed(2)}%, semester3: ${percentReportForClientPerSplit[2].total.toFixed(2)}%, semester4: ${percentReportForClientPerSplit[3].total.toFixed(2)}% \n`);
                      
        });
    
    }




}
let vw = new View();
vw.printPerTrimester(2018); 
console.log('\n')
vw.printPerTrimesterForClient(2018);
console.log('\n') 
vw.printAvgPerTrimester(2018);
console.log('\n') 
vw.printPercentPerTrimesterForClient(2018);
console.log('\n')
vw.printPerSemester(2018); 
console.log('\n')
vw.printPerSemesterForClient(2018); 
console.log('\n')
vw.printAvgPerSemester(2018); 
console.log('\n')
vw.printPercentPerSemesterForClient(2018);

export default View;

