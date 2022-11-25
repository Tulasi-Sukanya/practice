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
// num1=-10
// num2=50
// here var is global declaration let is a private variable
// var sum=0 
// if(num1>0 && num2>0){
//     var sum
//     sum=num1+num2
//     console.log(sum*sum);
// }
// else if(num1<0 ^ num2<0){
//     let diff
//     diff=num1-num2
//     console.log(diff*diff*diff);
// }
// else{
//     console.warn("Enter Correct Inputs");
// }
// console.log(sum);
// console.log(diff);
// A program can be written in many ways for ex:
// gender='F'
// age=17
// if(gender=="M"){
//     if(age>=21){
//         console.log("You are eligible to vote");
//     }
//     else{
//         console.log("You are not eligible to vote..");
//     }
// }
// else{
//     if(gender=="F"){
//         if(age>=18){
//             console.log("She can vote");
//         }
//         else{
//         console.log("she cannot vote");
//         }
//     }
// }
// (or)
// gender='F'
// age=17
// if(gender==="M" && age>=21){
//     console.log("He can vote");
// }else if(gender==="F" && age>=18){
//     console.log("She can vote");
// }
// else{
//     console.log("You cannot vote");
// }
// (or)
// gender='F'
// age=17
// if((gender==="M" && age>=21) || (gender==="F" && age>=18)){
//     let name="sukku"
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }
// console.log(name);
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
// Spread operator in Arrays:
// here arrr1 elements are copied to arr2 both arr1 & arr2 are placed in same memory location.
// arr1=[10,20,30,40,50]
// arr2=arr1
// console.log(arr2);
// here we are creating a physical array by using spread operator.it copies elements and both have different memory location.they are not pointing each other.
// arr1=[10,20,30,40,50]
// arr2=[...arr1]
// console.log(arr2);
// arr1[5]=60
// console.log(arr1);
// console.log(arr2);
// arr2[5]=100
// console.log(arr2);
// changes can be done on both arrays.but arr1 changes will not appear on arr2 and vice versa bcz of using spread operator
// Spread Operator in Objects:
// const obj1={
//     product:'mobile',
//     company:'VisualViewport',
//     version:6,
//     core:'octa'
// }
// const obj2={...obj1}
// console.log(obj1);
// console.log(obj2);
// obj2.price=17000
// console.log(obj2);
// obj1.discounted='yes'
// console.log(obj1)
// Loops:for loop,while loop,do while loop
// for loop:For any repititive operations we use for loops.Syntax: for(intial value;condition;increment/decrement){//code}   index-0 to (n-1)
// const ages=[16,18,23,27,29,10,50,60,80] 
// console.log(ages);
// for(let i=0;i<ages.length;i+=1){
//     console.log(ages[i]);
// }
// for(let i=0;i<=ages.length;i++){
//     if(ages[i]>=18){
//         console.log(`${ages[i]},you are eligible to vote..`);
//     }
//     else{
//         console.log(`${ages[i]},you are not eligible to vote..`);
//     }
// }
// table example:
// number=45
// for(let num=number;num<=number*10;num+=number){
//     console.log(`${number} x ${num/number} = ${num} `);
// }
// for(let i=number;i<=number*10;i+=number){
//     console.log(`${number} x ${i/number} = ${i} `);
// }
// While:These loops are used when u dont know start and end points.
// Q-print the values of the array until zero appears.
// to print arr values
// values=[10,20,-16,68,20,-16,0,19,56,-19]
// let variable=0
// while(variable<=values.length){
//     console.log(values[variable]);
//     variable+=1
// }
// until zero 
// values=[10,20,-16,68,20,-16,0,19,56,-19]
// let variable=0
// while(values[variable]!=0){
//     console.log(values[variable]);
//     variable+=1
// }
// do-while loop:Never used..just like while loop.the one and only difference condition is written in while and executing statements are in do loop.it is also called as entry controlled loop or exit controlled loop.
// Q-print the values of the array until zero appears.
// values=[10,20,-16,68,20,-16,0,19,56,-19]
// let variable=0
// do{
//     console.log(values[variable]);
//     variable+=1
// }
// while(values[variable]!=0)
// Functions:Functions are basically a way of creating separate block of code to reuse it throught out the appliction.
// syntax of  a function:functionname (parameters){
//     ..your operations
// }
// functionname(parameter values)
// Q-u are given with 2 no's give answer as sum 
// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(100,200)
// Q-given 2 no's add thae values and generate the square pf the sum.
// function square(num1,num2){
//     return num1*num2;
// }
// const sqr=square(10,20)
// console.log(sqr);
// const sqr1=square(12,15)
// console.log(sqr1);
// console.log( sqr , sqr1)
// // Q-U are given with marksof students in 5 subjects u have to tell weather u pass >30 or fail.<30 or Given an array find the sum of elements or cube the sum or check if sum >200 or not.
// function sum(marks){
//     summation=0;
//     for(let i=0; i<marks.length; i++){
//         summation+=1;
//     }
//     return summation;
// }
// const add=(sum([10,20,30,44,55]));
// console.log(add);
// Es6 Arrow Functions:
// Basic Array & Array Constructor:
// Array Methods:
// ES6 Higher order Array methods:1.forEach() 2.map() 3.filter() 4.reduce() 5.sort()
const employees=[
    {id:10001 , name:'employee1', designation:"IT",start:1980 , end:1990 },
    {id:10002 , name:'employee2', designation:"HR",start:1985 , end:2000 },
    {id:10003, name:'employee3', designation:"IT",start:1986 , end:2020 },
    {id:10004 , name:'employee4', designation:"HR",start:1987 , end:2005 },
    {id:10005 , name:'employee5', designation:"IT",start:1982, end:2008},
    {id:10006, name:'employee6', designation:"MECH",start:1989 , end:2009 },
    {id:10007 , name:'employee7', designation:"IT",start:1987, end:2018 },
    {id:10008, name:'employee8', designation:"HR",start:1985, end:2022 },
    {id:10009, name:'employee9', designation:"IT",start:1990, end:2001 }
]
// Q- from emp array ,loop around the array and print the name of each employee.
    // console.log(employees);
    // console.log(employees[1].name);
for(let emp=0; emp<employees.length; emp++){
    console.log(employees);
    console.log(employees[emp].name);
    console.log(employees[emp].id);
}
// forEach:
employees.forEach((emp)=>{console.log(emp)});
employees.forEach((emp)=>{console.log(emp.name)});
employees.forEach((emp)=>{console.log(emp.designation)});
employees.forEach((emp,index)=>{console.log(emp.id,index)});
// map:
employees.map((emp,index)=>{console.log(emp.name)});
employees.map((emp,index)=>{console.log(emp.name,index)});
// filter:
employees.filter((emp)=>{console.log(emp.end - emp.start)});





