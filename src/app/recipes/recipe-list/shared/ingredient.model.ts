// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// or the shortcut >>>


export class Ingredient {
    constructor(public name: string, public amount: number) {}
}
export class Product {
    constructor(public id: string, public title: string, public price: number, public stock: number) {}
}


