// heading
let head = document.getElementById('head')
head.style.fontSize = '60px'
head.style.textDecoration = 'underline'
head.style.fontWeight = 'lighter'

// Q1 
let txt = document.getElementById('text')
console.log(txt);

// Q2 
let h1 = document.getElementsByTagName("h1")
console.log(h1);

// Q3
let box = document.getElementsByClassName("box")
console.log(box[0].innerText); 

// Q4
let hlo = document.getElementById('hello')
hlo.addEventListener('click',()=>{
    hlo.innerText="Hello world"
    hlo.style.paddingLeft = '120px'
})

// Q5

function bn()
{
    let hw = document.getElementById('hw')
    hw.innerHTML="Welcome to Elevation academy"
}

// Q6

let color = document.getElementById('color')
color.style.color = "red"
color.style.paddingLeft = '90px'

// Q7
function flex1()
{
    let con = document.getElementById('cn')
    con.style.flexDirection = 'column'
}

// Q8
let table = document.getElementById('table')
table.style.marginLeft = '90px'
table.style.lineHeight = '30px'
table.style.fontSize = 'large'
table.style.borderCollapse = 'collapse'

// Q9
const time = ()=>
{
    let clock = document.getElementById('clk-display')
    let date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds();

    let day;
    day = hours<12? "AM" :"PM";
    hours = hours > 12 ? hours-12 : hours
    hours = hours == 0 ? (hours-12) : hours;

    hours = hours<10 ? `0${hours}` : hours;
    minutes = minutes<10 ? `0${minutes}` : minutes;
    seconds = seconds<10 ? `0${seconds}` : seconds;

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${day}`; 
    clock.style.backgroundColor = '#9FC1D6'
    clock.style.width = '260px'
    clock.style.height = '60px'
    clock.style.fontSize = '40px'
    clock.style.textAlign = 'center'
    clock.style.margin = '-50px 0 0 30%'
    clock.style.borderRadius = '10px'
    document.body.style.backgroundColor = '#DEEEF1'
}
time();
setInterval(time,1000);
