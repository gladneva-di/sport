// отправка формы

const submitBtn = document.querySelector(".submit__button");
const f = document.querySelector(".f__form");

console.clear();

const validate = new JustValidate("#form", {
  errorLabelStyle: {
    color: "#EF6461",
  },
});

const phone = document.querySelector("#phone");
const button = document.querySelector(".form__btn");
const im = new Inputmask("+7(999)999-99-99");
im.mask(phone);

validate
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
    {
      rule: "customRegexp",
      value: /[A-Za-zА-яЁё]/gi,
      errorMessage: "Недопустимый формат",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа",
    },
  ])
  .addField("#sport", [
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
    {
      rule: "customRegexp",
      value: /[A-Za-zА-яЁё]/gi,
      errorMessage: "Недопустимый формат",
    }
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Введите email",
    },
    {
      rule: "email",
      errorMessage: "Ошибка email",
    },
  ])
  .addField("#phone", [
    {
      validator: (value) => {
        const num = phone.inputmask.unmaskedvalue();
        return Boolean(Number(num) && num.length > 0);
      },
      errorMessage: "Введите телефон",
    },
    {
      validator: (value) => {
        const num = phone.inputmask.unmaskedvalue();
        return Boolean(Number(num) && num.length === 10);
      },
      errorMessage: "Введите телефон полностью",
    },
  ])
  .onSuccess((event) => {
    const formData = new FormData(document.getElementById("form"));
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          document.getElementById("form").reset();
          submitBtn.innerText = "Отправлено";
          // $.fancybox.close();
          $.fancybox.open({
            src: "#hidden_success",
            type: "inline",
          });
          setTimeout(function () {
            // $.fancybox.close();
          }, 5000);
        }
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
      });
  });
