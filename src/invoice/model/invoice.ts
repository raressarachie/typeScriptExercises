class Invoice{
    constructor(private _total: number,private _client: string,private _date: Date){
        this._total = _total;
        this._client = _client;
        this._date = _date;
    }

    get total(){
        return this._total;
    }

    get client(){
        return this._client;
    }
    
    get date(){
        return this._date;
    }


}
export default Invoice