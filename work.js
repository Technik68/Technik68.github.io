var btnDown = document.getElementById("Down");
var btnAutomatical = document.getElementById("Automatical");
const line = document.querySelectorAll(".col");
console.log(line);
let activeLine = 0;
var inc = 0;

function changeColorBut2() {
  line[activeLine].className = "col";
  activeLine++;

  if (activeLine > 6) {
    activeLine = 0;
  }

  const currentLine = line[activeLine];
  currentLine.classList.add(currentLine.getAttribute("id"));
}

function changeColorBut1() {
  line[activeLine].className = "col";
  activeLine++;

  if (activeLine > 6) {
    activeLine = 0;
    clearInterval(interval1);
    activeLine = 0;
    resetColor();
  }
  const currentLine = line[activeLine];
  currentLine.classList.add(currentLine.getAttribute("id"));
}

function resetColor() {
  var active = 0;
  for (active = 0; active < 7; active++) {
    line[active].className = "col";
    const currentLine = line[active];
    currentLine.classList.add(currentLine.getAttribute("id"));
  }
}

function backIsEmpty(){
  var active = 0;
  for (active = 0; active < 7; active++) {
    line[active].className = "col";
  }
}

function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
  } 

btnAutomatical.onclick = function () {
  inc = inc + 1;

  if (inc == 2) {
    clearInterval(interval);
    inc = 0;
    resetColor();
  } else {
    interval = setInterval(() => {
      changeColorBut2();
    }, 300);
    activeLine = 0;
  }
};

btnDown.onclick = function () {
  backIsEmpty();
  activeLine = 0;
  interval1 = setInterval(() => {
    changeColorBut1();
  }, 300);
};
