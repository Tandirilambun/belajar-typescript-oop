export class Category {
    private _name?: string; //tidak bisa di akses langsung

    get name(): string {
        if(this._name){
            return this._name;
        }
        else {
            return "empty";
        }
    }

    set name(value: string){
        if(value !== ""){
            this._name = value;
        }
    }
}