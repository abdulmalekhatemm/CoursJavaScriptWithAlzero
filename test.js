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
// [==========================={EPsode[113]}==================]
// window.localStorage.setItem("color","red");
// window.sessionStorage.setItem("color","blue");

// document.querySelector(".name").onblur = function () {
//     // console.log(this.value);
//     // no exceute 
//     // window.localStorage.setItem("input-name", this.value);
//     window.sessionStorage.setItem("input-name", this.value)
// }

// [==========================={EPsode[114]}==================]
// Challenges
// get Data From Input And Set In LocalStorage

//Wait For The Loading Tje Page
// document.addEventListener("DOMContentLoaded",()=>{
// // Get The Input For The Fileds
// const tascInput = document.querySelector(".input");
// const addTasc   = document.querySelector(".add");
// const theContainer = document.querySelector(".container");

// // add Tasc

// addTasc.addEventListener("click",addTascFunc );

// // Fuction To Add Tasc
// function addTascFunc(event){

//     event.preventDefault();
//     if(tascInput.value !== ""){
//         // Create The Main Dive For Container The Value
//         const mainDiv = document.createElement("div");
//         mainDiv.classList.add("tasc-box");

//         // create The Element For Put Value in It
//         const textp = document.createElement("p");
//         // textp.textContent = tascInput.value;

//         // Save Tasc In Local Storage
//         window.localStorage.setItem("tasc",JSON.stringify(tascInput.value));
//         // Get Tasc From Local Storage
//         textp.textContent = window.localStorage.getItem("tasc");
//         textp.classList.add("text-tasc");

//         // Create Delete Button
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.classList.add("delete-tasc");

//         // Add Event Listener To The Deleted Button
//         deleteButton.addEventListener("click", deleteTascFunc);

//         // Append The P To The Main Dive
//         mainDiv.appendChild(textp);
//         // Append The Deleted Button
//         textp.appendChild(deleteButton);
//         // Append The Main Dive To The Container
//         theContainer.appendChild(mainDiv);

//         // clear The Input Filed
//         tascInput.value = "";
//     }

// }
// // Function To Save Tasc In Local Storage
// function deleteTascFunc(event){
//     const deleteButton = event.target.parentElement;

//         // Remove The Parent Element
//         deleteButton.remove();

// }

// });
// =========================================================
// document.addEventListener("DOMContentLoaded", () => {
//     const tascInput = document.querySelector(".input");
//     const addTasc = document.querySelector(".add");
//     const theContainer = document.querySelector(".container");

//     // تحميل المهام عند بدء التشغيل
//     loadTasks();

//     addTasc.addEventListener("click", addTascFunc);

//     function addTascFunc(event) {
//         event.preventDefault();
//         const taskText = tascInput.value.trim();
//         if (taskText !== "") {
//             // عرض المهمة في الواجهة
//             displayTask(taskText);
//             // حفظ المهمة في localStorage
//             saveTaskToLocalStorage(taskText);
//             // مسح حقل الإدخال
//             tascInput.value = "";
//         }
//     }

//     function displayTask(taskText) {
//         // إنشاء العناصر لعرض المهمة
//         const mainDiv = document.createElement("div");
//         mainDiv.classList.add("tasc-box");

//         const textp = document.createElement("p");
//         textp.textContent = taskText;
//         textp.classList.add("text-tasc");

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.classList.add("delete-tasc");
//         deleteButton.addEventListener("click", deleteTascFunc);

//         // التجميع: وضع النص وزر الحذف داخل الحاوية الرئيسية
//        textp.appendChild(deleteButton);
//         mainDiv.appendChild(textp);

//         // mainDiv.appendChild(deleteButton);
//         theContainer.appendChild(mainDiv);
//     }

//     function deleteTascFunc(event) {
//         // تصحيح الخطأ الإملائي: استخدم event.target وليس event.traget
//         const taskItem = event.target.parentElement; // الحاوية الرئيسية (mainDiv)
//         const taskText = taskItem.querySelector(".text-tasc").textContent;

//         // حذف من الواجهة
//         taskItem.remove();

//         // حذف من localStorage
//         removeTaskFromLocalStorage(taskText);
//     }

