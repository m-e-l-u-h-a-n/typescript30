const secondHandler = (now: Date) => {
  const seconds = now.getSeconds();
  return (seconds / 60) * 360 + 90;
};
const minuteHandler = (now: Date) => {
  const minutes = now.getMinutes();
  return (minutes / 60) * 360 + 90;
};
const hourHandler = (now: Date) => {
  const hours = now.getHours();
  return (hours / 12) * 360 + 90;
};
const setTime = () => {
  const now = new Date();
  const secondHand = document.querySelector(".second-hand") as HTMLDivElement;
  secondHand.style.transform = `rotate(${secondHandler(now)}deg)`;
  const minuteHand = document.querySelector(".min-hand") as HTMLDivElement;
  minuteHand.style.transform = `rotate(${minuteHandler(now)}deg)`;
  const hourHand = document.querySelector(".hour-hand") as HTMLDivElement;
  hourHand.style.transform = `rotate(${hourHandler(now)}deg)`;
};

setInterval(setTime, 1000);
