 let start;

  function move() {
    let hi = Math.floor(Math.random() * 500) + 100;
    let td = Math.floor(Math.random() * 500) + 100;
    let height = Math.floor(Math.random() * 200) + 50;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;

    const box = document.getElementById("box");

    box.style.left = hi + "px";
    box.style.top = td + "px";
    box.style.height = height + "px";
    box.style.width = height + "px"; // keep it square
    box.style.backgroundColor = randomColor;
    box.style.display = "block";

    start = new Date().getTime();
  }
start = new Date().getTime();

  document.getElementById("box").onclick = function () {
    document.getElementById("box").style.display = "none";
    let end = new Date().getTime();
    let time = (end - start) / 1000;
    alert("Your reaction time: " + time + " seconds");
    move();
  };