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
// let available = true;
// let user = {
//   name: "abboud",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cair",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (this.available === true) {
//       return `The Personal Is available
// `;
//     } else {
//       return `The Persona Is Not available
// `;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.addresses);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt);
// console.log(user.addresses.egypt.two);
// console.log(user["addresses"].egypt.two);
// console.log(user["addresses"]["egypt"].two);
// console.log(user["addresses"]["egypt"]["one"]);
// console.log(user.checkAv());
// [==========================={EPsode[82]}==================]
// Object
// Create With New Keyword new object();

// let user = new Object({
//   age: 20
// });

// console.log(user);

// user.age = 38 ;
// user["country"] = "Yemen";

// user.sayHello = function (){
//   return `Hello`
// }

// console.log(user);
// console.log(user.age);
// console.log(user.country);

// console.log(user.sayHello());
// [==========================={EPsode[83]}==================]

// let user = new Object({
//   age: 24 ,
//   ageInDays: function () {
//     console.log(this )
//     return this .age * 365;
//   }
// });

// console.log(user.age);
// console.log(user.ageInDays())

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);

// console.log(this.myVar);

// function sayHello(){
//   console.log(this);
// }

// sayHello();

// console.log(sayHello() === window())

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// [==========================={EPsode[84]}==================]
// let user ={
//   age: 20 ,
//   doubleAge: function () {
//     // console.log(this )
//     return this.age * 2 ;
//   }
// }
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge())
// console.log(this);
// let obj = Object.create({});

// obj.a = 100 ;

// console.log(obj);

// let copyObj  = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// [==========================={EPsode[85]}==================]
// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 1,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100  ,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject , obj1 , obj2);
// finalObject.prop1 = 200 ;
// finalObject.prop2 = 4 ;
// console.log(finalObject);

// let newObject = Object.assign({},obj1 ,{prop5: 5 , prop6: 6});

// console.loj(newObject);
// [==========================={EPsode[86]}==================]
// let myIdElement  = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElements = document.getElementsByClassName("my-span");
// let myQueryElements = document.querySelector("#my-div");
// let myQueryAllElements = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElements);
// console.log(myQueryElements);
// console.log(myQueryAllElements[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);
// [==========================={EPsode[87]}==================]
// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "no images";
// document.images[0].title = "picture";
// document.images[0].id = "picture";
// document.images[0].className = "img  ";

// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("href","https://twitter.com");
// myLink.setAttribute("title","Twitter");

// [==========================={EPsode[88]}==================]

// console.log(document.getElementsByTagName("p"[0].attributes))
// let myP = document.getElementsByTagName("p")[0];

// if(myP.hasAttribute("data-src")){
//   if(myP.getAttribute("data-src") === ""){
//     myP.removeAttribute("data-src");
//   }
//   else
//   {
//     myP.setAttribute("data-src", "New Value");
//   }
//   // myP.removeAttribute("data-src");
// }else
// {
//   console.log(`Not Found`);
// }

// if(myP.hasAttributes()){
//   console.log(`Has Attributes `);
// }

// if(document.getElementsByTagName("div")[0].hasAttributes()){
//   console.log(`Has Attributes    non`);
// }else
// {
//   console.log(`Div Attribues Has Not Attributes `);
// }

// [==========================={EPsode[89]}==================]

// let myElement = document.createElement("div");
// let myAttr =  document.createAttribute("data-custom");
// let myText  = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");
// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test","Testing");
// // ِAppend Text To Element
// myElement.appendChild(myText);

// // Apppend Comment To Element
// myElement.appendChild(myComment);

// // Append Element To Body
// document.body.appendChild(myElement);
// console.log(myElement);

// [==========================={EPsode[90]}==================]

// for(let i = 0 ; i < 100;i++){
//     let myMainElement = document.createElement("div");
// let myHeading = document.createElement("H3");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode(`Product Title ${i+1}`);
// let myParagraphText = document.createTextNode(`Product Description ${i+1}`);

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element

