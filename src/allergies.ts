/*
Allergies(score)
{
    allergiesMap - map for storing the known allergies key(score of the allergie), value(name of the allergie)
    allergieList - the list for storing the person's allergies
}
*/ 
class Allergies{
    
    public allergiesMap = new Map();
    public allergieList : string[] = [];

    //constructor for the Allergies class 
    //set the know allergies values and call computeList to populate allergieList
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

    //Function to find the highest power of 2 small than a give number
    public static highestPowerOfTwoSmallerThan(n: number){
        let res: number = 0; 
        for (let i=n; i>=1; i--) 
        { 
            // Checks i is a power of 2 
            if ((i & (i-1)) == 0) 
            { 
                res = i; 
                break; 
            } 
        } 
        return res; 
        }
    
    //Function to compute the person's allergie list based on his score
    public computeList() : void{

        let tempScore : number = this.score;
        while(tempScore > 0)
        {   
            //compute the allergy with the highest score a person might have
            let alrg: number = Allergies.highestPowerOfTwoSmallerThan(tempScore);
            
            if(alrg === 0)
                break;
            //check if it's a know allergy
            if(this.allergiesMap.get(alrg) !== undefined){
                //put in the persons allergy list
                this.allergieList.push(this.allergiesMap.get(alrg));
            }

            tempScore = tempScore - alrg;
        }
    }

    //function to list the persons allergies (they are stored in reverse because we start with the highest score)
    public list() :string[]{
        return this.allergieList.reverse();
    }

    //function to check if a person is allergic to a given allergy
    public allergicTo(allergie : string) : boolean{
        return this.allergieList.includes(allergie);
    }

    



}
export default Allergies