//class for a word and its nr of occurences with two attributes word(string) and occ(number)
class wordAndOccurence{
    public word :string;
    public occ: number;

    constructor(w: string, nr: number){
        this.word = w;
        this. occ = nr;
    }
}


export default wordAndOccurence;