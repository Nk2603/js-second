// keyword for functions in js is function

// syntax    function function name()
// function add()
// {
//     console.log("hello");
// }

// add();


// arguments used to pass the value
// parameters are used to receive the value


// function add(a,b)
// {
//     console.log(a,b);
// }
// add(10,20);
// add();

// ... is separator operator in js or array
// function add(...a){
//     console.log(a);
//     console.log(a[0]);
//     console.log(a[1]);
//     console.log(a[2]);
// }
// add(10,20,30);

// array combo of number and object
// function add(...a){
//         console.log(a);
//         console.log(a[0]);
//         console.log(a[1]);
//         console.log(a[2]);
//     }
//     add(10,{"name":"nisha"},30);


//     function add(...a){
//         console.log(a);
//         console.log(a[0]);
//         console.log(a[1]);
//         console.log(a[2]);
//     }
//     add("10","30",{"name":"nisha"})



// to print one object every time; 1 way
// function add(b,...a){
//          console.log(b);   
//          console.log(a);
//         }
//         add("10","30",{"name":"nisha"})

//         // 2 way 
//         function add(...a){
              
//             console.log(a[0]);
//            }
//            add("10","30",{"name":"nisha"})
    

// // return of function
// function add(a){
//     console.log(a);
//     return a;
// }
// const result = add("hello");
// // after calling the function code start from next line never goes again on that function call
// console.log(result);


// function add(a){
//     console.log(a);
//     return a + a;
// }
// const result = add("hello");
// // after calling the function code start from next line never goes again on that function call
// console.log(result);


// function add(a){ 
//     console.log(a);
//     // return a + a;
//     // return a*a;
//     // return a/a;
//     return a - a;
// }
// const result=add("2");
// console.log(result)

// arrow function 1 way  
// const result = function (a){
//     return "hello";
// }
// console.log(result(10));

// 2 way
// const result =  (a)=> {
//     return "hello";
// }
// console.log(result(10));

// function without name
;
(()=>{
 console.log("hello");
})
// function call
();


