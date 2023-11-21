"use strict"

let products = [
    {prodId: 2, name: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, name: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, name: "Stapler", price: 12.79}
   ];


   //______________for name
    products.sort((a,b) => {
        if(a.name < b.name) return -1
        else if(a.name == b.name) return 0
        else return 1;
    });

    console.log(products);

    //________________for price

    products.sort((a,b) =>{
if( a.price < b.price) return -1
else if (a.price == b.price) return 0
else return 1;
    });

    console.log(products);
   