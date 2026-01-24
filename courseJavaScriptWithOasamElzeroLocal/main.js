// [==========================={EPsode[54]}==================]
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let index = 0;
// while (index < products.length) {
//   console.log(products[index]);
//   index++;

// }
// [==========================={EPsode[55]}==================]
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let index = 0;
// // while(false){
// //     console.log(products[index]);
// //     index++;
// // }
// do{
//     console.log(products[index]);
//     index++;
// }while(false);
// console.log(index);
// [==========================={EPsode[56]}==================]
// Loop Challenge
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia", // تم تغيير Samai إلى Samia لتطابق الصورة
//   "Anwar",
// ];

// let countAdmin = 0;

// // تحديد عدد المدراء (حتى كلمة Stop)
// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") break;
//   countAdmin++;
// }

// // طباعة العدد
// document.write(`<div>We Have ${countAdmin} Admins</div><hr>`);

// // إنشاء مصفوفات للموظفين حسب الحرف الأول مع الحفاظ على الترتيب
// let startNamA = [];
// let startNamO = [];
// let startNamS = [];

// for (let i = 0; i < myEmployees.length; i++) {
//   if (myEmployees[i].startsWith("A")) {
//     if (!startNamA.includes(myEmployees[i])) startNamA.push(myEmployees[i]);
//   } else if (myEmployees[i].startsWith("O")) {
//     if (!startNamO.includes(myEmployees[i])) startNamO.push(myEmployees[i]);
//   } else if (myEmployees[i].startsWith("S")) {
//     if (!startNamS.includes(myEmployees[i])) startNamS.push(myEmployees[i]);
//   }
// }

// // عرض كل فريق مع أعضائه
// for (let i = 0; i < countAdmin; i++) {
//   document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
//   document.write(`<h3>Team Members:</h3>`);

//   let teamMembers = [];
//   let n = 0;

//   // تحديد عدد الأعضاء لكل فريق حسب الترتيب في الصورة
//   if (i === 0) n = 3; // الفريق الأول: 3 أعضاء
//   else n = 2; // الفريق الثاني والثالث: 2 أعضاء

//   if (myAdmins[i].startsWith("A")) {
//     teamMembers = startNamA.slice(0, n);
//   } else if (myAdmins[i].startsWith("O")) {
//     teamMembers = startNamO.slice(0, n);
//   } else if (myAdmins[i].startsWith("S")) {
//     teamMembers = startNamS.slice(0, n);
//   }

//   // عرض أعضاء الفريق
//   teamMembers.forEach((member, index) => {
//     document.write(`- ${index + 1} ${member}<br>`);
//   });

//   document.write(`<hr>`);
// }

// // [==========================={EPsode[57-58]}==================]

// function sayHello (userName , age ){
//   if(age < 20 ){
//     console.log('App Is Not suitable For You ')
//   }else{
//       console.log(`Hello ${userName} Your age Is ${age }`);
//   }
// }

// sayHello("Oasma" , 40 );
// sayHello("abboud", 45 );
// sayHello("qasem",18);

// function generateYears(start , end , exclude){
//     for( let  i = start ; i <= end ;i++){
//         if( i === exclude){
//             continue;
//         }
//         console.log(i)
//     }
// }

// generateYears(2003, 2026 , 2020);
// [==========================={EPsode[59]}==================]

// function calc(num1, num2) {
//   return;
//   num1 + num2;
// }

// let result = calc(10, 30);
// console.log(result + 100);

// function generate(start , end ){
//     for(let i = start ; i <= end ;i++){
//         if(i=== 15){
//             return "Interruputing";
//         }
//         console.log(i);
//     }
// }

// generate(10 , 20);
// [==========================={EPsode[60]}==================]

// function sayHello(userName = "Unknown", age = "Unknown"){
//     // if (age === undefined){
//     //     age = "Unknown"
//     // }
//     // age = age || "age";
//     return  `Hello ${userName} Your age Is  ${age}`;
// }

// console.log(sayHello("abboud", 18));
// [==========================={EPsode[61]}==================]
// function calc(...numbers){
//     // console.log(Array.isArray(numbers));
//     let results = 0 ;
//     for(let i = 0 ; i < numbers.length;i++){
//         results += numbers[i] ; //results = results +  numbers[i] ;
//         // console.log(numbers[i]);
//     }
//     return `Final  Result Is ${results} `;

