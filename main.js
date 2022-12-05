const home = document.querySelector(".home");
const guest = document.querySelector(".guest");
const displayHome = document.getElementById("homeDisplay");
const displayGuest = document.getElementById("guestDisplay");
const buttons = document.querySelectorAll(".btn");
const newButton = document.querySelector(".newBtn");
let homeDisplay = 0;
let guestDisplay = 0;

function homeTitleColor() {
  const color = (home.style.color = "green");
}
function guestTitleColor() {
  const color = (guest.style.color = "green");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn1")) {
      homeDisplay += 1;
      homeTitleColor();
      displayHome.textContent = homeDisplay;
    } else if (button.classList.contains("btn2")) {
      homeDisplay += 2;
      homeTitleColor();
      displayHome.textContent = homeDisplay;
    } else if (button.classList.contains("btn3")) {
      homeDisplay += 3;
      homeTitleColor();
      displayHome.textContent = homeDisplay;
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("guestBtn1")) {
      guestDisplay += 1;
      guestTitleColor();
      displayGuest.textContent = guestDisplay;
    } else if (button.classList.contains("guestBtn2")) {
      guestDisplay += 2;
      guestTitleColor();
      displayGuest.textContent = guestDisplay;
    } else if (button.classList.contains("guestBtn3")) {
      guestDisplay += 3;
      guestTitleColor();
      displayGuest.textContent = guestDisplay;
    }
  });
});

newButton.addEventListener("click", () => {
  home.style.color = "";
  guest.style.color = "";
  homeDisplay = 0;
  guestDisplay = 0;
  displayHome.textContent = homeDisplay;
  displayGuest.textContent = guestDisplay;
});
