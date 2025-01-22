

export default class CustomStorage {

    private _localStorageKey:string = 'Visitor';

    public saveUserToLocalStorage(value:string)
    {
        localStorage.setItem(this._localStorageKey, value);
    }
    
    public getUserFromLocalStorage():string {
        return localStorage.getItem(this._localStorageKey) || ''
    }
}