// }

// console.log(calc(10 , 20 , 30 , 40 , 50 , 50))
// [==========================={EPsode[62]}==================]
// function shwoInfo(us = "Un", ag = "Un", rt = 0, shwo = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h3>Welcom, ${us} </h3>`);
//   document.write(`<p>Age: ${ag}   </p>`);
//   document.write(`<p>Hour Rate: $${rt}   </p>`);
//   if (shwo === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills:
//     ${sk.join(" | ")}   </p>`);
//     } else {
//       document.write(`<p>Skills: No Skills    </p>`);
//     }
//   } else {
//    document.write(`Skills IS Hidden`);
//   }
//   document.write(`</div>`);
// }

// shwoInfo("Oasma", 38, 30, "no" ,"Html","CSS","JavaScript","Node.js","Express.js","React.js","Monogdb");
// [==========================={EPsode[63]}==================]
// --Create Function showDetails
// --Function Accept 3 Parameters [a , b , c]
// --Data Types For Info Is
// --String => Name
// --Number => Age
// --Boolean => Status
// Argument Is Random
// Data Is Not Sorted Output Depend On Data Types
// --Use Ternary Conditional Operator
// showDetails("Oasma", 38, true); //Hello Osama,Year Age Is 38 , You Are Available For Hire
// showDetails(38, "Oasma", true); //Hello Osama,Year Age Is 38 , You Are Available For Hire
// showDetails(true, 38, "Oasma"); //Hello Osama,Year Age Is 38 , You Are Available For Hire
// showDetails(false, "Oasma", 38); //Hello Osama,Year Age Is 38 , You Are Not Available For Hire
// [==========================={EPsode[64]}==================]
// function showDetails(Name, age, status) {
//   let nm = String(Name),
//     ag = Number(age),
//     st = Boolean(status);
//     console.log(nm , ag , st)
//   nm===Name && ag===age && st === true
//     ? document.write(`Hello ${Name}, Your Age Is ${age},You Are Available For Hire<br>`)
//     : document.write(`Hello ${Name}, Your Age Is ${age},You Are Not Available For Hire<br>`)
//      ag===age && nm===Name && st === true
//      ? document.write(`Hello ${Name}, Your Age Is ${age},You Are Available For Hire<br>`)
//      : document.write(`Hello ${Name}, Your Age Is ${age},You Are Not Available For Hire<br>`)
//    st === true && ag===age && nm === Name
//    ? document.write(`Hello ${Name}, Your Age Is ${age},You Are Available For Hire<br>`)
//    :document.write(`Hello ${Name}, Your Age Is ${age},You Are Not Available For Hire<br>`)
//     st === false &&  nm === Name && ag===age
//    ? document.write(`Hello ${Name}, Your Age Is ${age},You Are Available For Hire<br>`)
//    :document.write(`Hello ${Name}, Your Age Is ${age},You Are Not Available For Hire<br>`)

// }
// showDetails("Oasma", 38, true).sort().reverse();
// showDetails(38, "Oasma", true).sort().reverse();
// showDetails(true, 38, "Oasma");
// showDetails(false, "Oasma", 38);
// [==========================={EPsode[64]}==================]

// let calculator = function elzero(num1 , num2 ){
//     return  num1 + num2 ;
// }

// console.log(calculator(10, 20))
// function sayHello(){
//     console.log("Hello Abboud ");
// }
// document.getElementById("shwo").onclick =  sayHello;

// setTimeout(function (){
// console.log("Good");
// },2000);
// [==========================={EPsode[65]}==================]
// // Function
// --Function Inside Function
// --Return Function
//Exmaple 1
// function sayMessage(fName , lName ){
//     let message = `Hello`;
//     //Nested Function
//     function concateMsge(){
//         message = `${message} ${fName} ${lName}`;
//     }
//     concateMsge();
//     return message;
// }

// console.log(sayMessage("abboud", "qasem"));
//Exmaple 2
// function sayMessage(fName , lName ){
//     let message = `Hello`;
//     //Nested Function
//     function concateMsge(){
//     return `${message} ${fName} ${lName}`;
//     }

