import  Report  from "./report";
import Split from "./split";
import Invoice from "./invoice"

class TrimestrialReport implements Report {
    
    year : number;
    invoices : Invoice[];
    clients : string[];
    constructor(yr : number, inv : Invoice[], cln? : string[]){
        this.year = yr;
        this.invoices = inv;
        this.clients = cln || [];
    }

    totalPerSplit() {
        let totalsSplit: [number, number, number] = [0,0,0];

        for(let i=0; i<this.invoices.length; i++){
            
            if ( this.invoices[i].date.getFullYear() === this.year )
            {
                if(this.invoices[i].date.getMonth() >= 0 && this.invoices[i].date.getMonth() <= 3)
                    totalsSplit[0] += this.invoices[i].total;
                else if(this.invoices[i].date.getMonth() >= 4 && this.invoices[i].date.getMonth() <= 7)
                    totalsSplit[1] += this.invoices[i].total;
                else if(this.invoices[i].date.getMonth() >= 8 && this.invoices[i].date.getMonth() <= 11)
                    totalsSplit[2] += this.invoices[i].total;
            }
        }
        return totalsSplit;
    };
    totalPerSplitForClient(client : string){
        let totalsSplitForClient: [Split, Split, Split] = [new Split(client), new Split(client), new Split(client)]

        
        
        for(let i=0; i<this.invoices.length; i++){
            if(this.invoices[i].client === client){
                if ( this.invoices[i].date.getFullYear() === this.year )
                {
                    if(this.invoices[i].date.getMonth() >= 0 && this.invoices[i].date.getMonth() <= 3)
                        totalsSplitForClient[0].total += this.invoices[i].total;
                    else if(this.invoices[i].date.getMonth() >= 4 && this.invoices[i].date.getMonth() <= 7)
                        totalsSplitForClient[1].total += this.invoices[i].total;
                    else if(this.invoices[i].date.getMonth() >= 8 && this.invoices[i].date.getMonth() <= 11)
                        totalsSplitForClient[2].total += this.invoices[i].total;
                }
            }
        }
        return totalsSplitForClient;
    };
    
    avgPerSplit(){
        let avgSplit : [number, number, number] = [0,0,0];
        let totalSplit = this.totalPerSplit();
        for(let i :number  = 0; i < totalSplit.length ; i++)
        {
            avgSplit[i] = totalSplit[i]/this.clients.length; 
        }
        
        
        return avgSplit;
    };
    procentualReportPerSplitForClient(client : string){
        let percentageSplitForClient: [Split, Split, Split] = [new Split(client), new Split(client), new Split(client)]

        let avgSplit : [number, number, number] = this.avgPerSplit(); 
        let totalPerSplit : [Split, Split, Split] = this.totalPerSplitForClient(client);

        for(let i:number = 0; i<avgSplit.length; i++){
            percentageSplitForClient[i].total = (totalPerSplit[i].total - avgSplit[i])/avgSplit[i] * 100;
        }


        return percentageSplitForClient;
    };
}

export default TrimestrialReport;