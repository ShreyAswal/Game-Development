// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game

let number1 = Math.floor(Math.random()*100);
const number1box =document.getElementById("number1");
console.log (number1," : number1");
number1box.innerHTML = number1;


let number2= Math.floor(Math.random()*100);
const number2box =document.getElementById("number2");
console.log (number2," : number2");
number2box.innerHTML = number2;

number1.onload = () => {
    let x = Math.floor((Math.random() * 100) + 1);
}

const greaterThan = document.getElementById("greater-than");

const equalTo = document.getElementById("equal-to");

const lesserThan = document.getElementById("lesser-than");

var score = 0;

greaterThan.onclick = () => {
    if (number1>number2) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;



};

lesserThan.onclick = () => {
    if (number1<number2) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }

    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
};

equalTo.onclick = () => {
    if (number1===number2) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }

    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
};

var time=5;
var timer=document.getElementById('timer');
var timerId;

function startTimer () {
    time=5;
    timer.innerHTML = time;

    timerId = setInterval (() => {
        time--;
        if (time==0) {
            location.href="./gameover.html";
        }
        timer.innerHTML = time;
        
    },1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId) {

    clearInterval(intervalId);
    startTimer();
}

startTimer();