// myMainElement.appendChild(myHeading);

// // Add Paragraph

// myMainElement.appendChild(myParagraphText);

// myMainElement.appendChild(myParagraph);

// myMainElement.className = "producto";

// // append child to
// document.body.appendChild(myMainElement);
// }
// [==========================={EPsode[91]}==================]
// let myElement = document.querySelector("div");

// console.log(myElement);

// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);
// console.log(myElement.firstChild);
// console.log(myElement.lastChild);
// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);
// [==========================={EPsode[92]}==================]
// let myBtn = document.getElementById("btn");

// myBtn.onmousedown = function () {
//   console.log("clicked");
// };

// window.onresize = function () {
//   console.log("scroll");
// };
// [==========================={EPsode[93]}==================]

// let userInput = document.querySelector("[name='username'");
// let ageInput = document.querySelector("[name='age'");

// console.log(userInput);

// document.links[0].onmouseenter = function (event){
//     console.log(event);
//     event.preventDefault();
// }

// document.forms[0].onsubmit = function (e) {
//     let userValid = false ;
//     let agevalid = false ;
//     // console.log(userInput.value);
//     // console.log(userInput.value.length);
//     if(userInput.value !== "" && userInput.value.length <= 10){
//         userValid = true;
//     }
//      if(ageInput.value !== ""){
//         agevalid = true ;
//     }
//     if (userValid === false || agevalid === false ){
//         e.preventDefault();
//     }

// }
// [==========================={EPsode[94]}==================]
// let one = document.querySelector(".one");

// let two = document.querySelector(".two");

// window.onload  =  function () {
//     two.focus();
// }

// one.onblur = function () {
//     document.links[0].click()
// }
// [==========================={EPsode[95]}==================]
// let element = document.getElementById("my-div");

// console.log(element.classList);

// console.log(typeof element.classList);

// console.log(element.classList.contains("osama"));

// console.log(element.classList.contains("show"));

// console.log(element.classList.item("2"));

// // console.log(element.classList.add("add-one" , "add-two"));

//  element.onclick = function () {
//     element.classList.toggle("show")
//  }

// [==========================={EPsode[96]}==================]

// let myDivStyle = document.getElementById("my-div");

// myDivStyle.style.color = "red";
// myDivStyle.style.fontWeight = "bold";

// myDivStyle.style.cssText = "font-weight: blod ; color: green; opacity:0.9";

// myDivStyle.style.removeProperty("color");

// myDivStyle.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rule[0].style.removeProperty("line-height");

// document.styleSheets[0].cssRules[0].style.setProperty(
//   "background-color",
//   "red",
//   "important",
// );
// console.log(
//   document.styleSheets[0].cssRules[0].style.setProperty(
//     "background-color",
//     "red",
//   ),
// );

// [==========================={EPsode[97]}==================]
// let element = document.getElementById("my-div");
//  let createdP = document.createElement("p");


//  element.prepend(createdP );

// element.remove();

// [==========================={EPsode[98]}==================]
// let span = document.querySelector(".two");

// console.log(span.parentElement);//main div 

// span.oncclick = function () {
//     span.parentElement.remove();
// }

// [==========================={EPsode[99]}==================]
// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");
// myP.id =  `${myP.id}-clone`;
// myDiv.appendChild(myP);
// [==========================={EPsode[100]}==================]

// let myP = document.querySelector("p");

// myP.onclick = one;
// function one(){
//     console.log("Message From onClick 1");
// }

// function  two(){
//     console.log("Message From onClick 2");

// }

// window.onload = "abboud";

// myP.addEventListener("click", function (){
//     console.log("Message From onClick 1 Event ");
// })

// // myP.addEventListener("click", function (){
// //     console.log("Message From onClick 1 Event ");
// // })

// myP.addEventListener("click", one);
// myP.addEventListener("click",two);

// myP.addEventListener("click","String"); //Error 

//  myP.onclick = function () {
//     let newP = myP.cloneNode(true);
//     newP.className = "clone";
//     document.body.appendChild(newP);
//  }

