class TwoFer{
    public static twoFer(name?: string) : string {
        
        //check if optional provided
        if(name === undefined)
        {
            return `One for you, one for me.`;
        }
        else {return `One for ${name}, one for me.`;}
    }
}

export default TwoFer