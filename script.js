// let login = null
//  console.log(login??"Аноним")

let person =null
let admin = "ppp"
let user=""
console.log(person ?? user?? admin)

 let a = 89
 let b= 9
 let c = 10
 let d = 78
 console.log((a+b)??(c+d))

for(let i =2; i<10; i++){
    if(i%2==0) console.log(i)
        
    
    
}
 let i = 0
 while(i<3){
  console.log(`number${i}!`);
  i++;
 }
 
// let a = 0
//  while(true){
//     if(a>100 ) break;
//     a = prompt("ввидите число больше 100");
//  }

//  Firstfor:for(let a=10;a<20;a++){
//     if(a%2==0){
//         console.log(a)
//     } 
//   Secondfor:for(let b=29; b<40;b++){
//     console.log(b) 
//   }
  
  
//  }



//  let c =50
// while(c<100){
// console.log(c)
//  c++;
// }


let login = null;
do{
 login = prompt("ввидите логин");
}while(!(login==="Misha" || login===null)){
 console.log(login)
 };

// let a= 0
// for( a=0;a<19;a++){
//     console.log(a)
// }

let g =200
for ( g=200;g<300;g++){
    if(g==288)break
    console.log(g)
}

let t =10
while(t<80){
console.log(t)
t+=5
}

