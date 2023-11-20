const text_change_field = document.querySelector("#textChange");

text_change_field.addEventListener("click", function (e) {
  let user_input = prompt("Введите текст, чтобы поменять текст ссылки:");
  this.textContent = user_input;
});
