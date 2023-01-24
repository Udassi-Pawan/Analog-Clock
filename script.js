const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const section = document.querySelector("section");
const mode = document.querySelector("button");
const body = document.querySelector("body");

mode.addEventListener("click", function () {
  body.classList.toggle("dark");
  mode.textContent =
    mode.textContent == "Dark Mode" ? "Light Mode" : "Dark Mode";
});

setInterval(function () {
  let dateNow = new Date();

  const dusra = dateNow.toLocaleString("en-US", {
    minute: "2-digit",
    hour: "2-digit",
    month: "long",
    weekday: "long",
  });

  const hoursAbhi = +dateNow.getHours();

  const ampm = hoursAbhi > 11 ? "PM" : "AM";

  let secondNow = +dateNow.getSeconds() % 60;
  let minuteNow = +dateNow.getMinutes() % 60;
  let hourNow = +dateNow.getHours() % 60;

  hourHand.style.transform = `rotate(${(-90 + (hourNow / 12) * 360) % 360}deg)`;
  hourHand.style.transformOrigin = "0% 0%";

  minuteHand.style.transform = `rotate(${(-90 + minuteNow * 6) % 360}deg)`;
  minuteHand.style.transformOrigin = "0% 0%";

  secondHand.style.transform = `rotate(${(-90 + secondNow * 6) % 360}deg)`;
  secondHand.style.transformOrigin = "0% 0%";

  section.style.visibility = "visible";

  [month, day, , timeNow] = dusra.split(" ");
  const shortMonth = month.slice(0, 3);
  time.textContent = `${timeNow} ${ampm}`;
  date.innerHTML = `${day.toUpperCase()},${shortMonth.toUpperCase()} <span> ${dateNow.getDate()}</span> `;
}, 1000);
