const colors = ["#DDB6F2", "#B5E8E0", "#C9CBFF", "#96CDFB"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ordinal = (n: number) => {
  let s = ["th", "st", "nd", "rd"];
  let v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

document.body.style.setProperty(
  "--col",
  colors[Math.floor(Math.random() * colors.length)]
);

const updateClock = () => {
  let d = new Date();
  document.getElementById("clock").innerHTML =
    String(d.getHours()).padStart(2, "0") +
    '<span class="colon">:</span>' +
    String(d.getMinutes()).padStart(2, "0");
  setTimeout(updateClock, 1000);
};
updateClock();

let d = new Date();
document.getElementById("date").innerHTML =
  days[d.getDay()] +
  " " +
  d.getDate() +
  "<sup>" +
  ordinal(d.getDate()) +
  "</sup> " +
  months[d.getMonth()];

document.getElementById("input").addEventListener("keyup", (e) => {
  if (!(e.keyCode === 13)) return;
  window.open(
    "https://www.google.com/search?q=" + e.target.value.replace(" ", "+")
  );
});
