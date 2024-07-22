import "../styles/main.scss";
import "../styles/dropdown.scss";
import "../styles/welcome.scss";
import "./animate.js";

const btn = document.querySelector(".dropdown__button span");
const dropdownList = document.querySelector(".dropdown__list");
const listItems = document.querySelectorAll(".dropdown__list-item");
const inputHidden = document.querySelector(".dropdown__input-hidden");

  btn.addEventListener("click", () => {
      dropdownList.classList.toggle("dropdown__list-visible");
      btn.classList.toggle("active");
  });

// Выбор элементов списка, запоминание выбранного значения, закрытие списка

listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    document.querySelector(".dropdown__button span").innerText = target.innerText;
    document.querySelector(".dropdown__button").focus();
    inputHidden.value = target.dataset.value;
    dropdownList.classList.remove("dropdown__list-visible");
    btn.classList.remove("dropdown__button-active");
  });
});

// Закрытие дропдауна по клику вне списка

document.addEventListener("click", (e) => {
  if (e.target !== btn) {
    dropdownList.classList.remove("dropdown__list-visible");
    btn.classList.remove("dropdown__button-active");
  }
});