// //  let cloned = document.querySelector(".clone"); //Error 

// //  cloned.onclick = function () {
// //     console.log("Img Cloned ");
// //  };


// document.addEventListener("click", function (e){
//     if(e.target === "clone"){
//         console.log("I am Cloned");//e.target العنصر الذي ضغط علية 
//     }
// })
// [==========================={EPsode[101]}==================]
// const script = document.currentScript;

// // ---- HEADER ----
// let header = document.createElement("header");

// let logo = document.createElement("div");
// logo.textContent = "Elzero";

// // القائمة
// let ulMenu = document.createElement("ul");
// const menuItems = ["Home", "About", "Service", "Contact"];
// menuItems.forEach(item => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   ulMenu.appendChild(li);
// });

// // إضافة logo و ul داخل header
// header.appendChild(logo);
// header.appendChild(ulMenu);
// script.before(header);

// // ---- CSS Header ----
// header.style.display = "flex";
// header.style.justifyContent = "space-between";
// header.style.alignItems = "center";
// header.style.padding = "5px 40px";
// header.style.marginTop ="-6px";
// header.style.marginRight ="-6px";
// header.style.marginLeft ="-6px";

// header.style.backgroundColor = "#fff";
// header.style.borderBottom = "1px solid #ddd";

// // Logo
// logo.style.fontWeight = "bold";
// logo.style.fontSize = "24px";
// logo.style.color = "#27ae60"; // اللون الأخضر للشعار

// // القائمة
// ulMenu.style.listStyle = "none";
// ulMenu.style.display = "flex";
// ulMenu.style.gap = "20px";
// ulMenu.style.margin = "0";
// ulMenu.style.padding = "0";

// Array.from(ulMenu.children).forEach(li => {
//   li.style.cursor = "pointer";
//   li.style.fontWeight = "500";
//   li.style.color = "#555"; // لون القائمة رمادي مثل الصورة
// });

// // ---- MAIN GRID ----
// let main = document.createElement("main");
// script.before(main);

// main.style.display = "grid";
// main.style.gridTemplateColumns = "repeat(3, 1fr)";
// main.style.gap = "20px";
// main.style.padding = "40px";

// // إنشاء المنتجات من 1 إلى 15
// for (let i = 1; i <= 15; i++) {
//   let product = document.createElement("div");
//   product.style.backgroundColor = "#fff";
//   product.style.border = "1px solid #ddd";
//   product.style.borderRadius = "5px";
//   product.style.padding = "40px 0";
//   product.style.textAlign = "center";
//   product.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
//   product.style.fontFamily = "Arial, sans-serif";

//   let number = document.createElement("h2");
//   number.textContent = i;
//   number.style.margin = "0";
//   number.style.fontWeight = "normal";

//   let label = document.createElement("p");
//   label.textContent = "Product";
//   label.style.margin = "5px 0 0 0";
//   label.style.fontSize = "12px";
//   label.style.color = "#999";

//   product.appendChild(number);
//   product.appendChild(label);
//   main.appendChild(product);
// }

// // ---- FOOTER ----
// let footer = document.createElement("footer");
// footer.textContent = "Copyright 2021";
// script.before(footer);

// // CSS Footer
// footer.style.backgroundColor = "#27ae60"; // أخضر مطابق للشعار
// footer.style.color = "#fff";
// footer.style.textAlign = "center";
// footer.style.padding = "20px";
// footer.style.marginTop = "40px";
// footer.style.fontWeight = "bold";
// footer.style.fontSize = "16px";
// [==========================={EPsode[102-103]}==================]

// window.console.log("welcom yel")
// window.document.title = "Hello JS ";

// alert("Thi alert ")
// console.log("This Is Window Can Be ");

// let comfirMsg = confirm("Are You Sure ?");

// // console.log(comfirMsg);

// if (comfirMsg === true){
//   console.log("Item Deleted ");
// }else{
//     console.log("Item Not Deleted ");

// }




