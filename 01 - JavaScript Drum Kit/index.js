"use strict";
const playSound = (e) => {
    console.log("hello");
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    console.log(key);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        return;
    }
    else {
        return;
    }
};
const removeTransition = (e) => {
    if (e.propertyName !== "transform") {
        return;
    }
    else {
        const key = e.target;
        key.classList.remove("playing");
    }
};
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".keys");
for (const key of keys) {
    key.addEventListener("transitionend", removeTransition);
}
