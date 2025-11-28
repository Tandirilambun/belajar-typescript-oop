import {Category} from "../src/setter-getter"

describe('Setter and Getter', () => {
    it('it should purpose Setter and Getter', () : void => {
        const cat : Category = new Category();
        console.log(cat.name);
        
        //method setter untuk set properties _name dengan value "Ten"
        cat.name = "Food";

        //akan error karena properties name di set private
        // const name = cat._name;

        //method getter untuk mengambil nilai 
        console.log(cat.name);

        // cat.name = "";
        // console.log(cat.name);
    })
});