//     function saveTaskToLocalStorage(task) {
//         // جلب المهام الحالية من localStorage (مصفوفة)
//         let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         // إضافة المهمة الجديدة
//         tasks.push(task);
//         // حفظ المصفوفة المحدثة
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function removeTaskFromLocalStorage(taskToRemove) {
//         // جلب المهام الحالية
//         let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         // تصفية المهمة المراد إزالتها
//         tasks = tasks.filter(task => task !== taskToRemove);
//         // حفظ المصفوفة المحدثة
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function loadTasks() {
//         // جلب المهام من localStorage
//         const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         // عرض كل مهمة
//         tasks.forEach(task => {
//             displayTask(task);
//         });
//     }
// });
// [==========================={EPsode[115]}==================]

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let myFirednds = ["Ahmed","Sayed","Ali","Maysa"];

// [a="ali",b, c, d , e = "oasam"] = myFirednds;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// console.log(e);
// [==========================={EPsode[116]}==================]
// let title = "Elzero";
// let desc  = "Elzero Web School";
// let markup =`<div class="card">
// <div class="child">
// <h>${title}</h>
// <p> ${desc} </p>
// </div>
// </div>
// `;

// console.log(markup);
// document.body.innerHTML = markup;
// [==========================={EPsode[117]}=================]
// let book ="Video";
// let Video = "Book";

// // Save Book in satch
// let satch = book ;

// // Change Book Value
// book = Video ;//

// // Change Video Value To Book
// Video = satch ;
// [book , Video ]  = [Video , book];

// console.log(`Book Is ${book}`);
// console.log(`Video Is ${Video}`);
// [==========================={EPsode[118]}=================]
// let user = {
//     theName: "abboud",
//     theAge: 24,
//     theTitle:"Developer",
//     theCountry:"Yemen",
// }

// console.log(user);
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);
// let  theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;
// console.log("###########################");
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

//  ({theName , theAge , theTitle , theCountry } = user);

//  const {theName ,  theTitle , theCountry } = user ;
// console.log("###########################");

// console.log(theName);

// console.log(theTitle);
// console.log(theCountry);

// [==========================={EPsode[119]}=================]

// let user = {
//     theName: "abboud",
//     theAge: 24,
//     theTitle:"Developer",
//     theCountry:"Yemen",
//     Color:"Block",
//     Skills:{
//         html: 70 ,
//         css: 80 ,
//         JS: 90
//     }
// }

//  const {theName:n  ,  theTitle:t  , theCountry: tc ,Color:C = "Red" , Skills:{html , css:cs }, } = user ;
// console.log("###########################");

// console.log(n);
// console.log(t);
// console.log(tc);
// console.log(C);
// console.log(`The HTML  SkilProgress Is ${html}%`);
// console.log(`The CSS   SkilProgress Is ${cs}%`);

// const {html:skillsOne ,css:skillsTwo } = user.Skills;

// console.log(`The HTML  SkilProgress Is ${skillsOne}%`);
// console.log(`The CSS   SkilProgress Is ${skillsTwo}%`);
// [==========================={EPsode[120]}=================]
// let users = {
//   theName: "abboud",
//   theAge: 24,
//   theTitle: "Developer",
//   theCountry: "Yemen",
//   Color: "Block",
//   Skills: {
//     html: 70,
//     css: 80,
//     JS: 90,
//   },
// };

// showDetails(users);

// function showDetails(obj) {
//   console.log(`Your Name IS ${obj.theName}`);
//   console.log(`Your Age IS ${obj.theAge}`);
//   console.log(`Your CSS Skills  IS ${obj.Skills.css}%`);
// }

// function showDetails({theName:n , theAge:a , Skills:{html:h , css: cs},}= users) {
//   console.log(`Your Name IS ${n}`);
//   console.log(`Your Age IS ${a}`);
//     console.log(`Your HTML Skills  IS ${h}%`);
//   console.log(`Your CSS Skills  IS ${cs}%`);
// }
// [==========================={EPsode[121]}=================]
// let user = {
//   theName: "abboud",
//   theAge: 24,
//   skills: ["HTML", "CSS", "JS"],
//   address: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [one, two, three],
//   address: { egypt: e },
// } = user;

// console.log(`Your Name Is ${n}`);
// console.log(`Your Age Is ${a}`);
// console.log(`Your Live In  Is ${e}`);
// console.log(`Your Skills Is One : ${one}`);
// console.log(`Your Skills Is Two : ${two}`);
// console.log(`Your Skills Is Three : ${three}`);
// [==========================={EPsode[122]}=================]
// Destructuring
// --Challenge
// The Method One
// let chosen = 2;
// let myFirends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahomed", age: 24, available: false, skills: ["Python", "Django"] },
//   { title: "abboud", age: 33, available: false, skills: ["PHP", "Laravel1"] },
// ];

// console.log(myFirends[0].skills[length - 1]);

// if (chosen === 1) {
//   let {
//     title: t,
//     age: a,
//     available: av,
//     skills: [s1, s2],
//   } = myFirends[0];
//   console.log(t);
//   console.log(a);
// ;
//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//     console.log(s2)
// }
// else if (chosen === 2) {
//   let {
//     title: t,
//     age: a,
//     available: av,
//     skills: [s1, s2],
//   } = myFirends[1];
//   console.log(t);
//   console.log(a);

//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//     console.log(s2);
// }
// else if (chosen === 3) {
//   let {
//     title: t,
//     age: a,
//     available: av,
//     skills: [s1, s2],
//   } = myFirends[2];
//   console.log(t);
//   console.log(a);
//   console.log(s2);
//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//    console.log(s2);
// }

// =============================================

// // The Method One
// let chosen = 3;
// let myFirends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahomed", age: 24, available: false, skills: ["Python", "Django"] },
//   { title: "abboud", age: 33, available: false, skills: ["PHP", "Laravel1"] },
// ];

// // console.log(myFirends[0].skills[length - 1]);
// let {
//   title: t,
//   age: a,
//   available: av,
//   skills: [s1, s2],
// } = myFirends[chosen - 1];
// if (chosen === 1) {
//   console.log(t);
//   console.log(a);
//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//   console.log(s2);
// } else if (chosen === 2) {
//   console.log(t);
//   console.log(a);

//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//   console.log(s2);
// } else if (chosen === 3) {
//   console.log(t);
//   console.log(a);
//   console.log(s2);
//   // console.log(s2);
//   if (av === true) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//   console.log(s2);
// }
// ==========================================================

// // The Method One
// let chosen = 3;
// let myFirends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahomed", age: 24, available: false, skills: ["Python", "Django"] },
//   { title: "abboud", age: 33, available: false, skills: ["PHP", "Laravel1"] },
// ];

// // console.log(myFirends[0].skills[length - 1]);
// let {
//   title: t,
//   age: a,
//   available: av,
//   skills: [,lastSkills],
// } = myFirends[chosen - 1];

// console.log(t);
// console.log(a);
// console.log(av ===true ? "Available" : "Not Available");
// console.log(lastSkills);

// [==========================={EPsode[123]}=================]
// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");
// console.log(myData);
// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(`The Has Letter A Is : ${myUniqueData.has("A".toUpperCase())}`);
// console.log(myUniqueData);
// console.log(myUniqueData.size);
// console.log(myData[0]);
// console.log(myUniqueData[0]);

// myUniqueData.clear();
// console.log(myUniqueData);
// [==========================={EPsode[124]}=================]
// Data Type

// let mySet = new Set([1, 1, 1, 2, 4, "A", "A"]);

// console.log(mySet);
// // Values + Keys [Alias For Values ]
// let iterator = mySet.keys();
// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));
// console.log("#".repeat(20));
// // Type  Of  Data

// let myws = new WeakSet([{A: 1  , B:   2}]);

// console.log(myws);

// weakset use cases
// [==========================={EPsode[125]}=================]
// let myObject =  Object();
// let myEmptyObJects =  Object.create(null);
// let myMap  = new Map();

// console.log(myObject);
// console.log(myEmptyObJects);
// console.log(myMap);
// let myNewObjects = {
//     10:"Number",
//     "10":"String",
// };
// console.log(myNewObjects[10]);
// // let myNewMap = {
// //     10:"Number",
// //     "10":"String",
// // };
// myMap.set(10,"Number");
// myMap.set("10","String");
// myMap.set(true,"Boolean");
// myMap.set({a:1,b:2,m:3},"object");
// console.log(myMap.get(10));
// console.log(myMap.get("10"));

// console.log(myNewObjects);
// console.log(myMap);

// [==========================={EPsode[126]}=================]

// let myMap = new Map([
//     [10, "Number"],
//     ["Name", "String"],
//     [false, "Boolean"]
// ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.size);
// console.log(myMap.delete("Name"));
// console.log(myMap.size);

// // myMap.clear();
// console.log("#".repeat(10));
// console.log(myMap.has(false));
// console.log("#".repeat(10));
// console.log(myMap.size);
// [==========================={EPsode[127]}=================]

// let mapUser = {themName:"Elzero"};

// let myMap =  new Map();

// myMap.set(mapUser , "Object Value");

// mapUser = null;  //Override The Reference

// console.log(myMap);
// [==========================={EPsode[128]}=================]

// console.log(Array.from("abboud"));
// console.log(Array.from("123456", function (n) {
//     return +n + +n;
// }));

// console.log(Array.from("123456",  (n) => +n + +n));

// let myArray  =[1,1,1,2,3,4];

// let mySet = new Set(myArray);

// // console.log(mySet);

// // console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); //Future

// // function  testArgs (){
// //     return  arguments;
// // }

// // console.log(testArgs("Osama","Ahomed","sayad"));
// function  af (){
//     return  Array.from(arguments);
// }

// console.log(af("Osama","Ahomed","sayad" ,1,2,3,4));
// [==========================={EPsode[129]}=================]
// 1/4
// from(iterable: Iterable<any> | ArrayLike<any>): any[]
// An iterable object to convert to an array.

// Creates an array from an iterable object.

// let myArray = [10,20,30,40,50,"A","B"];

// // myArray.copyWithin(3); //[10, 20, 30, 10, 20, 30, 40]

// // myArray.copyWithin(4,6); //[10, 20, 30, 40, 'B', 'A', 'B']

// // myArray.copyWithin(4,-1); //[10, 20, 30, 40, 'B', 'A', 'B']

// // myArray.copyWithin(4,-2); //[10, 20, 30, 40, 'A', 'B', 'B']

// myArray.copyWithin(1,5,6);
// console.log(myArray);
// [==========================={EPsode[130]}=================]
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// let myNumbers = 5;

// //    let check = nums.some(function(e) {
// //     console.log("Test");
// //     return e > 5;
// //    })

// let check = nums.some(function (e) {
//   console.log(this);
//   return e > this;
// }, myNumbers);

// //   let check = nums.some((e) =>  e > 5);

// console.log(check);

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 2));

