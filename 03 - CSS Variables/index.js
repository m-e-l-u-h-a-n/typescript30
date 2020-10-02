"use strict";
const inputs = document.querySelectorAll(".controls input");
function changeHandler() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(// can change the css variables using setProperty of style for ent element of Html here root.
    `--${this.name}`, this.value + suffix);
    const controls = document.querySelector('.controls');
    controls.style.setProperty(`--${this.name}`, this.value + suffix);
}
;
inputs.forEach((input) => {
    input.addEventListener("change", changeHandler);
    input.addEventListener("mousemove", changeHandler);
});
