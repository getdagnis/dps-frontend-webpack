import "./styles";
import { homepage } from "./containers";

document.querySelector("app").innerHTML = '<div class="app"></div>';
document.querySelector(".app").innerHTML = homepage;

const paymentButton = document.querySelector(
  ".dps-dashboard__right__top__button"
);
const statusRed = document.querySelector(".status-red");

paymentButton.addEventListener("click", (e) => {
  statusRed.classList.replace("status-red", "status-green");
  statusRed.innerHTML = "All due payments made";
  paymentButton.innerHTML = "Pay in advance";
});
