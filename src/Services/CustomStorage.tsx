
/**
 * CustomStorage Class that wraps around localStorage to store values in local storage
 */
export default class CustomStorage {

    private _localStorageKey:string = 'Visitor';

    /**
     * function to save user data to the local storage
     * @param value value you to be saved in the local storage
     */

    public saveUserToLocalStorage(value:string)
    {
        localStorage.setItem(this._localStorageKey, value);
    }
    
    /**
     * Retrieves the user data from local storage.
     * @returns The string value stored in local storage, or an empty string if no value is found.
     */
    public getUserFromLocalStorage():string {
        return localStorage.getItem(this._localStorageKey) || ''
    }
}

