

// for (let i = 0; i < 3; i++) {
//   console.log('out',i);
//   for (let i = 0; i < 2; i++) {
//     console.log('in',i);
//   }
// }
// let [a,b,c,d,e,f,g,h,i]=[10,20];
// console.log(a,b,c);
// let obj={
//   name:'mr wang',
//   age:23,
//   height:'172cm'
// }
// let {name,age,height}=obj;
// console.log(name,age,height);
// let name="mr wang";
// let age=12;
// let obj={
//   name,
//   age
// }
// console.log(obj);
// let add=(x,y)=>{
// console.log(x);
// console.log(y);
// return x+y;
// }
// let add=(x,y)=>({age:x+y})
// let res=add(5,5);
// console.log(res);
// setTimeout(()=>{console.log(1);},1000)
// let add=(x,y)=>x+y-10;
// console.log(add(19,21));
// let [name,age]=['mr wang',23];
// document.body.innerHTML=`<p class='active'>姓名：${name}年龄：${age}</p>`
// console.log(`<p class='active'>姓名：${name}年龄：${age}</p>`);

// function say(name='mr wang',age=13) {
//   alert(`姓名是${name},今年${age}岁`)
//
// }
// say()
// function restFunc(a,...rest) {
//   console.log(a);
//   console.log(rest);
// }
// restFunc(1,2,3,4,5,5,6,8,'a','b','c')
//reduce
// function add(...x) {
//   return x.reduce((m,n)=>m+n);
// }
// console.log(add(1,2,3,4,5,6,7));
//合并数组，不破坏原数组
// let arr=[1,2,3];
// let arr1=[1,2,3,4,5,6];
// let arr2=[...arr,88,...arr1];
// console.log(arr2);


//map
// let arr=[7,8,9,10];
// let arr1=arr.map(function (item) {
//   console.log(item);
//   return item*3
// })
// console.log(arr1);
//
//
// let news=[
//   {tittle:'天气不错',au:'mr wang'},
//   {tittle:'天气不错',au:'mr wang'},
//   {tittle:'天气不错',au:'mr wang'},
//   {tittle:'天气不错',au:'mr wang'},
//   {tittle:'天气不错',au:'mr wang'}
// ]
// let newList=news.map(item=>item.tittle)
// console.log(newList);
//
// let ne=[
//   {va:'hhhhhh',mm:'6666'},
//   {va:'hhhhhh',mm:'6666'},
//   {va:'hhhhhh',mm:'6666'},
//   {va:'hhhhhh',mm:'6666'}
// ]
// let nn=ne.map(item=>item.mm)
// console.log(nn);




//forEach
// let arr=[1,2,3,4,5]
// arr.forEach(item=>console.log(item))


//class
//类里面通常只可一些一个个的方法，方法之间不可以有符号链接
//类里面定义的属性要写道constructor方法内，这个方法是类默认带的，他会实例化他的时候
//
// class People {
//   constructor(name,age) {
//     this.name=name;
//     this.age=age;
//   }
//   say(){
//     console.log(this.name);
//   }
// }
//
// class Ming extends People {
//   run(){
//     console.log('run');
//   }
//   // constructor(name,age){
//   //   super()
//   //   console.log(name,age);
//   // }
//
// }
//
// var preson=new Ming('Mr wang',123);
// console.log(preson.name);
// console.log(preson.age);
// // preson.say();
// preson.run();//一定要实例化对象运行




// var str=require('./index2.js');
// // alert(str)
// console.log(str.str1);

// import{str,sum} from './index2.js';
// console.log(str);
// sum()


import xxx from './index2.js';
console.log(xxx);
