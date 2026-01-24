//global consle  Letter //
/*
Start With Letters ,underScore , $      
*/
// var myInput = document.getElementById("input"),

//     myDiv = document.getElementById("div"),

//     myCurrency = document.getElementById("currency");

//     myInput.onchange = function ()
//     {
//       myDiv.innerHTML =  "Worth "+myInput.value * myCurrency.value + "Yemen Pound " ;
//     }

// var friendOne = "Ahomed",

//     friendTwo = "Soha",

//     friendThree = "Hassan",

//     friendFour = "zahra" ,

//     friendsFive = "Hind" ;

//     var friends = new Array(
//       "Hassan",
//       "Soha",
//       "Ahmed",
//       "zahra",
//       "Hind",
//       "Raham",
//       "Mini",
//       "Kamal"
//     );
// //  console.log(friends);

//  var salaFriends = [
//   "Mahmoud",
//    "Hassan",
//    "Soha",
//    "Ahmed",
//    "zahra",
//    "Hind",
//    "Abdulmalek",
//    "Rala",
//    "Salah"
//  ] ;

// var specialFriends = salaFriends.indexOf("Rala",7);

// console.log(specialFriends);

// console.log(salaFriends[salaFriends]);

// document.getElementById("all").innerHTML =

//  "My Friends Are: "+salaFriends ;

//  document.getElementById("special").innerHTML =

//  "My Special Friends Is: " + "<span style='color:#F00'>" + salaFriends[specialFriends] +"</span>" ;
// var myMsg  = [
//     "Msg 2",//0 Index And 1 Length
//     "Msg 1",//1 Index And 2 Length
//     "Msg 4",//2 Index And 3 Length
//     "Msg 3",//3 Index And 4 Length

// ];
// var myNum =
// [
//   "One",
//   "Two"
// ];

// // console.log(myMsg);

// console.log(myMsg.lastIndexOf("Msg 4",-4));
// var myString = "I Love \"JavaScript\"";

// console.log(myString);

// console.log(typeof(myString));

// console.log(myString.length);

// var myNumber = 100 ;

// console.log(typeof(myNumber));

// var myNewNumber = toString(myNumber);

// console.log(typeof(myNewNumber));
/*
SubString : substring(Start [Required],End [Optional])

*/

// var myMainString = "I Love JavaScript And JSON",

//    mySubString = myMainString.slice(7,17);

//    console.log(myMainString);

//    console.log(typeof(myMainString));

//    console.log(mySubString);

//    console.log(typeof(mySplittedString));

// var myMainString = "I Love JavaScript And JSON And JavaScript  Is very Fun ",

//     myLenght     = myMainString.length ,

//     mySubString = myMainString.replace(/JavaScript/g, "PHP");

// console.log(myMainString);

// console.log(myLenght);

// console.log(mySubString);
// var myString = "I Love Programing Luaguages",

// mySearch = myString.link("http://www.google.com");

// console.log(myString);

// console.log(mySearch);
// var arrayname = ["Ahomed","Mohammed","Qasem","Omar"];
// var i ;

// for (i= 0; i < arrayname.length ; i += 1)
// {
//     console.log(arrayname[i]);
// }
// var myCar = {
//     color:"White",
//     type: "saden",
//     price:"50.0000",
//     model:"2017"
// }
// var prop ;
// for ( prop in myCar)
// {
//     if(myCar.hasOwnProperty(prop))
//     {
//         console.log(prop +" : "+ myCar[prop]);
//     }

// }
// var i=0 ;
// for(;;){
// if(i > 10 ) break;
// console.log(i)
// i+= 1;
// // }
// function generateYears(start,end)
// {
//     var Years ;
//     document.write("<select>");
//     for(Years = start ;Years <= end; Years++)
//         {

//     document.write("<option value=\""+ Years +"\">"+ Years + "</option>");

//        }

//     document.write("</select>");
// }
// generateYears(1900,2025);

// generateYears(1990,2025);

// generateYears(2000,2025);

// var j = 0 ;

// while(j <= 10 )
// {
//     if (j === 7)continue;
//     console.log("This Is While : "+j);
//     j++;
// }

// var y = 1;

// do {

