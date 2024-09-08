//a. Data types
//sting:
let games = "Mobile Legends";
let name = "Ricone";

//Number ni ha:
let length =12;
let width =20;

//Boolean ni ha:
let x = true;
let y = false;

//Object ni:
const bebe = {Firstname:"Uziah", Lastname:"Nillas"};
const bekog = ["Ha","Haplas"];

//b. Arithmetic and Logical Operators
//Addition
let add = 2 + 10;

//Subtraction
let sub = 4 - 2;

//Multiplication
let mul = 10 * 2

//Division
let div = 8 / 2;

//Exponentiation
let exp = 7 == 2;

//Modulu
let mod = 8 % 2;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 80;
if(number >= 79){
    mahal = "tayo na";
}else{
    mahal = "Ay wag na pala"
}
console.log(mahal);

//i.switch
let z = 2 % 2;
switch (z){
    case 0:
        woah = "Even"
        break;
        case 1:
            woah = "Odd"
            break;
            default:
                woah = "No Value"
}
console.log(woah);

//d.loops
//i. For
for(let a = 0; a < 5; a++){
    console.log(a);
}

//ii. For in
const besti = ["meme", "momo", "mama"];
let best = "";
for(let c in besti){
    best += besti[c];
    console.log(besti);
}

//iii. For of
const names = ["rick", "Berth", "Boboy"];
let namo = "";
for(let m of names){
    namo += m;
    console.log(m);
}

//iv. For While
let j = 0;
while(j < 8){
j++;
console.log(j);
}

//e. Functional Programming
//i.Odd or Even
let i = 0;
while(i < 5){
    i++;
    let l = i % 2;
    switch (1){
        case 0:
            Wew = "Even"
            break;
            case 1:
                Wew = "Odd"
                break;
                default:
                    Wew = "No value"
    }
    console.log(i + "."+i+ "is" + Wew);
}

//i.determine prime numbers
let nums = 24;
if(nums == 0 || nums ==1){
    let flag = true;
}
for(let p = 2; p <= nums / 2; p++){
    if(nums % p == 0){
        flag = true;
        break;
    }
}
if(!flag){
    console.log(nums + "is prime");
}else{
    console.log(nums + "is not prime");
}

//iii. determine a string if it is a palindrome

function isPalindrome(meow){
    let j = meow.length - 1
    for (let i = 0; i < meow.length / 2; i++ ){
        if (meow[i] != meow[j]){
            return false;
        }
        j--;
    }
    return true;
}

let meow1 = "cici";
let meow2 = "coco";
let meow3 = "caca";

console.log(isPalindrome(meow1));
console.log(isPalindrome(meow2));
console.log(isPalindrome(meow3));

        


