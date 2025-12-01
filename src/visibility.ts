export class Counter {
    //prop counter ini hanya bisa diakses oleh class Counter itu sendiri
    //ketika membuat object dari Counter ini sendiri, tidak akan bisa mengakses
    //properties counter ini
    // private counter : number = 0;
    
    protected counter:number = 0;

    public increment() : void{
        this.counter++;
    }

    public getCounter() : number{
        return this.counter;
    }
}