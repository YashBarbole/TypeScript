//1

// function greeting(firstname: string){
//     console.log("Hello"+firstname);
// }

// greeting("yash");


// 2


// function sum(a:number,b:number){
//     return a+b;
// }

// const val=sum(2,3);
// console.log(val);

//3

function run(fn:()=> void){
    setTimeout(fn,5000);
}


run(function(){
    console.log("hello");
})