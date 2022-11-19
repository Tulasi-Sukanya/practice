// How to print values in JS. and in how many ways string can be written.
// console.log('Hello World')
// console.log("Hello World")
// console.log(`Hello World`);
// console.warn("This is a Warning");
// console.error("This is a Error");
// Strings can be written in 3 ways Single and double quotes or by using backtics.a statement can be run with or without semicolon. no problem
// Data Types:Primitive data types and Non-primitive data types.
// PDTs:1.number 2.string 3.boolean 4.null 5.undefined 6.symbol
// Non-pdts:1.Arrays 2.Objects 3.Array of objects
// PDT's:To print PDT's
// console.log(100);
// console.log("This is a string")
// console.log(true);
// console.log(null);
// console.log(undefined);
// Variables: containers for storing data.
// variable1=1000
// console.log(variable1+10);
// Add two Numbers:
// num1=100
// num2=30
// console.log(num1+num2);
// sum=num1+num2
// console.log(sum);
// Operators:Arthmetic,Assignment,Comparsion,logical,Conditional,type operators.
// Arthmetic(+,-,*,/,%,++,--,**)
// num1=100
// num2=50
// sum=num1+num2
// console.log(sum);
// diff=num1-num2
// console.log(diff);
// product=num1*num2
// console.log(product);
// division=num1/num2
// console.log(division);
// remainder=num1%num2
// console.log(remainder);
// console.log(num1++);
// console.log(num1);
// console.log(++num1);
// console.log(num2--);
// console.log(num2)
// console.log(--num2);
// Assignment(=,+=,-=,*=,/=,%=,**=)
// Comparitive(=,==,===,!=,!==,>,<,>=,<=,?)
// value1=500
// value2='100'
// console.log(value1==value2);
// console.log(value1===value2);
// console.log(value1>value2);
// console.log(value1<value2);
// console.log(value1!=value2);
// console.log(value2!=value1);
// console.log(value1!==value2);
// typeof operator:
// value1=50
// value2='200'
// console.log(typeof(value1));
// console.log(typeof(value2));
// console.log(typeof(true));
// console.log(typeof(null));
// console.log(typeof(undefined));
// Logical Operators(&&,||,!,^)
// variable1=10
// variable2='20'
// if(variable1>0 && variable2>0){
//     sum=variable1+variable2
//     console.log(sum);
// }
// else{
//     console.log("Enter Correct inputs..");
// }
// if(variable1===0 || variable2===0){
//     console.log(variable1);
//     console.log(variable2);
// }
// else{
//     console.log('Enter Input Zero..');
// }
// if(variable1!=variable2){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// Conditional Statements:if ,else,else if
// Q- u are given with two numbers add them and print them.
// num1=100
// num2='50'
// console.log(num1+num2);
// if(typeof(num1)==='number'){
//     console.log(num1);
//     if(typeof(num2)==='number'){
//         console.log(num2);
//         console.log(num1+num2);
//     }
// }
// Q-u are given with two +ve numbers add them and print square.
// num1=10
// num2=5
// if(num1>0 && num2>0){
//     sum=num1+num2;
//     console.log(sum*sum);
// }
// Q-u are given with two numbers add them and if not print "Enter the correct inputs"
// num1=-10
// num2=17
// if(num1>0 && num2>0){
//     sum=num1+num2
//     console.log(sum);
// }
// else{
//     console.warn("Enter Correct inputs");
// }
// Q-U are given with two values add them & print Square,if either one is -ve print cube of the diff &if both are -ve print plz give correct inputs.
// num1=-10
// num2=-50
// if(num1>0 && num2>0){
//     sum=num1+num2
//     console.log(sum*sum);
// }
// else if(num1<0 ^ num2<0){
//     diff=num1-num2
//     console.log(diff*diff*diff);
// }
// else{
//     console.warn("Enter Correct Inputs");
// }
// ternary operators(? & :):SYNTAX:condition?true:false
// const someValue=10
// someValue>0?console.log("positive"):console.log("negative")
// Scopes:3 types:local scope,global scope,function scope
// var -- a public identifier, accesed inside or outside the block.
// const -- a private identifier, accesed inside the block.but it has to be declared and intialised too..const variable cant be changed 
// var variable1="Sukanya"
// console.log(variable1);
// if (typeof(variable1)=="string"){
//     var variable2=50
// }
// console.log(variable2);
// let -- a private indentifier, accesed inside the block.
// if (typeof(variable1)=="string"){
//     let variable2=50
// }
// console.log(variable2); no ouput bcz let is private.
// though we are creating a variable and assigning it with a value JS takes it as a object by default.
// if we are assigning some data to variable js has some predefined methods and functons to update or manipulate the data or to perform some operations.
// let myNumber=true
// console.log(typeof(myNumber));
// Non-PDT's:Arrays:Array is a variable which contains multiple different variables inside it.Arrays always start from index of 0.
// const fruits=["mango","apple","melon","orange"]
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[3]);
// console.log(Array.isArray(fruits));
// NestedArray:    00,01,02,03,04, 10,11,12,13,14,  20, 21, 22, 23, 24,   30, 31, 32, 33, 34
// const myArray=[[1, 2, 3, 4, 5],[10,20,30,40,50],[100,200,300,400,500],[111,222,333,444,555]]
// console.log(myArray[2][2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// myArray[4]=[5,10,15,20]
// console.log(myArray);
// console.log(myArray.length);
// creating a Object:
// const user={
//     name:"Sri" ,
//     age:22 ,
//     graduated: true ,
//     maried:false ,
//     hobbies:["singing","drawing","cooking","games"] ,
//     address:{
//         city:'Nellore',
//         mandal:'buchi',
//         state:'Andhrapradesh' 
//     }
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user.graduated);
// console.log(user.maried);
// console.log(user.hobbies[2]);
// console.log(user.hobbies[3]);
// console.log(user.address.city);
// console.log(`myaddress is user ${user.address}`);
// console.log(`my hobbies are ${user.hobbies[3]}`);
// creating an array of objects:[{},{},{},{},{},.....]
// const user=[
//     {
//         name:"Sri" ,
//         age:22 ,
//         graduated: true ,
//         maried:false ,
//         hobbies:["singing","drawing","cooking","games"] ,
//         address:{
//             city:'Nellore',
//             mandal:'buchi',
//             state:'Andhrapradesh' 
//         }
//     }    ,
// {
//     name:"Suu.." ,
//         age:26 ,
//         graduated: true ,
//         maried:false ,
//         hobbies:["singing","drawing","cooking","games"] ,
//         address:{
//             city:'SPSR NLR',
//             mandal:'KBP',
//             state:'AP' 
//         }   
// },
// {
//     name:"swe.." ,
//         age:27 ,
//         graduated: true ,
//         maried:false ,
//         hobbies:["singing","cooking","games"] ,
//         address:{
//             city:'HYD',
//             mandal:'AMPT',
//             state:'TN' 
//         }
// }]
// console.log(`my name is ${user[0].name}`);
// console.log(`my city is ${user[1].address.city}`);
// console.log(`my hobbies are ${user[2].hobbies[0]}`);
// here arrr1 elements are copied to arr2 both arr1 & arr2 are placed in same memory location.
// arr1=[10,20,30,40,50]
// arr2=arr1
// console.log(arr2);
// here we are creating a physical array by using spread operator.it copies elements and both have different memory location. and 