// let range = {
//     min: 10 ,
//     max: 20
// };

// let checkNumberInRange = nums.some(function (e){
//     // console.log(this.min);
//     // console.log(this.max);
//     return e >= this.min && e <= this.max;
// },range);

// console.log(checkNumberInRange);
// [==========================={EPsode[131]}=================]
// let locations = {
//     20:"Place 1",
//      30:"Place 2",
//       10:"Place 3",
//        40:"Place 4",
// };

// let mainLocation = 2 ;

// let locationsArray  = Object.keys(locations);

// let locationsArrayNumber = locationsArray.map((n)=> +n);

// console.log(locationsArray);

// console.log(locationsArrayNumber);

// let checkEvery = locationsArray.every(function (e) {
//     return e > this;
// }, mainLocation);

// console.log(checkEvery);
// [==========================={EPsode[132]}=================]

//Spread with string  => Expand String
// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);
// //Concatenate Arrays
// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];

// console.log(allArrays);
// //Copy Array
// let copiedArray = [...myArray1];

// console.log(copiedArray);
// //Push Inside Array

// let allFriends = ["Osama", "Ahomed", "Ali", "Abboud"];
// let thisYearFireds = ["Mammhed", "abb ali", "sama", ""];

// allFriends.push(...thisYearFireds);

