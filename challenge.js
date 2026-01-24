//The Number Challenge [1]
// let a = 1_00;
// let b = 2_00.5 ;
// let c = 1e2 ;
// let d = 2.4 ;
// //Find Smallest Number In All Variables And Return Integer 
// console.log(Math.trunc(Math.min(a , b , c ,d )))

// //Use  Varible a + d One Time To Get  The Nedded Output 

// console.log(Math.trunc((a + b) + 9700 ))

// //Get Integer "2" From d varible with 4 Methods 

// console.log( ` The Way One   `+ Math.trunc(d))
// console.log( ` The Way Two   `+ Math.floor(d))
// console.log( ` The Way Three `+ Math.round(d))
// console.log( ` The Way Four  `+ Math.ceil(d -1 ))

// //Use Varibler b + d Get This Value 

// console.log((b + d )- 136); //66.67 string
// console.log(Math.trunc((b + d) - 136 )); //66.67 Number 


// ===================================================
// ========================[Eposide => 30 ]===========
// ===================================================
/**
 String Challenge  [2]
 All Solutions Must Be In One Chain 
 You Can Use Concatenate 
 * 
 */

//  let a = "Elzero Web School";
//  //Include This  Methods In Your Soulution [slice , chartAt]


//  console.log(a.charAt(2).toUpperCase()+ a.slice(3,6));// Zero

//  // 8 H 
  
//  console.log(a.slice(13, 14).repeat(8).toUpperCase()); // HHHHHHH

//  //Return Array 
//  console.log(a.slice(0,6).split()); // [Elzero ]

//  //Use Only substr Method + Template Literals In Your Sloution 
//  console.log(`${a.substr(0,6)} ${a.substr(11)}`);
 // Elzero School 

//  //Solution Must Be Dynamic  And String May Change
//  console.log(a.charAt(0).toLowerCase() + a.slice(a.length - 17).toUpperCase() + a.charAt(a.length -1).toLowerCase()); // eLZERO WEB SCHOOl 


// [==========================={EPsode[37]}==================]
// If Challenge
// let a = 10;
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40 ");
// } else {
//   console.log("Unknowm");
// }
// //Write With Ternary If Syntax
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//     ? console.log("10 To 40 ")
//     : a > 40
//       ? console.log("> 40")
//       : console.log("Unknown");

// let st = "Elzero Web School";
// if (st.replace("????") === st.replace("34")) {
//   console.log("Good");
// }

// // let start = String(st.includes("W") ) ;
// // // console.log(st.indexOf("W") )
// // // console.log(typeof("w"))
// // // console.log(typeof(start))
// if (typeof String(st.startsWith("W")) ===typeof "W"){
//     console.log(`The Start W: `+"Good");
// }


// if (typeof "????" === typeof"string"){
//     console.log("Good");//true
// }

// if (typeof "????"===typeof "number"){
//     console.log("Good");//true
// }

// if ( st.slice(0,6).repeat(2)=== "ElzeroElzero"){
//     console.log("Good");
// }


// [==========================={EPsode[38]}==================]

// [==========================={EPsode[39]}==================]
// Switch Challenge
// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(`The Salary Is ${salary}`);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(`The Salary Is ${salary}`);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(`The Salary IS ${salary}`);
//     break;
//   default:
//     salary = 4000;
//     console.log(`The Salary Is ${salary}`);
// }

// // If Challenge
// let holidays = 0;
// let money = 0;
// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Meney Is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Meney Is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Meney Is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Meney Is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Meney Is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Meney Is ${money}`);
//     break;
// }

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Meney Is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My Meney Is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Meney Is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Meney Is ${money}`);
// } else if (holidays === 0) {
//   money = 0;
//   console.log(`My Meney Is ${money}`);
// } else {
//   money = 0;
//   console.log(`My Meney Is ${money}`);
// }
// [==========================={EPsode[47]}==================]
// // Array Challenges
// let zero = 0 ;
// let counter = 3 ;
// let my =["Ahmed","Mazero","Elham","Osama","Gamal","Ameer","Elzero"];
// let myName = "Elzero";
// //write code Here 
// let namOne   = my.slice(zero,counter).reverse();
// let namTwo   = my.slice(counter,++counter);
// // let namThree = my.slice(3,4);
// console.log(namTwo.concat(namOne)); //["Osama","Elham","Mazero","Ahomed"]

// console.log(my.slice(++zero,counter).reverse()); //["Elham","Mazero"]

// console.log(myName);//"Elzero"

// console.log(myName.slice(counter)); //"ro"

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