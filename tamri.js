
// var Name , LastName , Age;


// Name="mahdi";
// LastName="mirzaei";
// Age=17;

// var  a, b, c;

// a= 20;
// b=30;
// c= a*b;


// document.write(Age+c)
// window.alert("hello im "+Name+' '+LastName)
// console.log("conected...");



// var Number= 38;//Number
// var Number2=3;
// var Name= 'mahdi';//strong
// var iscomplete= true;//boolean
// var isEqual= (Number==Number2); //boolean
// document.write(isEqual);
// var person= { FerstName:"mahdi" , LastName: "mirzaei"}; //object
// console.log(person.FerstName+" "+person.LastName);
 

var colors= ["blue", "red", "orange","green"];
//colors.shift();//برای حذف از اول
//colors.reverse();//برای از اخر شمردن
//colors.unshift("white");//برای اظافه کردن از اول
//colors.pop();//برای کم کردن از اخر
//colors.push("pink");//برای اظافه کردن از اخر
//var NewArray=colors.slice();//کپی کردن اون ارایه ها 
//var result=colors.indexOf("red",0);//برای جستجو در ارایه ها استفاده میشه
//console.log(result);
//var Arraystring = colors.join(" ^ ");//این تابع ارایه هارو به صورت یک استرینگ در میاورد و در پرانتز نوع فاصله های بین ارایه ها قابل مشاهده است 
//console.log(Arraystring);







// var a,b;
// a=2;
// b=6;
// var isEqual;
// if ( b==a ){//                                  

//     isEqual="true";

// }
// else
// {
// isEqual= "false";
// };
// console.log("the problem is:" + isEqual);
//==مقایسه کردن 
// =مساوی قرار دادن
// ===مقایسه کردن با تایپ هاشون
// !=مقایسه کردن نابرابری دو مقادیر
// (a==b & a===b)انجام دادن دو شرط که هر دو باید درست باشد
// (a==b |  a===b) یک شرط هم درست باشد کافی است
//a==b  ? isEqual=true : isEqual= false; //به این کد شرط های سه گانه میگویند که تمام کد های بالا را در یک خط خلاصه کرده است
//console.log("the problme is:" +isEqual);






var Mytime= new Date().getDay();

var day;

switch(Mytime){

case 0:
    day="یکشنبه";
    break;
case 1:    
    day="دوشنبه";
    break;
case 2:
    day= "سه شنبه";
    break;
case 3 :
    day="چهار شنبه";
    break;
case 4:
    day= "پنجشنبه";
    break;
case 5 :
    day="جمعه";
    break;
case 6 :
    day="شنبه";
    break;
default :
    day= "the value not faund";








};
console.log(day);



























