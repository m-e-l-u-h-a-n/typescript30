const inputs = document.querySelectorAll(".controls input");

function changeHandler(this: any){
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty( // can change the css variables using setProperty of style for ent element of Html here root.
    `--${this.name}`,
    this.value + suffix
  );
  const controls = document.querySelector('.controls') as HTMLDivElement;
  controls.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach((input) => {
  input.addEventListener("change", changeHandler);
  input.addEventListener("mousemove", changeHandler);
});
