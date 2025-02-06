// Arrow function (anonymous function)---------------------------------------
// Arrow function is the modern way writing function in javascript.
// Arrow function is short faster than traditional function in javascript.

//Write a arrow function to check number is odd or even.

// let hello=()=>{
//     if(4%2==0)
//     {
//         console.log("Even Number")
//     }
//     else{
//         console.log(" Not Even Number")  
//     }

// }hello()

// let odd_even=(num,d)=>{
//     if(num%d==0)
//     {
//        return "even "
//     }
       
//     else{
//         return "odd"
//     }
   
// }
// console.log(odd_even(4,2))


// // Switth statement

// let input="1"
// switch(input){
//     case "1":
//     console.log("Monday")
//     break;
//     default:
//     console.log("Error")
// }

let input=(prompt("Enter Your choice:"))
switch(input){
    case "+":
    let add=()=>{
        let n1=2
        let n2=3
        
        return n1+n2
      }
    document.write(`<h1>${add()}</h1>`)
    break;
    case "-":
    let sub=()=>{
        let n1=2
        let n2=3
        
        return n1-n2
       
    }
    document.write(sub())
    break;
    case "*":
    let mult=()=>{
        let n1=2
        let n2=3
        
            return n1*n2
    }
    document.write(mult())
    break;
    case "*":
    let div=()=>{
        let n1=2
        let n2=3
        return n1/n2

       
    } 
    document.write(div())
    break;
    default:
    document.write("Please inter write choice")
}

// let n1=10
// let n2=20
// let add=(n1,n2)=>{return n1+n2}
// let sub=(n1,n2)=>{return n1-n2}
// let mul=(n1,n2)=>{return n1*n2}
// let div=(n1,n2)=>{return n1/n2}

// let input="+"
// switch(input){

//     case "+":
//     console.log(add(n1,n2))
//     break;

//     case "-":
//     console.log(add(n1,n2))
//     break;

//     case "*":
//     console.log(add(n1,n2))
//     break;
//     case "/":
//     console.log(add(n1,n2))
//     break;
//     default:
//     console.log("Enter right choice")
// }
 
