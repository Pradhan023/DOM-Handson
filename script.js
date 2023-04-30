let random=Math.round(Math.random()*100)+1;
console.log(random);
let guess = document.getElementById('guess');
let input_check = document.querySelector("input");
let btn = document.querySelector(".btn");
let val1 = 100;
let nval = document.getElementById('nval')
let chance = document.getElementsByClassName("val")

btn.addEventListener('click',()=>{
    if(random > parseInt(input_check.value))
    {
        guess.innerHTML="You are low!"
         chance[0].innerText = --val1
    }
    else if(random < parseInt(input_check.value))
    {
        guess.innerHTML="You are High!"
        chance[0].innerText = --val1
    }
    else
    {
        guess.innerHTML="🤩🤩 Hurray You Won 🤩🤩"
        document.body.style.backgroundColor = 'green'
        chance[0].innerText = val1
        document.getElementById('rightnumber').innerText = random
        nval.innerText = val1
        document.getElementsByClassName("btn").style.display = none
    }
})

