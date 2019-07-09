import Invoice from "../model/invoice";

class Repository{
    clients : string[] = [];
    invoices : Invoice[] = [];
    
    constructor(){
        this.clients = ['client1','client2','client3','client4',
                        'client5','client6','client7','client8',
                        'client9','client10','client11','client12',
                        'client13','client14','client15','client16'];
        this.clients.forEach(element => {
            let nr = 2;
            let month = 0;
            let ok = 0;
            while(month <= 11)
            {
                let i = 0;
                while(i < 2){

                    let date = Repository.randomDate(new Date(2015,month,1),new Date())
                    if(ok === 0){
                        date.setDate(1);
                        ok = ok + 1;}
                    else{
                        date.setDate(15);
                        ok = 0;
                    }

                    let inv : Invoice = new Invoice(Repository.getRandomIntInclusive(0,1000),element, date)
                    this.invoices.push(inv);

                    i++;
                }
                month++;
            }
            
        });
        
    }

    static getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }

    static randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

}

export default Repository;


