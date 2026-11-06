//console.log("hii");

//const
//var
//let


// {
//     var customerName = "saman";
//     let address = "walana";

//     console.log(address);
// }

// console.log(customerName);
// console.log(address);

// const address = "walana";
// address = "panadura"

// const numbers = [10, 20, 30];
// console.log(numbers);
// numbers ="hee";

// console.log(numbers);

// function getCalValue(){
//     let txtValue = document.getElementById("txtUserInput").value;
//     let calVal = eval(txtValue);
//     document.getElementById("lblDisplay").innerText = calVal;
// }

// const numbers = [10, 15, 12, 50, 53, 11, 36, 40, 100];
// console.log(numbers[6]);

// numbers[numbers.length-1] = 100;

// console.log(numbers);

// numbers.push(90);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// console.log(numbers.toReversed()); 

// console.log(numbers.toSorted());

// console.log(numbers.length);

// numbers.unshift(500);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

//  console.log(numbers.indexOf(36));

// function replaceNumber(){

//     let oldNum = document.getElementById("oldNumber").value;
//     let newNum = document.getElementById("newNumber").value;

//     let index = numbers.indexOf(Number(oldNum));

//     numbers[index] = newNum;

//     console.log(numbers);

//     // document.getElementById("oldNumber").value = newNum;
    
// }

// ---------------------------step 01

// function getSum(num1, num2){
//     return num1 + num2;

// }

// ------------------------------step 02

// let getSum = function(num1, num2){
//     return num1 + num2;

// }

// ---------------------------------step 03

// let getSum = (num1, num2) =>{
//     return num1 + num2;

// }

// -----------------------------------step 04

// let getSum = num1 =>{
//     return num1;

// }

// -------------------------------------step 05

// let getSum = num1 => num1;

// console.log(getSum(10, 20));

//---------------------------------------------

// const nameList = ["saman","kamal","sunil","wimal"];

// nameList.forEach(cName=> console.log(cName));

// let funLoop = (cName)=>{
//     console.log(cName);
    
// }
// nameList.forEach(funLoop);

// nameList.forEach(cName=> console.log(cName));

// nameList.forEach((cName)=>{
//     console.log(cName);
// });

// for( let cName of nameList)
//     console.log(cName);

// const empSalary = [75000,30000,25000,90000,150000];

// empSalary.forEach(eSalary=>console.log(eSalary*2));

// console.log(empSalary.map(salary=>salary*2));

// const newSalaryAr = empSalary.map(salary=>salary*2);
// console.log(newSalaryAr);

// const newNameAr = nameList.map(name=> " Welcome " + name );
// console.log(newNameAr);

const productList = [
    {
        id:1,
        name:"Bun",
        price:350,
    
    },
    {
        id:2,
        name:"Car",
        price:750,
    },
    {
        id:3,
        name:"Milk",
        price:820,
    },
    {
        id:4,
        name:"Rice",
        price:1280,
    },
    
]

const newAr = productList.map(product=>({product,price:product.price*1.15}));
console.log(newAr);












    










