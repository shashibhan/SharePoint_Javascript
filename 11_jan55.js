// Write a function to calculate the square of a number

// function square(){
//     let num=Number(prompt("Enter the Number"))
//     Document.write(`The Square is:${num*num}`)
// }square()


// -------------------------------Parameter and Argument

// function calculate_square(num){
// document.write(`${num}`)
// }calculate_square(20)


// function generic_function(n1,n2){
//     document.write(n1**n2)
// }
// generic_function(5,'5')


// Write a function to check the character pass by user is vowel or not

function vowel(char){
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' && char== 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' )
    {
        console.log(`${char} is a vowel`)
    }
    else
    {
        console.log(`${char} is a not vowel`) 
    }
}vowel('a')


// -----------------------------------------------------------Return Keyword

function add(total_cash,used_cash){

    return total_cash,used_cash
}
let data=add(20,10)
console.log(data)