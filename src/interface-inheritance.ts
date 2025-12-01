export interface HasName{
    name:string;
}
//apabila ingin menggunakan interface HasName, silahkan membuat class
//yang mengimplementasikan interface HasName dengan properti name

export interface CanSayHello{
    sayHello(name:string):void;
}
//apabila ingin menggunakan interface CanSayHello, silahkan membuat class
//yang mengimplementasikan interface CanSayHello dengan method sayHello
//dalam kontraknya/interfacenya kita cukup mendefinisikan nama,parameter dan return valuenya
//tanpa harus mengimpelementasikan bodynya
//bodynya akan diimplementasikan di class yang mengimplementasikan interface tersebut

