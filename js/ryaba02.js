// Версия 2.
// Упрощение кода
// Начало в 01:12:00 на вебинаре
// Первоначальное решение - в файле ryaba.js


const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
    "var1", "var2", "var3", "var4", "var5", "var6", "speach"
];

function getFormValues() {
    let obj = {};

    fields.forEach(function (field) {
        obj[field] = $("input[name=" + field + "]")[0].value;
    });
    return obj;
};


function handleButton() {
    // взять данные по dataUrl, вытащить их и передать в handleData
    $.getJSON(dataURL, handleData);
    // cпрятать форму
    $("form#messages").hide();
}

function handleData(data) {
    let message = "";
    let values = getFormValues();

    data["text"].forEach(function (line) {
            for (key in values) {
                line = line.replace("{" + key + "}", values[key]);
            }
            message = message + line + "<br>";
        }
    );

    // выводим финальное сообщение
    $("div#result").html(message);

}

// Найти объект с id=button-fetch (наша кнопка) и
// по событию click - привязать к ней функцию handleButton
//
function init() {
    $("#button-fetch").click(handleButton);
}

// когда документ готов
$(document).ready(init);
