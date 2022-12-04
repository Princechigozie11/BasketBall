const headingTitle = document.querySelector(".displayHeading");
const displayHome = document.getElementById("homeDisplay");
const displayGuest = document.getElementById("guestDisplay");
const buttons = document.querySelectorAll(".btn");
const newButton = document.querySelector(".newBtn");
let homeDisplay = 0;
let guestDisplay = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn1")) {
      homeDisplay += 1;
      displayHome.textContent = homeDisplay;
    } else if (button.classList.contains("btn2")) {
      homeDisplay += 2;
      displayHome.textContent = homeDisplay;
    } else if (button.classList.contains("btn3")) {
      homeDisplay += 3;
      displayHome.textContent = homeDisplay;
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("guestBtn1")) {
      guestDisplay += 1;
      displayGuest.textContent = guestDisplay;
    } else if (button.classList.contains("guestBtn2")) {
      guestDisplay += 2;
      displayGuest.textContent = guestDisplay;
    } else if (button.classList.contains("guestBtn3")) {
      guestDisplay += 3;
      displayGuest.textContent = guestDisplay;
    }
  });
});

newButton.addEventListener("click", () => {
  homeDisplay = 0;
  guestDisplay = 0;
  displayHome.textContent = homeDisplay;
  displayGuest.textContent = guestDisplay;
});
