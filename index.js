let homescoreBtn1 = document.getElementById("homescore-btn1");
let homescoreBtn2 = document.getElementById("homescore-btn2");
let homescoreBtn3 = document.getElementById("homescore-btn3");

let guestcoreBtn1 = document.getElementById("guestscore-btn3");
let guestcoreBtn2 = document.getElementById("guestscore-btn3");
let guestcoreBtn3 = document.getElementById("guestscore-btn3");

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function hadd1() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function hadd2() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function hadd3() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function gadd1() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function gadd2() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function gadd3() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}
