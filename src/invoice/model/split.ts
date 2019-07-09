class Split{
    
    private _client: string;
    private _total: number = 0;

    constructor(client){
        this._client = client;
        this._total = 0;
    }

    set client(client){
        this._client = client;
    }

    set total(total){
        this._total = total;
    }

    get client(){
        return this._client;
    }

    
    get total(){
        return this._total;
    }
}

export default Split;