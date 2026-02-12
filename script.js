// ==============================
// ELEMENT REFERENCES
// ==============================

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// ==============================
// ENVELOPE OPEN LOGIC
// ==============================

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});


// ==============================
// BETTER RANDOM DODGE LOGIC
// ==============================

function moveNoButton() {

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 20; // distance from edges

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.transition = "all 0.35s cubic-bezier(.17,.67,.83,.67)";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Trigger dodge when cursor approaches
noBtn.addEventListener("mouseenter", moveNoButton);


// ==============================
// YES BUTTON AUTO GROW LOGIC
// ==============================

let yesScale = 1;
let growthRate = 0.05; // subtle growth per second

yesBtn.style.transition = "transform 0.3s ease";
yesBtn.style.transformOrigin = "center center";

setInterval(() => {
    yesScale += growthRate;
    yesBtn.style.transform = `scale(${yesScale})`;
}, 1000);


// ==============================
// EXTRA: YES grows more when NO clicked
// ==============================

noBtn.addEventListener("click", () => {
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
});


// ==============================
// FINAL YES CLICK EVENT
// ==============================

yesBtn.addEventListener("click", () => {

    title.textContent = "Hehehehehe! Dekha Maan gyi naa ♡";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
