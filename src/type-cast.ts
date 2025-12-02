import { Employee, Manager, VicePresident } from "./polymorphism";

export function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) { // jika employee dibuat dari class VicePresident
        const vp = employee as VicePresident; // akan di konversi ke VicePresident
        console.info(`Hello VP ${vp.name}`);
    }
    else if (employee instanceof Manager){
        const mgr = employee as Manager;
        console.info(`Hello manager ${mgr.name}`);
    }
    else {
        console.info(`Hello Employee ${employee.name}`)
    }
}

//dengan syarat adalah posisi pengecekan harus di cek dari posisi yang paling bawah
//dengan kata lain posisi pengecekannya harus dari child yang paling bawah lalu naik ke parent
//dilakukan pengecekan terlebih dahulu agar aman jadi tidak serta merta langsung dikonversi


//Key Notes
//Mengapa kita mengurutkan dari clid paling bawah untuk pengecekannya?
//Hal ini dapat menyebabkan kesalahan konversi
//Pada kasus diatas jika kita menempatkan class Manager dahulu,
//ketika data yang dikirim adalah VicePresident maka akan berhenti di class Manager (akan bernilai true)
//karena VicePresident ini adalah turunan dari class Manager 
//sehingga otomatis VicePresident ini akan mengimplementasikan apa yang ada di Manager

//instanceof ini tidak hanya mengecek type class yang kita kirimkan
//tapi diakan akan mengecek sampai ke parent dari classnya