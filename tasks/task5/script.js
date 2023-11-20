let user_input = document.querySelector("#textField");
let duplicate_field = document.querySelector("#duplicateField");

//изменение текста и присваивание элементу duplicate_field on-the-fly
user_input.onkeyup = () => {
  duplicate_field.textContent = user_input.value;
};

//вывод текста в консоль
document.querySelector(".btn").addEventListener("click", function () {
  let field_input = duplicate_field.textContent;
  console.log(field_input);
});

//удаление текста из формы
document.querySelector(".btn").addEventListener("click", function (event) {
  duplicate_field.textContent = event.preventDefault();
});

document.querySelector(".clearBtn").addEventListener("click", function () {
  user_input.value = "";
});
