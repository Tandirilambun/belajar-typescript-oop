export class Customer {
    readonly id: string; // readonly berarti tidak bisa diubah setelah diinisialisasi
    name:string; //mandatory artinya wajib diisi didalam constructor
    age?:number; // ? berarti optional
    address: string = "Jakarta"; // = berarti default value

    constructor(id: string, name: string) {
        //menggunakan this untuk mengacu pada field yang dimiliki class 
        // agar bisa diakses
        // Jika ada prop yang memiliki default value
        // maka tidak wajib diisi didalam constructor
        // sehingga bisa langsung diakses dari luar constructor
        this.id = id; 
        this.name = name;
    }
}