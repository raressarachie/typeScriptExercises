import Invoice  from "./invoice";
import Split from "./split";

//Interface report for describing the way a report looks and acts divided on splits(Semester/Trimester) 
interface Report{
    year : number;
    invoices : Invoice[];
    clients: string[];
    
    /** 
     *  Returns the total from invoices per split,
     * information is stored in an array of integers
     * index representing the split and array{index} 
     * total from split  
     * */ 
    totalPerSplit() : number[];
    /**
     * Returns the total of a client's invoices divided on splits
     * information is returned in an array of type Split
     * @param client : string
     */
    totalPerSplitForClient(client : String) : Split[];
    /**
     *  Returns the average per split
     * information stored in a number array with 
     * intdex representing the split and value of 
     * index the avg of said split
     */
    avgPerSplit() : number[];
    /**
     *  Returns procentual reports for a given client divided on splits
     * procentual report can be positive or negative and is computed from 
     * the avg for this split
     * @param client : string
     */
    procentualReportPerSplitForClient(client : string) : Split[];
}

export default Report;