//   if (y === 5) {
//     continue;
//   }
//     console.log("This Do while : "+y);
//     y++;
// }while(y <= 10 );

// var x , y ;
// MainLoop:
// for (y =1 ; y < 5 ; y++) {

//     ChildLoop:
//     for (x = 15 ; x < 20 ;x++){
// if (x === 15 ) {
//     continue ChildLoop;
// }

// console.log(y + " :=> : "+ x );
//     }
// }
// var x  = Math.random(),

//   myEndPattern = 20 ;

// console.log(Math.floor(x * myEndPattern)+ 1);
// var myString = "I Love Elazeeer weeeb Schoolee ",

//  mySearch = myString.replace(/e{2,}/g, "@");
/* 

*/
//  console.log(mySearch)
// var theDate = new Date("2025-4-31 10:5:55+04:00");

// console.log(theDate);

// var theDate = new Date(),

//  theIos = theDate.toTimeString();

//  console.log(theIos)

// /*
// ===================================================
// ========================[Eposide => 25 ]===========
// ===================================================
// */

// console.log(Math.round(1.5))
// console.log(Math.round(5.4))
// console.log(Math.floor(1.5))
// console.log(Math.ceil(1.5))
// console.log(Math.max(1.5 , 2 , 34 , 67 , 99 , 1000 ))
// console.log(Math.min(1.5 , 2 , 34 , 67 , 99 , 1000  , 6 , -100 ))
// console.log(Math.pow(4, 3))
// console.log(Math.random(4, 4))
// console.log(Math.trunc(4.99))

// ===================================================
// ========================[Eposide => 26 ]===========
// ===================================================

// //The Number Challenge
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
// ========================[Eposide => 27 ]===========
// ===================================================

// var theName = " Ahomed ";

// console.log(theName)
// console.log(theName[1])
// console.log(theName[5])

// console.log(theName.charAt(1))
// console.log(theName.charAt(5))

// console.log(theName.length)
// console.log(theName.trim())

// console.log(theName.toLowerCase());
// console.log(theName.toUpperCase());

// console.log(theName.trim().charAt(3).toUpperCase());

// ===================================================
// ========================[Eposide => 28 ]===========
// ===================================================

// let a = "Ahlomed Web School";
// console.log(a.indexOf("Web"));

// console.log(a.lastIndexOf("Web" ));

// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));

// console.log(a.slice(2,7));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(3));
// console.log(a.split("",6));

// ===================================================
// ========================[Eposide => 29 ]===========
// ===================================================
// let a = "Ahlomed Web School";

// console.log(a.length);
// console.log(a.substring(2, 6));

// console.log(a.substring(6, 2));
// console.log(a.substring(2, 6));
// console.log(a.substring(-10, 6));
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.substr(0, 5));
// console.log(a.substr(18));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 9));
// console.log(a.startsWith("A"));
// console.log(a.startsWith("A", 7))

// console.log(a.endsWith("e", 7))