// console.log(allFriends);
// //Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];

// console.log(Math.max(...myNums));

// //Spread With Objects => Merge Objects
// let objOne = {
//   a: 1,
//   b: 2,
// };

// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });

// [==========================={EPsode[133]}=================]
/* Map And Set + What You Learn => Challenge 
 Requirements 
 ---You Cant Use Numbers Or True Or False 
 ---Dot Use Array Indexes 
 ---You Cant USe Loop
 ---You Cant Use Any Higher Order  Function 
 ---Only One Line Solution  Inside Console 
 ---If You Use Length => Then Only In Calculation
 --Hints 
 ---You Can Use * Operator  Only In Calculation 
 --Set 
 --Spread Object Methods 

*/
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(Math.sqrt([...new Set(n1)].length * [...new Set(n1)].length) )
// console.log(new Set(n2))
// console.log(--n2.length);  //210

// console.log(`Your Solution Here ${([n1[0] * n2[1]])}`);
// console.log(`Your Solution Here ${([n1.length * n2.length])}`);
// console.log(`Your Solution Here Pow : ${([Math.pow((--n2.length) ,(--n2.length))])}`);
// console.log(`Your Solution Here Set : ${[...new Set (n1)].length * Math.pow([...new Set(n2)].length,[...new Set(n2)].length)}`);

// console.log(
//   Math.pow([...new Set(n1)].length, [...new Set(n2)].length) *
//     Math.pow([...new Set(n1)].length, [...new Set(n2)].length),
// );

// console.log([...new Set(n1)][length]);
// console.log([...new Set(n1.length)]);

// console.log([...new Set(n1)].length * Math.pow([...new Set(n2)].length, [...new Set(n2)].length));

// console.log()

// // console.log([...new Set(n2).size] )

// console.log(Math.pow([...new Set(n1)].length * [...new Set(n2)].length));
// [==========================={EPsode[134]}=================]
// let str1 = '10 20 100 10000 5000';
// let str2 = 'Os1 Os2 Os123 Os1234 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.as';

// let ip = '192.168.2.1'; //IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org';
// let url = 'http://www.elzero.org/';
// let url = 'http://.elzero.org';
// let url = 'https:www.elzero.org/';
// let url = 'https:www.elzero.org/?facebookid=fdskjfhdskfh';
// [==========================={EPsode[135]}=================]
// {[Regular Expression
// let myString =  "Hello Elzero Web School I Love elzero";
// let regex = /elzero/ig;

// console.log(myString.match(regex));

// [==========================={EPsode[136]}=================]

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(org|info|io)/ig;

// console.log(tld.match(tldRe));

// let nums = "12345678910";

// let numsRe  = /[0-2]/g;

// console.log(nums.match(numsRe));

// let notNums = "12345678910";

// let notNsRe  = /[^0-2]/g;

// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%78910";

// let specialNumsRe  = /[^0-9]/g;

// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1  Os1Os Os2Os  Os2 Os8 Os8Os";

// let practiceRe  = /Os[5-9]Os/g;

// console.log(practice.match(practiceRe));
// [==========================={EPsode[137]}=================]
// let myString = "AaBbcdefG1234!234%^8*";
// let atozSmall = /[a-z]/g;
// let NotAtoZSmall = /[^a-z]/g;
// let atoZCoptial = /[A-Z]/g;
// let NotatoZCoptial = /[^A-Z]/g;
// let AndBAndC = /[ace]/g;
// let NotAndBAndC = /[^ace]/g;
// let LetterCaptialAndSmall = /[a-zA-Z]/g;
// let numsAndSpcial = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtoZSmall));
// console.log(myString.match(atoZCoptial));
// console.log(myString.match(AndBAndC));
// console.log(myString.match(NotAndBAndC));
// console.log(myString.match(LetterCaptialAndSmall));
// console.log(myString.match(numsAndSpcial));
// console.log(myString.match(specials));
// [==========================={EPsode[138]}=================]
// [Regular Expression
// Character Classes
// .  => matches any Character , except newline or other line terminators
// \w => matches word characters. [a-z,A-Z,0-9 And Underscore]
// \w => matches Non word character
// \d => match digits from 0-9
// \D => match non-digit characters
// \s => matches whitespace character
// \S => matches non whitespace character
// (RegExp - Character Classes Part 1)

// let email =  'O@@@@g...com  O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot   = /./g;
// let word  = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));
// [==========================={EPsode[139]}=================]
// Regular Expression
// RegExp-Character Classes Part 2
// Character Classes
// \b => matches at the beginning or end of a word
// \B => matches Not at the beginning/end of a word
// Test Method
// pattern.test(input)

// let names ="sayad 1Spam 2Spam 35Spam Spam4 spam5  Osama Ahomed  Aspam";

// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(/(\bspam|spam\b)/ig.test("Oasam"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));
// [==========================={EPsode[140]}=================]
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";//All Emails
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));
// let nums ="0110 10 150 05120 0560 350 00";//0 Numbers Or No
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));
// let urls ="https://google.com http://www.website.net web.com";//http + https
// let urlsRe = /https?:\/\/(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));

// [==========================={EPsode[141]}=================]

// Regular Expression
// Quantifiers
// n{X}     => Number Of
// n{X,Y}   => Range
// n{X}     => At Least X

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); //S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); //S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); //S[At Least Four Number]S