//     return   concateMsge();
// }

// console.log(sayMessage("abboud", "qasem"));
// Exmaple 3
// function sayMessage(fName , lName ){
//     let message = `Hello`;
//     //Nested Function
//     function concateMsge(){
//         function getFullName(){
//             return `${fName} ${lName}`;
//         }
//     return `${message} ${getFullName()} `;
//     }

//     return   concateMsge();
// }

// console.log(sayMessage("abboud", "qasem"));
// [==========================={EPsode[66]}==================]
// let print = function print (){
//     return 10 ;
// }
// console.log(print());

// print ()

// let print = _ => { في حالة متقدم هذه تعتبر arraow fun
//     return 10;
// }

// console.log(print())

// let print = num => num;

// let print =( num1 , num2 )=> num1 +num2 ;
// console.log(print(200,50));
// [==========================={EPsode[67]}==================]
// var a = 10 ;
// let b = 20 ;

// function showText () {
//     var a = 15 ;
// let b = 25 ;
// console.log(`Function - From Local ${a}`);
// console.log(`Function - From Local ${b}`);

// }
// console.log(`From Golbal ${a}`);
// console.log(`From Global ${b}`);

// showText();

// var x = 10

// if(10 === 10){
// //   let  x = 50 ;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Gloable ${x}`);

// [==========================={EPsode[69]}==================]
// let a = 20;
// function parent() {
//   let a = 10;
//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();
// [==========================={EPsode[70]}==================]
// Function Arrow Challenges

//[1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function(...args){
//     // Parameter ?
//     return args.map(name =>` [${name}]`).join(",") + "=> Done !";
// }
// console.log("// String", names("Osama","Mohamed","Ali","Ibrahim"));
// String [Osama],[Mohamed] ,[Ali] ,[Ibrahim] => Done !
// let names = (...args) =>{
//         return args.map(name =>` [${name}]`).join(",") + "=> Done !";

// }
// console.log("// String",names("Osama","Mohamed","Ali","Ibrahim"));

// ==================================
// [1] Replace ??? In Return Statement To Get Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20 , 50 , 10 , 60 ];

// let calc = (one , two , ...nums) => {return  one + two + Number(nums)};
// console.log(calc(10, 20 , 50));//80

// function  calc (one , two , ...nums){
//     return  one + two + Number(nums)
// }
// console.log(calc(10, 20 , 50));//80

// [==========================={EPsode[71]}==================]
// let myNums = [1,2,3,4,5,6];

// let newArrays = [];

// for(let i = 0; i < myNums.length;i++){
// newArrays.push(myNums[i] + myNums[i]);
// }

// console.log(newArrays);

// ame Ideas With Map

// let addSelf = myNums.map(function(element , index , arr){
//     // console.log(`Current Element => ${element}`);
//     // console.log(`Current Index => ${index}`);
//     // console.log(`Array => ${arr}`);
//     // console.log(`This  => ${this}`);

//     return element + element;
// }, 10);

// let addSelf = myNums.map((a) =>  a+a);
// console.log(addSelf  )
// function  addition(ele){
//     return ele + ele;
// }
// let add = myNums.map(addition);

// console.log(add);

// [==========================={EPsode[72]}==================]
// let swappingCases = "elZRo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz12er4o";

// // let sw = swappingCases.split("").map(function (ele){
// //     //condition ? True : False
// //     return  ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// // }).join("");

// // Arrow Function Version
// let sw = swappingCases
//   .split("")
//   .map((a) =>
//     //condition ? True : False
//     a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase(),
//   )
//   .join("");
// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);
// [==========================={EPsode[73]}==================]
//Get Friends With Name Start With A
// let friends = ["Ahmed", "Sameh","Sayed","Asmaa","Amgad","Israa"];

// let filterFirends =  friends.filter(function (firend){
// return  firend.startsWith("A");
// });

// console.log(filterFirends);

// //Get Even Numbers Only
// let numbers =[11,20,2,5,17,10];

// let evenNumbers  = numbers.filter(function(el){
//     return el%2=== 0 ;
// })
// console.log(evenNumbers);
// // Test Map Vs Filter

