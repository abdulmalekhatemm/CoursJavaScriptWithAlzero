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