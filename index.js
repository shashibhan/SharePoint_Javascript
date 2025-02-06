let name = document.getElementById("name")
let pTag = document.getElementsByClassName("p1")
let h2Tag = document.getElementsByTagName("h2")
let h3Element = document.getElementById("h3");
let btn = document.getElementById("btn");
let divElm = document.getElementById("div")
let pElm  = document.createElement("p");
let btn2 = document.getElementById("btn2");

btn2.addEventListener('click',() =>{
    pElm.innerText="This is Div tag"
    divElm.appendChild(pElm)
})
// const increaseCount = ()=>{
//     let num = Math.floor(Math.random()*5)+1;
//     return num;
// }

// / btn.addEventListener('dblclick',()=>{
//     let val = increaseCount();
//     h3Element.innerText = val;
// })

