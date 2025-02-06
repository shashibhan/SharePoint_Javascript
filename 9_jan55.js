// write a program to check divisibility of 4 and 5.

let number=20;
if(number%4==0 && number%5==0)
{
    console.log("Divisibal by 4 and 5")
}
else
{
console.log(" Not Divisibal by 4 and 5")

}


// write a program to check the number is odd or even.

let n=5
if(n%2==0)
{
    console.log("This is Even Number")
}
else
{
 
    console.log("This is Odd Number")
    
}

// write a program to find out the last digit of a number ex.2453454

let num=2453454
console.log(num%100 )

// write a program to convert  forenheit to celcius.

let f=90                       //f=c*9/5+32 celsius to farenheit
let c=(f-32)*5/9
console.log(`${c}`)

//write a program to find the middle number from three number.

let n1=4 
let n2=2
let n3=3
if(n1>n2 && n1<n3 || n1<n2 && n1>n3)
{
    console.log(`${n1}`)

} else if(n2>n1 && n2<n3 || n2<n1 && n2>n3)
    {
            console.log(`${n2}`)
    }

   
 else{
        console.log(`${n3}`)
}


