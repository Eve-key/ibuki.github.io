// const nameList = [{ name: "ココア" }, { name: "シャロ" }];

// const sum = (a) => a + 100;

// const list = (nameList) => {
//   return nameList.map((list) => (list["age"] = 18));
// };
// console.log(sum(1));
// console.log(list(nameList));
// console.log("Hello, World!");

function setBlue() {
  document.getElementById("text").style.color = "blue";
}

function setGreen() {
  document.getElementById("text").style.color = "green"; // 緑色に変更
}

function reset() {
  document.getElementById("text").style.color = "black";
}

let angle = 0;

const rotationInterval = 1000;
function rotateImage() {
  angle = (angle + 90) % 360;
  document.getElementById("image").style.transform = `rotate(${angle}deg)`;
}

// let a = setInterval(rotateImage, rotationInterval);
function start() {
  setInterval(rotateImage, rotationInterval);

  // const isYes = confirm("シャロ");
  // document.querySelector(".log").innerHTML = isYes;
  location.reload();
  console.log(location.href);
  console.log(window.innerHeight);
  console.log(window.innerWidth);
}

function stop() {
  clearInterval(setInterval(rotateImage, rotationInterval));
}

// const btn = document.getElementById("blue");

// btn.addEventListener("click", (event) => {
//   alert(event);
// });

class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static getName() {
    console.log(99);
  }
}

const user = new MyClass("シャロ", 18);
// const user = new MyClass();
// user.getName();
MyClass.getName();
console.log(user.name);
console.log(user.age);

const list = new Map();
list.set("シャロ", 18);
list.set("ココア", 18);
console.log(list.size);