// [==========================={EPsode[142]}=================]
// Regular Expression
// Quantifiers
// $   => End With Something
// ^   => Start With Something
// ?=  => Followed By Something
// ?!  => Not Followed By Something

// let myString = "We Love Programing";
// let names = "1Osamaz 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(myString));
// console.log(/^\d/ig.test(myString));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));

// [==========================={EPsode[143]}=================]
// [Regular Expression
// --rplace
// --replaceAll
// ]
// let txt = "We Love Programing And @ Because @ Is Amazing";

// console.log(txt.replace("@","JavaScript"));
// console.log(txt.replaceAll("@","JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re,"JavaScript"));
// console.log(txt.replaceAll(/@/ig,"JavaScript"));

// [==========================={EPsode[144]}=================]
// Regular Expression
// ---Input form Validation Practice
// document.getElementById("register").onsubmit = function () {
//     let phoneInput = document.getElementById("phone").value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let Validation = phoneRe.test(phoneInput);

//  if(Validation === false){
//     return false;
//  }
//     return true;
// }
// [==========================={EPsode[145]}=================]

// Digital Fortress || https://www.regexplib.com/  =>موقع يعطي RegExpress
// Unitiented Pattern ||  https://regex101.com/    =>يختبار موقع RegExpress
// [==========================={EPsode[146]}=================]
// Regular Expression
// ---Challenge
// let urlsRe = /https?:\/\/(www.)?\w+.\w+/ig;

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// // let re = /https?:\/\/(www. |)?\w+.\W+.\w+./ig;
// let re = /.+/ig;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

// [==========================={EPsode[147]}=================]
//OOP Introduction
// [==========================={EPsode[148]}=================]
// Constructor Function

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary;
// };

// let userOne = new User(100 , "abboud", 5000);
// let userTwo = new User(101 , "qasem", 6000);
// let userThree = new User(102 , "hatem", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log("#".repeat(20));
// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log("#".repeat(20));

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);


// const userOne = {
//   id: 100,
//   username: "abboud",
//   salary: 5000,
// };
// const userTwo = {
//   id: 101,
//   username: "Qasem",
//   salary: 5000,
// };
// const userThree = {
//   id: 102,
//   username: "Hatem",
//   salary: 5000,
// };
// [==========================={EPsode[149]}=================]

// Constructor Function 
// --New Syntax

// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//     }
// };

// let userOne = new User(100 , "abboud", 5000);


// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log("#".repeat(20));


// console.log(userOne instanceof  User);
// console.log(userOne.constructor === User);
// [==========================={EPsode[150]}=================]
// Constructor Function
// ---Deal With Properties
// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username || "Unknow";
//         this.s = salary < 500 ? salary + 500 : salary;
//         this.msg = function (){
//             return `Hello ${this.u} Your Salar Is : ${this.s}`;
//         }
//     }
//     //Methods 
//     writeMsge (){
//                     return `Hello ${this.u} Your Salar Is : ${this.s}`;

//     }
// };

// let userOne = new User(100 , "abboud", 5000);
// let userTwo = new User(100 , "abboud", 5000);

// console.log(`\n Id  :  ${userOne.i} 
//              Name   :  ${userOne.u}
//              Salary : ${userOne.s}
//              Massage : ${userOne.msg()}
//              Massage : ${userOne.writeMsge()}`);

// console.log("#".repeat(20));
// console.log(`             Id     :  ${userTwo.i}
//             Name   :  ${userTwo.u}
//              Salary :  ${userTwo.s}
//              Massage:  ${userTwo.msg} 
//               Massage:  ${userTwo.writeMsge}`);//msg and writeMsge are  Native Code 
// [==========================={EPsode[151]}=================]

// [==========================={EPsode[152]}=================]
// Class
// --Static Properties And MethodsClass
// --Static Properties And Methods

// class User {
//     // Static Proper
//     static count  = 0 ;
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//   static sayHello() {
// return  ` Hello From Class`;
//   }
//   static  countMembers() {
//     return `${this.count} Members Count`;
//   }
// }
// let userOne = new User(100, "abboud", 5000);
// let userTwo = new User(101, "Ahomed", 5000);
// let userThree = new User(102, "Saad", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(userOne.u);
// console.log(User.sayHello())
// console.log(User.count);
// console.log(User.countMembers());

// [==========================={EPsode[153]}=================]
// Class
// ---Inheritance
// Parent Class
// class User {
//   // Static Proper

//   constructor(id, username) {
//     this.i = id;
//     this.u = username;

//   }
//   sayHello() {
//     return ` Hello From Class ${this.u}`;
//   }
// }

// // Derived Class
// // مستند خصائص من الكلاس الاخري
// class Admin extends User{
//   constructor(id, username, premission) {
//  super(id , username );
//     this.p = premission;
//   }

// }
// class SuperMain  extends  Admin {
//     constructor(id , username , premission , ability){
//         super(id , username , premission );
//         this.p = premission;
//     }

// }

// let userOne = new User(100, "abboud", 5000);
// let adminOne =  new Admin(110, "Mahmoud",1);

// console.log(userOne.u);
// console.log(userOne.sayHello());

// console.log("#######");

// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

// [==========================={EPsode[154]}=================]
/* Class Encapsulation
---Class Field Are Public By Default 
---Guards The Data Against Illagal Access 
---Helps To Achieve The Target WithOut Revealing Its Complex Details 
---Will Reduce Human Flexible And Manageable 
---Simplifies The App 
*/