// let addMap = numbers.map(function (ele){
//     return ele + ele;
// })

// console.log(addMap);

// let addFilter = numbers.filter(function (ele){
//     return ele + ele;
// })

// console.log(addFilter);

// [==========================={EPsode[74]}==================]
//  Filter Words More Than 4 Characters
//  let sentence = "I Love Foood Too Playing Much";
//  let smallWords = sentence.split(" ").filter(function (el){
//     return el.length <= 4 ;
//  })

//  console.log(smallWords);

//  //Filter String + Multiply
//  let mix = "A13BS2ZX";

//  let filterst = mix.split("").filter(function ( el){
//     return ! isNaN(parseInt(el)).map(function (el){
//         return el * el;
//     })
//  }).join("");

//  console.log(filterst);

// [==========================={EPsode[75]}==================]
// let  nums = [10 , 20, 15 , 30 ];
// let add = nums.reduce(function (acc , current , index , arr){
//     console.log(`Acc ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(`Current Element Index ${index}`);
//     console.log(`Array => ${arr}`);
//     console.log(acc + current);
//     console.log(`################`);
//     return acc + current;
// },5)//initival value

// console.log(add);

// [==========================={EPsode[76]}==================]
// let theBiggest = ["Bla","Propaganda","Other","AAA","Battery","Test","Propagand_Two"];

//  let check = theBiggest.reduce(function (acc , current ){
//     console.log(`Acc ${acc}`);
//     console.log(`Current Element => ${current}`);

//     console.log(acc.length > current.length ? acc : current);
//     console.log(`################`);
//     return acc.length > current.length ? acc : current;

// })

//   console.log(check);

//   let removeChars = ["E","@","@","L","Z","@","@","E","R","@","O"];

//   let Finaltes = removeChars.filter(function (el){
//     return !el.startsWith("@");
//   }).reduce(function (acc , current){
//       return `${acc}${current}`;
//   })

//   console.log(Finaltes);
// [==========================={EPsode[77]}==================]

//   let allLis = document.querySelectorAll("ul li");
//   let allDivs = document.querySelectorAll("div");
//   allLis.forEach(function (ele) {
//     ele.onclick = function (){
//         allLis.forEach(function (ele){
//             ele.classList.remove("active");
//             //remove active class for all element
//         })
//         //Add Active Class To This Element
//        this.classList.add("active");
//     //    Hide All Divs
//     allDivs.forEach(function (ele){
//         ele.style.display  = "none";
//     })
//     }
//   })
//   console.log(allLis);
// [==========================={EPsode[78]}==================]
// {[Higher Order Functions Challenges]
// You Can Use
// Space
// True => 1 => One Time Only In The Code
// You Cannot Use
// Numbers
// Letters
// you Must Use [Filter + Map + Reduce +Your Knowledge]
// Order Is Not Important
// All In One Chain
// let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
// // let solution = '?????';
// let solution = myString.split("").filter( function (ele){
//     return  isNaN(ele) ;

// }).map(function (ele ){
//     return ele === ',' ? '' : ele === "_" ? " " : ele
// }).join("").slice(1 , 18)
// console.log(solution);//Elzero Web School
// [==========================={EPsode[79]}==================]
// let user = {
//   name: "abboud",
//   age: 24,
// //   Methods
//   sayHello: function () {
// return `Hello `;
//   },
// };

// console.log(`The Name ${user.name}
//     The Age : ${user.age}
//     The Function ${user.sayHello}`)

// [==========================={EPsode[80]}==================]

// let myVar = "country";
// let user = {
//   name: "abboud",
//   "country of": "Egypt",
//   country: "yemen",
//   //   Methods
// };

// console.log(user.name);
// console.log(user["name"]);
// console.log(user.country  );
// console.log(user.myVar); //user.country
// console.log(user[myVar  ]); //user.country
// [==========================={EPsode[81]}==================]
let available = true;
let user = {
  name: "abboud",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cair",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (this.available === true) {
      return `The Personal Is available
`;
    } else {
      return `The Persona Is Not available
`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user.addresses.egypt.two);
console.log(user["addresses"].egypt.two);
console.log(user["addresses"]["egypt"].two);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkAv());
