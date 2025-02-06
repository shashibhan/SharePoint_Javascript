// Reverse()

//ForEach

// let arr=[1,2,3,4,5,6];
// arr.forEach(function printVal(val){
//     console.log(val)
// })
  const square = (num)=>{
    return num**2;
  }
  let arr = [1,2,3,4,5,6];
  arr.forEach((num)=>{
    console.log(square(num));
  })
  