// class User {
// //   Private Perperty
// #e ;

//   constructor(id, username , eSalary) {
//     this.i  = id;
//     this.u  = username;
//     this.#e = eSalary;
//   }
//   getSalary (){
//     return  parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "abboud", "5000 Gneh");

// console.log(userOne.u);
//  console.log(userOne.getSalary()  * 0.3 );

// [==========================={EPsode[155]}=================]
// Prototype
//  ---Introduction
// ---Prototypes are the mechanism by JavaScript Objects
// ---inhert Features From one another

// class User {
// //   Private Perperty

//   constructor(id, username ) {
//     this.i  = id;
//     this.u  = username;

//   }
//   sayHello(){
//     return   `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "abboud");

// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Elzero";

// console.log(String.prototype);
// [==========================={EPsode[156]}=================]
// Prototype
// ---Add To Prototype Chain
// ---Extend Bulit In Constrructors Features

// class User {
// //   Private Perperty

//   constructor(id, username ) {
//     this.i  = id;
//     this.u  = username;

//   }
//   sayHello(){
//     return   `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "abboud");

// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne)

// User.prototype.sayWelcome = function (){
//     return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// String.prototype.addDotBeforeAndAfter = function (val){
//     return `.${this}.`;
// }

// let myString = "Elzero";
// [==========================={EPsode[157]}=================]
// Object Meta Data  And Descriptor
// ---Writable
// ---enumerable
// ---Configural [Cannot Delete Or Reconfigure

// const myObject = {
//     a: 1,
//     b: 2
// };

// Object.defineProperty(myObject, "c",{
//     writable: false,
//     enumerable: true ,
//     configurable: true,
//     value: 3 ,
// });

// myObject.c = 100 ;

// console.log(delete myObject.c);

// for(let prop in myObject){
//     console.log(prop , myObject[prop]);
// }
// console.log(myObject);

// console.log(myObject);
// [==========================={EPsode[158]}=================]
// const myObject = {
//     a: 1,
//     b: 2
// };

// Object.defineProperties(myObject ,{
//     c:{
//         configurable:true ,
//         value: 3,
//     },
//      d:{
//         configurable:true ,
//         value: 4,
//     },
//      e:{
//         configurable:true ,
//         value: 5,
//     },
// });

// console.log(Object.getOwnPropertyDescriptor(myObject,"d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));
// [==========================={EPsode[159]}=================]
// [Data And Time
// ---Data Constructor
// --Static Methods
// ---Data.now()
// --To Track Time You Need Starting Point
// --Epoch Time Or Unix Time In Computer Science Is The Number Of Seconds Since January 1,1970.
// --Why 1970 [829 Days To 136 Years]
// Search For
// Year 2038 Propblem in Computer Science
// https://www.timeanddate.com/ =>.[website For Time]
// ]

// let dateNow =  new Date();

// console.log(dateNow);
// console.log(Date.now());//1000 Mill = 1 Second

// let seconds = Date.now() / 1000 ;//Number Of Second

// console.log(`The Seconds : ${seconds}`);

// let minutes = seconds / 60 ;

// console.log(`The Minutes  : ${minutes}`);//Number Of Minutes

// let hour = minutes / 60 ;

// console.log(`The Hour  : ${hour}`);//Number Of Hours

// let days = minutes / 24 ;
// console.log(`The days  : ${days}`);//Number Of Minutes

// let years = days / 136;
// console.log(`The Yaers   : ${years}`);//Number Of Minutes


// [==========================={EPsode[160]}=================]
// [Data And Time
// ---getTime() =>Number Of MilliSeconds
// ---getDate()  => Day Of The Month
// ---getFullYear()
// ---getMonth()=>  Zero Based
// ---getDay() => Day Of The Week
// ---getHours()
// ---getMinutes()
// ---getSeconds() ]

// let dateNow =  new Date();
// let birthday = new Date("oct 20, 82");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);

// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);

// console.log(dateNow.getTime( ));
// console.log(dateNow.getDate( ));
// console.log(dateNow.getFullYear( ));
// console.log(dateNow.getMonth( ));
// console.log(dateNow.getDay( ));
// console.log(dateNow.getHours( ));
// console.log(dateNow.getMinutes( ));
// console.log(dateNow.getSeconds( ));