// let promptMsg = prompt("Good Day To You?","Write Day 3 Characters ");

// console.log(promptMsg);


// [==========================={EPsode[104]}==================]

// setTimeout(function () {
//   console.log(`Msg `)
// }, 3000);



// setTimeout(sayHello, 3000 , "abboud" , 24);


// function sayHello ( user , age ){
//   console.log(`I am Message  ${user} Has Age Is: ${age}`);
// }


// let countru = setTimeout(sayMsg, 3000 );


// // console.log(countru);

// function sayMsg (  ){
//   console.log(`I am Message  `);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(countru);
// }
// [==========================={EPsode[105]}==================]
     
// setInterval(function (){
//   console.log(`Msg`)
// },1000);


// setInterval(sayMsg , 100 , "Oasam", 38);

// function sayMsg(user ,  age ){
//   console.log(`I am Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown (){
//   div.innerHTML -= 1 ;
//   if (div.innerHTML === "0")
//   {
// clearInterval(counter);
//   }
  
// }

// let counter = setInterval(countdown , 1000);
// [==========================={EPsode[106]}==================]

// console.log(location.href);
// location.href = "https://google.com"; هذا ما تستبدا enter  من hostry  
// location.href = "/#sec02";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

// location.replace()


// location.assign()

// // [==========================={EPsode[107]}==================]
// setTimeout( function () {
//     window.open("https://google.com","_self","width=400,height=400,left=200,top=200");
// },2000)

// [==========================={EPsode[108]}==================]

// console.log(history);

// [==========================={EPsode[109]}==================]
// let myNewWindow = window.open("https://google.com","","width=500,height=500");


// window.scrollTo({
//     left: 500 ,
//     top: 200,
//     behavior:"smooth"
// })
// [==========================={EPsode[110]}==================]

// console.log(window.screenX === window.pageXOffset);

// let btn  = document.querySelector("button");

// window.onscroll =  function () {
//     if(window.scrollY >= 600){
//         // console.log(`Scrolling Y Value Is ${window.scrollY}`);
//         btn.style.display = "block";
//     }else
//     {
//         btn.style.display = "none";
//     }
// }

// btn.onclick =  function () {
//     window.scrollTo({
//         left: 0 , 
//         top: 0 ,
//         behavior: "smooth"
//     })
// }

// [==========================={EPsode[111]}==================]
// window.localStorage.setItem("color","#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage['fontSize'] = '20px';


// //get 
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// //remove  one

// // window.localStorage.removeItem("color");


// // //Remove All 

// // window.localStorage.clear();

// // Get Key 
// console.log(window.localStorage.key(0))
// //set Color In Page 

// document.body.style.backgroundColor =  window.localStorage.getItem("color");
// console.log(window.localStorage);
// console.log( typeof window.localStorage)
// [==========================={EPsode[112]}==================]
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// // window.localStorage.clear()
// if(window.localStorage.getItem("color")){
//     // If There Color In LOcalStorage 
//     // [1] Add Color To Div 
//         exp.style.backgroundColor = window.localStorage.getItem("color");
//     //    [2] Remove Active FRom class FRom All Lis 
//        lis.forEach((li)=>{
//             li.classList.remove("active");
//         });
//         // [3]Add Active Class To Current Color 
//         document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }
// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         // Remove Active Class From all Lis 
//         lis.forEach((li)=>{
//             li.classList.remove("active");
//         });
//         // Add Active Class To Cureent Element 
//         e.currentTarget.classList.add("active");
//         // Add Current Clor To Local Storage 
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     //    Change Dive Background Color 
//     exp.style.backgroundColor = e.currentTarget.dataset.color ;
//     })
// })
// [==========================={EPsode[113 ]}==================]
// window.localStorage.setItem("color","red");
// window.sessionStorage.setItem("color","blue");

// document.querySelector(".name").onblur = function () {
//     // console.log(this.value);
//     // no exceute 
//     // window.localStorage.setItem("input-name", this.value);
//     window.sessionStorage.setItem("input-name", this.value)
// }
