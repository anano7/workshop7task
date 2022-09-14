// დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
// ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
// მაგალითად
// arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
// უმჯობესია გამოიყენოთ reduce მეთოდი

// Task 2 : 
// დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
// მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8
// Task 3 : 
// დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
// ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];

// შედეგი უნდა იყოს : [1,2,3,30]
// Task 4 : 
// ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
// გამოიყენეთ map
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

  /* Task 5 */
//   გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
//   პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
//   მეზობელი ელემენტების სხვაობების ჯამი . 
//   მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
//   შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

//   სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
//   პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს 


function myvalue(arr){ 
  let myarr = arr.reduce((acc,el)=>{    
    if (acc[el]) {acc[el] ++; }
    else {
    acc[el]=1;  
    }
     return acc;
    },
{})
   
 let max = myarr[arr[0]];
 let empty ='';
 console.log(max)

      for (i=0 ; i< arr.length ; i++  )
     { 
         if (myarr[arr[i]] > max) {
            max =myarr[arr[i]] ;
            empty=arr[i];
         }
     }
    return  `popular value' : ${empty}-${max}`     
}
 let ele=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3]; 
 console.log(myvalue(ele));


//meore
function dash(p) {  
let empt= [] ; 
if (typeof(p) == 'number') {  
let xxx = p.toString()    ; 
console.log(xxx)
  for (i=0 ; i <  xxx.length ; i ++ )
  {  
    empt.push(parseInt(xxx[i])) ;
  }
  }  
   if (typeof(p)=='string'){ 
    for (i=0 ; i <  p.length ; i ++ ){ 
        empt.push(parseInt(p[i])) ;
    }
   }
  console.log(empt);
    let result='';
   for ( i = 0 ; i<empt.length ; i ++ ){
if (empt[i]%2==0 && empt[i+1] %2==0 )
{
 result+=`${empt[i]}` + `-`
              
}
 else result +=`${empt[i]}`
 }
  return result;
};

let first= 222344567804;
let sec = dash(first);
console.log(sec); 

// mesame
function secfunc(x,y){ 
 let res=[];
     for (i=0 ; i< x.length; i++) {
  if(res.indexOf(x[i])== -1)
    {res.push(x[i])}; 
     }
  console.log(res);
for(i=0 ; i< y.length ; i ++ ) {
 if (res.indexOf(y[i]) == -1 )
 {res.push(y[i])}; 
 }
   return res;
 }

let one =[1,2,3,4];
let two =[3,4,5,6];
let final=secfunc(one,two);
console.log(final);

// meotxe
  function dif(arr){  
 function tocompareThis (a,b) {return b-a}; 
 let resultt =arr.sort(tocompareThis);
console.log(resultt);

let result=resultt.reduce((sum,el)=>{
 let acc ; 
 if (resultt.find((f)=> f<el)==undefined){ 
return sum+=el;     
}
 else{acc=el - resultt.find((f)=>f<el)
return sum+=acc;
 }
} ,0)
return result ;
}

let one1 =[4,6,7,2,9];
 let two2=dif(one1);
console.log(two2);




 
