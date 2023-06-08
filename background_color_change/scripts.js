function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const btn = document.getElementById("change-btn");
const container = document.getElementById("root");
btn.addEventListener("click", function () {
  const randomcolor = getRandomColor();
  container.style.backgroundColor = randomcolor;
});
