// console.log("kjavalli");
// console.log("hello world");
// age=24
// name1='karthik'
// console.log(age+1,name1)
// for(i=0;i<5;i++){
//     console.log("hi ",i+1)
// }
// var a=10;
// var a="karhtik"
// console.log(a)
// let b=10;
// b="karthik"

// const alpha=10;
// console.log(alpha)

// const student={
//     name:"karthik",
//     age:20,
//     branch:"CSE"

// }
// console.log(student.branch)
// const pen={
//     Price:270,
//     rating:4,
//     name:"Parker Jotter Standard CT Ball pen",
//     colour:"Black",
//     discount:5
// }
// console.log(pen)
// num=3;
// num**=2;
// console.log(num);

// // let no=prompt("Enter the number:");
// // if(no%5==0)
// //     console.log("Its devisible by 5")
// // else console.log("its not divisible")

// // let marks=prompt("Enter marks");
// // if(marks>=80 & marks<=100){
// //     console.log("A")
// // }else if(70>=marks>80){
// //     console.log('B')
// // }else if(60>=marks>70){
// //     console.log('C')
// // }else if(50>=marks>60){
// //     console.log('D')
// // }else{
// //     console.log('F')
// // }

// // for(let c of "karthik"){
// //     console.log(c);
// // }
// // for(let d in "karhtik"){
// //     console.log(d)
// // }
// // for(let k in pen){
// //     console.log(pen[k])
// // }
// let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// comp.splice(0,1)
// comp[1]="Ola"
// for(let i of comp){
//     console.log(i)
// }
// sum=0;
// let arr=[98,96,54,65,78,89]
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]-(arr[i]*0.1);
//     console.log(arr[i]);
// }
// console.log(arr)
// // arr.push("amazon")
// arr.splice(2,1,99,88,99999)
// console.log(arr)

// function sum1(a,b){
//     console.log("sum :",a+b);
// }
// sum1(9,8);
// const sumarrow=(a,b)=>{
//     console.log("sum :",a+b);
// }
// sumarrow(9,10);

// const c= (a)=>{
//     let count=0;
//     for(let c of a){
//         for(let ch of "aeiou" ){
//             if(c==ch){
//                 count++;
//             }
//         }
//     }console.log("vowels count:"+count);
// }
// c("king")
// let a=[1,2,3,4,5];
// a.forEach((i)=>{
//    let j= Math.pow(i,2)
//     console.log(j);
// }
// )
let dev1=document.querySelectorAll(".box");
let c=0;
// for (let e of dev1){
//     e.innerText=c;
//     c++;
//     console.log(e)
// }
dev1.forEach((val)=>{
    val.innerText=c;
    c++;
    console.log(val);
})