// [==========================={EPsode[161]}=================]
// [Date And Date
// ---setTime(Milliseconds)
// ---setDate()=> Day of The Month [Negative And Positive
// ---setFullYear(year,month => Optional [0-11],day => Optional [1-31)
// ---setMonth(Month [0-11) , Day => Optional [1-31] [Negative And Positive]
// ---setHours(Hours [0-23],Minutes => Optional [0-59] , Ms => Optional [0-999])
// ---setMinutes(Minutes [0-59] ,MS  => Optional  [0-999])
// ---setSeconds(Seconds => [0-59], MS =>Optional [0-999] ]

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(50));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(1000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setDate(2020 ,13);
// console.log(dateNow);

// dateNow.setMonth(15);
// console.log(dateNow);
// [==========================={EPsode[162]}=================]
// Formatting Date And Time
// --new Date(timestamp)
// --new Date(Date String)
// --new Date(Numeric Values )
// ---Format
// --"Oct 25 1982"
// --"10/25/1982"
// --"1982-10-25" =>ISO International Standard
// --"1982 10"
// --"1982"
// --"82"
// --1982,9,25,2,10,0
// --1983,9,25
// --"1982-10-25T06:10:00Z
// Date.parse("String") //Read Date Form A String
// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404341200000);
// console.log(date2);

// let date3 = new Date("10/25/1982");
// console.log(date3);

// let date5 = new Date("1982-10-25");
// console.log(date5);

// let date6 = new Date("1982-10" );
// console.log(date6);

// let date7 = new Date("82");
// console.log(date7);

// let date8 = new Date(1982,9,25,2,10,0);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9);

// [==========================={EPsode[163]}=================]

// [Date And Time
// ---Track Operations Time

// --Search
// ---Performance.now()
// ---Performance.mark()]

// Start Time
// let start = new Date();

// // Operation
// for(let i = 0; i< 100000;i++){
//    let div = document.createElement(`<div>`);
//     div.appendChild(document.createTextNode(i));
//     document.body.appendChild(div);
// }

// //Time End
// let end  = new Date();

// // Operation Duration
// let duration = end - start ;

// console.log(duration);
// [==========================={EPsode[164]}=================]
// [Generators
// --Generator Function Run Its Code When Required.
// --Generator Function Return Spacial Object [Generator Object]
// --Generators Are Iterable ]

// function* generateNumbers() {
//     yield 1;
//     console.log("Hello After Yield 1");
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// };

// let generetor = generateNumbers();

// console.log(typeof generetor);
// console.log(generetor);

// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());

// for(let value of generateNumbers()){
//     console.log(value);
// }

// for(let value of generetor){
//     console.log(value);
// }

// function* test(){
//   yield 1;
//   return 10;
// }

// let g = test();

// console.log(g.next());
// console.log(g.next());

// [==========================={EPsode[165]}=================]
// Generators
// ---Delegate Generator

// function* generateNums() {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// function* generateLetters (){
//     yield "A";
//       yield "B";
//         yield "C";
// }

// function* generateAll(){
//     yield* generateNums();
//     yield* generateLetters();
//     yield* [4,5,6];
// };

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// [==========================={EPsode[166]}=================]
// Generators
// --Generate Infinite Numbers
// --Use Return Inside Generators
// function* generateNumbers(){
//     // yield 1;
//     // yield 2;
//     // return "A";
//     // yield 3;
//     // yield 4;
//     let index  = 0;

//     while(true){
//         yield index++;
//     }
// };

// let generate = generateNumbers();

// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next());

// [==========================={EPsode[167-168]}=================]
// Models (وحدة برمجة بنتفذ وظفية معينة )
// --Import And Export ]

//  let a = 10;
//  let arr = [1, 2, 3];
//  function saySomething() {
//   return `Something in main.js File `;
// }
// export {a , arr , saySomething };

// export default function sayHello() {
//   return  `Hello say Hi`
// }
// [==========================={EPsode[169-170-171]}=================]
// [What is JSON ?
// ---JavaScript Object Notation
// ---Format For Sharing Data Between Server And Client
// ---JSON Derived Form JavaScript
// ---Alternative To XML
// ---File Extension Is .json
// Why JSON ?
// ---Easy To Use And Read
// ---Used By Most Programing Language And Its Frameworks
// --You Can Convert JSON Object To JS Object And Vice  Versa

// JSON vs XML
// ===================================================
// ==Text Based Format        = Markup Language
// ==Lightweight              = Heavier
// ==Does Not Use Tages       = Using Tags
// ==Shorter                  = Not Short
// ==Can Use Arrays           = Canot Use Arrays
// ==Not Support Comments     = Support Comments
// ===================================================
// ]

// [==========================={EPsode[172]}=================]

// [Parse And Stringify
// --JSON.parse  => Convert Text Data To JS Object
// --JSON.stringify => Convert JS Object TO JSON ]

// const myJsonObjectFromServer = '{"Username":"Osama","Age":39}';
// console.log(typeof  myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// myJsObject["Username"] = "Elzero";
// myJsObject["Age"]  = 40 ;

// const myJsonObjectToServer =  JSON.stringify(myJsObject);
// console.log(typeof  myJsonObjectToServer);
// console.log( myJsonObjectToServer);

// [==========================={EPsode[173]}=================]
// [To Understand Ajax . Fetch ,Promises
// Asynchronous vs Synchronous Programing
// --Meaning
// ------Synchronous (متزامن يتم تنفيذ العمليات بشكل متسلسل واحدة بعد واحدة )
// --operations Runs in Sequence
// --Each Operation Must Wait For The Previous One To Complete
// --Story From Real Life
// ------Asynchronous (متزامن غير  يمكن تنفذ عمليات اخري بين العملية يتم معالج العملية  )
// --Operations Runs In Parallel
// --This Means That An Operation Can Occur Another One Is Still Being Processed
// --Story From Real Life

// --Facebook As Example
// --Simulation
// ------Search
// --JavaScript Is A Single-Threaded
// --Multi Threaded Languages
// ]

// Synchronous
// console.log("1");
// console.log("2");
// console.log("3");
// window.alert(" Synchronous");
// console.log("4");

// Asynchronous

// console.log("1");
// console.log("2");
// console.log("3");
// window.setTimeout(()=> console.log(" Asynchronous") ,3000);
// console.log("4");

// [==========================={EPsode[174]}=================]
// [To Understand Ajax, Fetch ,Promises
// --Call Stack || Stack Trace
// ----JavaScript Engine Use A Call Stack To Manange Execution Contexts
// ----Mechanism To Make The Interpreter Track Your Calls
// ----When Function Called It Added To The Stack
// ----When Function Executed It Removed From Stack
// ----After Function Is Finished Exceuting The Interpreter Containue From The Last Point
// ----Work Using LIFO Principle =>Last In First Out
// ----Call Stack Detect Web API Methods  And Level It To The Browser To Handle It

// Web API
// ----Methods Available From The Environment => Browser]

// setTimeout(()=>{
//   console.log("Wbe API ");
// }
// ,0);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("two");
// }
// function three() {
//   two();
//   console.log("three");
// }

// three();

// [==========================={EPsode[175]}=================]
// [To Understand Ajax, Fetch ,Promises
// Event Loop + callback Queue
// --Story
// ---JavaScript Is A Single Threaded Language "All Operations Excuted in Single Thread"
// ---Call Stack Track AllCalls
// ---Every Function Is Done Its Poped Out
// ---When You  Call Asynchrouous Function Its Sent To Browser API
// ---Asynchrouous Function Like Settimeout Start Its Own Thread
// ---Browser API Act As A Second Thread
// ---API Finish Waiting And And Send Back The Function For Processing
// ---Browser API Add The Callback  To CallBack Queue
// ---Event Loop Wait For  Call Stack To Be  Empty
// ---Event Loop Get callback From Callback Queue And It To CAll Stack
// ---CallBack Queue Follow FIFO "First In First Out" Rule
// ]
// console.log("One");
// window.setTimeout(()=>{
// console.log("Three");
// },0);
// window.setTimeout(()=>{
// console.log("Four");
// },0);
// console.log("Two");

// setTimeout(()=>{
//     console.log(myVar);
// },0);
// let myVar = 100;

// myVar += 100;

// [==========================={EPsode[176]}=================]
// {[What Is AJAX And Networking Information
// ===AJAX
// ---Asynchronous JavaScript And XML
// ---Approach TO Use Many Technologies [HTML, CSS,JS ,DOM]
// ---It USe "XMLHtttpRequest" Object To Ineract With The Server
// ---You  Can Fetch Data Or Send Data Without Page Refresh
// ----Example
// ---Youtube Studio
// ---Google Driver
// ---Upload Article
// ---Form Check  Name
// ---------
// ---Test new XMLHtttpRequest();
// ---Request And Response
// ---Status  Code

// ]

// let req = new XMLHttpRequest();

// console.log(req);
// [==========================={EPsode[177-178]}=================]
// [AJAX
// ---Ready State => Status Of The REquest
// [0] Request Not Initialized
// [1] Server Connection Established
// [2] Request Received
// [3] Processing Request
// [4] Request Is Finished And Response Is Ready
// ----status
// [200] Response Is Successful
// [404] Not Found
// ]

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// req.send();
// console.log(req);

// req.onreadystatechange = function () {
//     if ( this.readyState === 4 && this.status === 200 ){
//         // console.log(this.responseText );
//         let JsData = JSON.parse(this.responseText);

//         // console.log(JsData);
//         for (let i = 0 ; i < JsData.length;i++){
//         let div = document.createElement("div");
//         let reponame = document.createTextNode(JsData[i].name);

//         div.appendChild(reponame);

//         document.body.appendChild(div);
//         }
//     }
// }
// [==========================={EPsode[179]}=================]
//  [To Understand Ajax , Fetch , Promises
// ---Pyramid Of Doom || Callback Hell

// ---What Is Callback
// ---CallBack Hell Example

// ---Waht Is Callback
// ----A Function That Is Passed Into Another One As An Argument To Be Executed Later
// ----Function To Handle Example
// -----[1] Download Photo From URL
// -----[2] Resize Photo
// -----[3] Add Logo To The Photo
// -----[4] Show The Photo In WebSite
// ]

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// document.addEventListener("click", makeItRed);

// // function iamCallBack() {
// //   console.log("Iam A Callback Function ");
// // }

// // setTimeout(iamCallBack, 2000);

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo ");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In WebSite");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// [==========================={EPsode[180]}=================]

