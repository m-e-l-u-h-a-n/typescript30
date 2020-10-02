const playSound = (e: KeyboardEvent) => {
  console.log("hello");
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  ) as HTMLAudioElement;
  const key = document.querySelector(
    `div[data-key="${e.keyCode}"]`
  ) as HTMLDivElement;
  console.log(audio);
  console.log(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    return;
  } else {
    return;
  }
};
const removeTransition = (e: TransitionEvent) => {
  if (e.propertyName !== "transform") {
    return;
  } else {
    const key = e.target as HTMLDivElement;
    key.classList.remove("playing");
  }
};
window.addEventListener("keydown", playSound);
const keys = (document.querySelectorAll(
  ".keys"
) as unknown) as HTMLDivElement[];
for (const key of keys) {
  key.addEventListener("transitionend", removeTransition);
}
