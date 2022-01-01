// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  //if target clicked on within the buttons div has certain elements then perform certain actions based off those elements
  //add event listener to parent element
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColour();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColour();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColour();
  }
});

function setColour() {
  //export colour setting into function
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