// [Promise Intro And Syntax
// ---Promise In JavaScript Is LIke Promise In Real Life
// ---Promise In JavaScript That Will Happen In The Future
// ---Promise Avoid callback Hell
// ---Promise Is The Object That Represent The Status Of An Asynchronous Operation And Resulting  Value
// ----Promise Status
// ----Pending: Intitial State
// ----Fulfilled:Completed Successfully
// ----Rejected:Failed
// -----Story
// ---Once A Promise Has Been Called,It Will Start In A Pending State
// ---The Created Promise Will Eventually End In A Resolved  State Or Rejected State
// ---Calling The Callback Function (Passed To Then And Catch )Upon Finishing.

// ---Then
// ---Take 2 Optional Agrument [callback For Success Or Failure]

//  ]
// const myPromise = new Promise((resolveFunction , rejectFunction )=>{
//     let connect = true ;
// if(connect){
//     resolveFunction("Connection Established");
// }else
// {
//     console.log(Error("Connection Faild"));
// }
// }).then(
//     (resolValue) => console.log(`Good ${resolValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// console.log(myPromise);

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     console.log(Error("Connection Faild"));
//   }
// });

// console.log(myPromise);

// let resolver = (resolValue) => console.log(`Good ${resolValue}`);
// let rejector = (rejectValue) => console.log(`Bad ${rejectValue}`);
// myPromise.then(resolver, rejector);

// myPromise.then(
//     (resolValue) => console.log(`Good ${resolValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//     (resolValue) => console.log(`Good ${resolValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
