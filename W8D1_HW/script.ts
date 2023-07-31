/*
Question #1
Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  
*/

type CTStudent = {
    id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

console.log(student1, student2, student3);

/* 
Question #2
Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  
If there is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annotate the return type of the function  
*/

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

function checkColor(a: Fruit | null): void {
    if(a){
        console.log(a.color);
    } else {
        console.log("You ate my fruit already");
    }
}
checkColor(apple);
checkColor(eaten);

/*
function checkColor(a: Fruit | null): void {
    if(a === null){
        console.log("You ate my fruit already");
    } else {
        console.log(a.color);
    }
}
checkColor(apple);
checkColor(eaten);
*/

/* 
Question #3
Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type 
*/
type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string,
}

type Ebook = Book & DigitalBook;
let americanAnimals:Ebook = {isbn: "9781684424504", title: "American Animals: A True Crime Memoir", author: "Erik Borsuk", fileType: "https://www.barnesandnoble.com/w/american-animals-eric-borsuk/1132516488?ean=2940172631092"}
console.log(americanAnimals);

//let Ebook: Book | DigitalBook;
//Ebook = {isbn: "9781684424504", title: "American Animals: A True Crime Memoir", author: "Erik Borsuk"}
//console.log(Ebook);

/* 
Question #4
Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures
- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
After Creating the `ShopItem` type create 3 items using this type 
*/

enum Category {
    shirt = 'Shirt', 
    shoes = 'Shoes', 
    pants = 'Pants', 
    hats = 'Hat', 
    other = 'Other', 
    socks = "Socks", 
    cup = "Re-useable Water Bottle",
    hoodie = "Hoodie",
    bodysuit = "Bodysuit",
    journal = "Journal",
    case = "Phone Case",
    mug = "Coffee Mug",
    accessory = "Accessory",
    bag = "Carrier"
}

type ShopItem = {
    readonly id: number,
    price: number,
    size: string,
    description: string,
    color?: string,
    category: Category,
    keywords: string[]
}

let newShirt: ShopItem = {
    id: 20,
    price: 16.85,
    size: "M",
    description: "The jersey short sleeve curved-hem tee is made from 100% Airlume combed and ring-spun cotton. This superior fabric makes for an incredibly soft, yet durable garment. Furthermore, the premium cotton is a wonderful surface to print on; the inks come out vividly. These garments are preshrunk for improved fitting. The sides have seams.",
    color: "navy",
    category: Category.shirt,
    keywords: ['Coding Temple', 'coding', 'javascript', 'cool shirt', 'CT Logo', 'tear-away label', '100% cotton']
}

let newHoodie: ShopItem = {
    id: 29,
    price: 39.48,
    size: "L",
    description: "The classic comfy zip-up, featuring air-jet spun yarn for a softer fleece with reduced pilling. Once put on, it will be impossible to take off.",
    category: Category.hoodie,
    keywords: ['Coding Temple', 'coding', 'Python', 'hoodie', 'CT Logo', "awesome swag", 'zip-up']
}

let newMug: ShopItem = {
    id: 5,
    price: 11.42,
    size: "11oz",
    color: "black",
    description: "This custom two-tone mug is here to accommodate all your favorite pick-me-up elixirs in style. Its durable ceramic build is microwave & dishwasher safe, as is any printing that goes on to these mugs. These custom dual-color mugs are available in 2x sizes: 11oz and 15oz, as well as in 3x different color schemes: white with red inside, white with pink inside, and white with black inside.",
    category: Category.mug,
    keywords: ['Coding Temple', 'coding', 'mug', "coffee mug" , 'Coding Temple Logo', "coffee", "dishwasher safe", "c-handle", "ORCA Coating"]
}
console.log(newShirt);
console.log(newHoodie);
console.log(newMug);