const darkMode = document.querySelector("#dark-mode");
const bodyPage = document.querySelector("body");
const mainStyle = document.querySelector(".main-content");

darkMode.addEventListener("click", () => {
  if (
    bodyPage.style.backgroundColor === "black" ||
    bodyPage.style.color === "white" ||
    mainStyle.style.borderLeftColor === "white"
  ) {
    black = bodyPage.style.backgroundColor = "white";
    textColor = bodyPage.style.color = "black";
    borderLeft = mainStyle.style.borderLeftColor = "black";
    borderRight = mainStyle.style.borderRightColor = "black";

    localStorage.setItem("background", black);
    localStorage.setItem("color", textColor);
    localStorage.setItem("borderL", borderLeft);
    localStorage.setItem("borderR", borderRight);
  } else {
    let black = (bodyPage.style.backgroundColor = "black");
    let textColor = (bodyPage.style.color = "white");
    let borderLeft = (mainStyle.style.borderLeftColor = "white");
    let borderRight = (mainStyle.style.borderRightColor = "white");

    localStorage.setItem("background", black);
    localStorage.setItem("color", textColor);
    localStorage.setItem("borderL", borderLeft);
    localStorage.setItem("borderR", borderRight);
  }
});

window.onload = () => {
  let bg = localStorage.getItem("background");
  let colorRecover = localStorage.getItem("color");
  let bL = localStorage.getItem("borderL");
  let bR = localStorage.getItem("borderR");

  bodyPage.style.backgroundColor = bg;
  bodyPage.style.color = colorRecover;
  mainStyle.style.borderLeftColor = bL;
  mainStyle.style.borderRightColor = bR;
};
