import  Report  from "./report";
import Split from "./split";
import Invoice from "./invoice"

class SemestrialReport implements Report{
    
    year : number;
    invoices : Invoice[];
    clients : string[];
    constructor(yr : number, inv : Invoice[], cln? : string[]){
        this.year = yr;
        this.invoices = inv;
        this.clients = cln || [];
    }

    totalPerSplit(){
        let totalsSplit: [number, number, number, number] = [0,0,0,0];

        this.invoices.forEach(element => {
            
            if(element.date.getFullYear() === this.year ){
                switch(element.date.getMonth())
                {
                    case 0:
                    case 1:
                    case 2:
                    {
                        totalsSplit[0] += element.total;
                        break;
                    }
                    case 3:
                    case 4:
                    case 5:
                    {
                        totalsSplit[1] += element.total;
                        break;                    
                    }
                    case 6:
                    case 7:
                    case 8:
                    {
                        totalsSplit[2] += element.total;
                        break; 
                    }
                    case 9:
                    case 10:
                    case 11:
                    {
                        totalsSplit[3] += element.total; 
                        break; 
                    } 
                }
            }   
            
        });

        return totalsSplit;
    };
    totalPerSplitForClient(client : string){
        let totalsSplitForClient: [Split, Split, Split, Split] = [new Split(client), new Split(client), new Split(client), new Split(client)]

        this.invoices.forEach(element => {
        if(element.client === client){  
            if(element.date.getFullYear() === this.year ){
                switch(element.date.getMonth())
                {
                    case 0:
                    case 1:
                    case 2:
                    {
                        totalsSplitForClient[0].total += element.total;
                        break;
                    }
                    case 3:
                    case 4:
                    case 5:
                    {
                        totalsSplitForClient[1].total += element.total; 
                        break;                   
                    }
                    case 6:
                    case 7:
                    case 8:
                    {
                        totalsSplitForClient[2].total += element.total; 
                        break;
                    }
                    case 9:
                    case 10:
                    case 11:
                    {
                        totalsSplitForClient[3].total += element.total;
                        break;  
                    } 
                }
        }
         } 
        });
        return totalsSplitForClient;
    };
    avgPerSplit(){
        let avgSplit : [number, number, number, number] = [0,0,0,0];
        let totalSplit = this.totalPerSplit();
        for(let i :number  = 0; i < totalSplit.length ; i++)
        {
            avgSplit[i] = totalSplit[i]/this.clients.length; 
        }
        
        
        return avgSplit;
    };
    procentualReportPerSplitForClient(client : string){
        let percentageSplitForClient: [Split, Split, Split, Split] = [new Split(client), new Split(client), new Split(client),  new Split(client)]

        let avgSplit : [number, number, number, number] = this.avgPerSplit(); 
        let totalPerSplit : [Split, Split, Split, Split] = this.totalPerSplitForClient(client);

        for(let i:number = 0; i<avgSplit.length; i++){
            percentageSplitForClient[i].total = (totalPerSplit[i].total - avgSplit[i])/avgSplit[i] * 100;
        }


        return percentageSplitForClient;
    };
}

export default SemestrialReport;