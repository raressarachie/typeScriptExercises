class Allergies{
    
    public allergiesMap = new Map();
    public allergieList : string[] = [];

    constructor(public score: number = 0){
        this.allergiesMap.set(1, "eggs");
        this.allergiesMap.set(2, "peanuts");
        this.allergiesMap.set(4, "shellfish");
        this.allergiesMap.set(8, "strawberries");
        this.allergiesMap.set(16, "tomatoes");
        this.allergiesMap.set(32, "chocolate");
        this.allergiesMap.set(64, "pollen");
        this.allergiesMap.set(128, "cats");
        this.computeList();
    }

    public static highestPowerOfTwoSmallerThan(n: number){
        let res: number = 0; 
        for (let i=n; i>=1; i--) 
        { 
            // If i is a power of 2 
            if ((i & (i-1)) == 0) 
            { 
                res = i; 
                break; 
            } 
        } 
        return res; 
        }

    public computeList() : void{

        let tempScore : number = this.score;
        while(tempScore > 0)
        {
            let alrg: number = Allergies.highestPowerOfTwoSmallerThan(tempScore);
            if(alrg === 0)
                break;

            if(this.allergiesMap.get(alrg) !== undefined){
                this.allergieList.push(this.allergiesMap.get(alrg));
            }

            tempScore = tempScore - alrg;
        }
    }

    public list() :string[]{
        return this.allergieList.reverse();
    }

    public allergicTo(allergie : string) : boolean{
        return this.allergieList.includes(allergie);
    }

    



}
export default Allergies