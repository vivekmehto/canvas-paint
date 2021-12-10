const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDraw = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDraw) return;
  console.log(e);
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", () => (isDraw = true));
canvas.addEventListener("mouseup", () => (isDraw = false));
canvas.addEventListener("mouseout", () => (isDraw = false));
