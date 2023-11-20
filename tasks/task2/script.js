const console_log = document.querySelector('#consoleLog');
const alert_command = document.querySelector('#alert');
const prompt_command = document.querySelector('#prompt');

console_log.addEventListener('click', () => {
    alert("Служит для вывода информации в консоль");
})
alert_command.addEventListener('click', () => {
    alert("Служит для вывода информации в модальном окне");
})
prompt_command.addEventListener('click', () => {
    alert("Служит для получения данных от пользователя на веб-странице");
})