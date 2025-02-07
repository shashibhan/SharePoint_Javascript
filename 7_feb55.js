// write a function to print the table of a number pass by user.
//input :2

// function table(num){
//     let arr =[]
//     let string = ""
//     let count_x =0
//     for(let i=1;i<=10;i++){
//       arr.push(`${num} x ${i} = ${num*i}`)
      
//     }
//     console.log(arr)

//     for(let i=0;i<arr.length;i++){
//         string+=arr[i]
      
//     }
//    for(let i=0;i<string.length;i++){
//     if(string[i]=="x"){
//         count_x+=1
//     }
//    }
//    console.log(`No x : ${count_x}`)


//     // let countX = arr.join("").split("x").length - 1;
//     // console.log("Total occurrences of 'x':", countX);

    
    
// }
// let num=5
// table(num)

// function table(num){
//     let arr =[]
//     for(let i=1;i<=10;i++){
//       arr.push(`${num} x ${i} = ${num*i}`)
      
//     }
//     console.log(arr)

//     for(let i=0;i<arr.length;i++){
        
      
//     }

// }
// let num=5
// table(num)


function table(num) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(`${num} x ${i} = ${num * i}`);
    }
    console.log(arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstElement = Number(arr[i].split(" ")[0]);
        sum += firstElement;
    }

    console.log("Sum of all first index elements:", sum);
}

let num = 5;
table(num);