// ===================================================
// ========================[Eposide => 30 ]===========
// ===================================================
/**
 String Challenge 
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
//  console.log(a.substr(0,6 )+ a.substr(10)); // Elzero School

//  //Solution Must Be Dynamic  And String May Change
//  console.log(a.charAt(0).toLowerCase() + a.slice(a.length - 17).toUpperCase() + a.charAt(a.length -1).toLowerCase()); // eLZERO WEB SCHOOl
// ===================================================
// ========================[Eposide => 31 ]===========
// ===================================================
// console.log(10 == "10");
// console.log(-100 == "-100");
// console.log(10 != "10");
// console.log(-100 != "-100");

// console.log(10 === "10");
// console.log(-100 === "-100");

// console.log(100 !== "100");

// console.log(10 > 20 );
// console.log(10 > 10);
// console.log(10 >= 20);

// console.log(10 < 20 );
// console.log(10 < 10);
// console.log(10 <= 20);

// console.log("Oasme" === "Ahomed")// the result false
// console.log(typeof "Oasme" ===typeof "Ahomed")// the result true
// [==========================={EPsode[32]}==================]
// console.log(true);
// console.log(!true);

// console.log(!(10 == "10"))
// console.log(10 == "10" && 10 > 8 && 10 > 50)

// console.log(10 == "10" || 10 > 8 ||10 > 50)

// [==========================={EPsode[33 && 34]}==================]

// let price = 100 ;
// let discount = false ;
// let discountAmount = 30 ;
// let country = "yemen";
// let student = true ;

// if(discount === true){
//     price -= discountAmount;// price =  price - discountAmount

// }else if(country === "yemen")
// {
//     if ( student === true ){
//    price -= discountAmount + 30 ;// price =  price - discountAmount
//     }else
//     {
//         price -= discountAmount ;
//     }

// } else if ( country === "Syria"){
//     price -= 30 ;
// }else{
//     price -= 10 ;
// }

// console.log(price)
// [==========================={EPsode[35]}==================]
// Conditional (Ternary) Operator
// let theName = "Mona";
// let theGender = "Female";
// let theAge = 60;
// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// let theResult = theGender === "Male" ? "Mr" : "Mrs";

// console.log(theResult);

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//     ? console.log("The Age 20 and 60 ")
//     : theAge > 60
//       ? console.log("Larger Than 60 ")
//       : console.log("Unknow");
// // [==========================={EPsode[36]}==================]

// console.log(Boolean(100))
// console.log(Boolean(-100))
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))

// let price = null;
// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);

// [==========================={EPsode[37]}==================]
// // If Challenge
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
// let day = "4";
// switch (day) {
//     default:
//     console.log("Unknown");break;
//   case 1:
//     console.log("Saturday");
//     break;
//   case 2:
//     console.log("Sunday");
//     break;
//   case 3:
//   case 4:
//     console.log("Monday");
//     break;

// }
// [==========================={EPsode[39]}==================]

// // Switch Challenge
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
// [==========================={EPsode[40]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed",["Marwan","Ali","Slie"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[0][0]}`);

// console.log(`Hello Array TWo Is ${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Abboud";
// console.log(myFriends);
// myFriends[3] = ["Gamal","Qasem","Hatem"];

// console.log(myFriends);
// myFriends[3]= "Saad";

// console.log(myFriends);

// let st = "";
// console.log(Array.isArray(myFriends))
// console.log(typeof st)

// [==========================={EPsode[41]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed","Marwan","Qasem","Slie"];
// console.log(myFriends.length)

// myFriends[myFriends.length - 1] = "Gamal";

// console.log(myFriends)

// console.log(myFriends.length)

// [==========================={EPsode[42]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed","Marwan","Qasem","Slie"];
// console.log(myFriends);

// myFriends.unshift("Hatem", "Alhomedy");

// console.log(myFriends);
// // myFriends.push("Hatem", "Alhomedy");

// console.log(myFriends);

// let firstE = myFriends.shift();
// console.log(`The First Name Is : ${firstE}`);

// let lastEl = myFriends.pop();
// console.log(`The Last Name Is : ${lastEl}`);
// console.log(myFriends);
// [==========================={EPsode[43]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed","Marwan","Ali","Slie","Ahomed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahomed"));

// console.log(myFriends.indexOf("Ahomed" , 2));

// console.log(myFriends.lastIndexOf("Ahomed"));

// console.log(myFriends.includes("Ahomed"));

// console.log(myFriends.includes("Ahomed",2));

// if(myFriends.indexOf("Ghalep") === -1){
//    console.log(`The Name Not found `);
// }

// console.log(myFriends.indexOf("Ghalep"));

// console.log(myFriends.lastIndexOf("Ghalep"));

// [==========================={EPsode[44]}==================]
// let myFriends = [10 ,"Ahomed","Mohamed","Sayed","Marwan","Ali","Slie","Ahomed","90",1000 , 100 , 20, "10", -10 , -20];

// console.log(myFriends);

// console.log(myFriends.sort())

// console.log(myFriends.sort().reverse())

// console.log(myFriends.reverse())

// [==========================={EPsode[45]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed","Marwan","Ali","Slie","Ahomed"];

// console.log(myFriends);

// console.log(myFriends.slice());

// console.log(myFriends.slice(1,3));

// console.log(myFriends.slice(-5 , -2));

// myFriends.splice(1, 2 , "Samer", "Samara");

// console.log(myFriends);

// [==========================={EPsode[46]}==================]
// let myFriends = ["Ahomed","Mohamed","Sayed","Marwan","Ali","Slie","Ahomed"];
// let myNewFriends = ["saad","samar","sameh"];
// let SchoolFirends = ["Haytham","Shady"];

// console.log(myFriends);

// let allFirends = myFriends.concat(myNewFriends , SchoolFirends , "Gamal",[1,2 , 3]);

// console.log(allFirends);

// console.log(myFriends.join(""));
// console.log(myFriends.join(" @ "));
// console.log(myFriends.join("|"));
// console.log(myFriends.join("|").toUpperCase());
// [==========================={EPsode[47]}==================]
// Array Challenges
// [==========================={EPsode[48]}==================]

// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }
// [==========================={EPsode[49]}==================]
// let myFriends = [1,2 ,"Ahomed","Mohamed","Sayed","Marwan","Ali","Slie","Ahomed"];
// let onlyNames = [];
// if(typeof myFriends[0] === "string"){
// onlyNames.push(myFriends[0]);
// }
// if(typeof myFriends[1] === "string"){
// onlyNames.push(myFriends[1]);
// }
// if(typeof myFriends[2] === "string"){
// onlyNames.push(myFriends[2]);
// }
// if(typeof myFriends[3] === "string"){
// onlyNames.push(myFriends[3]);
// }
// console.log(onlyNames)
// for(let i = 0 ; i < myFriends.length;i++){
//     if(typeof myFriends[i] === "string"){
//         onlyNames.push(myFriends[i])
//     }
// }
// console.log(onlyNames);
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// for (let i = 0 ; i < myFriends.length; i++){
//     console.log(myFriends[i])
// }
// [==========================={EPsode[50]}==================]
// let product =  ["Keyboard","Mouse","Pen","Pad","Monitor"];
// let  colors = ["Red", "Green","Black"];
// let models  =[2020, 2026];

// for(let i = 0 ; i < product.length ; i++){
//     console.log("#".repeat(15));
//     console.log(`# ${product[i]}`);
//     console.log("#".repeat(15));
//     console.log("Colors: ");
//     for (let j = 0 ; j < colors.length ; j++){
//         console.log(`-- ${colors[j]}`);
//     }
//      console.log("Models: ");
//     for(let k = 0 ; k < models.length ; k++){
//         console.log(`-- ${models[k]}`)
//     }
// }
// [==========================={EPsode[51]}==================]
// let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// mainLoop: for (let i = 0; i < product.length; i++) {
//   console.log(`# ${product[i]}`);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`--- ${colors[j]}`);
//     if (colors[i] === "Green") {
//       break mainLoop;
//     }
//   }
// }
// [==========================={EPsode[52]}==================]
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let i = 0 ; 
// for(; ; ){
   
//     console.log(products[i]);
//      i += 2;//  i++;
//      if (i === products.length) break;
// }


// [==========================={EPsode[53]}==================]
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let  colors = ["Red", "Green","Black"];
// let showCount = 2;

// document.write(`Show ${showCount} Products`);

// for(let i = 0; i< showCount ; i++){
//       document.write(`<div>`);
//       document.write(`<h3>[${i+1}] ${products[i]}</h3>`);
//       for(let j = 0 ; j < colors.length;j++){
//         document.write(`<p> ${colors[i]} </p>`);
//       }
//        document.write(`<p> ${colors.join(" | ")} </p>`);
//       document.write(`</div>`);
// }
// // [==========================={EPsode[54]}==================]
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



// [==========================={EPsode[57-58]}==================]

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

// [==========================={EPsode[60]}==================]

// function sayHello(userName = "Unknown", age = "Unknown"){
//     // if (age === undefined){
//     //     age = "Unknown"
//     // }
//     // age = age || "age";
//     return  `Hello ${userName} Your age Is  ${age}`;
// }

// console.log(sayHello("abboud", 18));
// [==========================={EPsode[60]}==================]

// function sayHello(userName = "Unknown", age = "Unknown"){
//     // if (age === undefined){
//     //     age = "Unknown"
//     // }
//     // age = age || "age";
//     return  `Hello ${userName} Your age Is  ${age}`;
// }

// console.log(sayHello("abboud", 18));

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

