// Версия 2.
// Упрощение кода

const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
    "var1", "var2", "var3", "var4", "var5", "var6", "speach"
];

function getFormValues() {
    let obj = {};

    fields.forEach(function (field) {
       obj[field] = $("input[name=" + field +"]")[0].value;
    });

    return obj;
};


function handleButton() {
    // взять данные по dataUrl, вытащить их и передать в handleData
    $.getJSON(dataURL, handleData);

    // можно спрятать форму
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


// Версия 1 функции. Решение "в лоб"
function handleDataVerOne(data) {
    let finalMessage = "";

    let var1 = $("input[name=var1]")[0].value;
    let var2 = $("input[name=var2]")[0].value;
    let var3 = $("input[name=var3]")[0].value;
    let var4 = $("input[name=var4]")[0].value;
    let var5 = $("input[name=var5]")[0].value;
    let var6 = $("input[name=var6]")[0].value;
    let speach = $("input[name=speach]")[0].value;

    data["text"].forEach(function (item, index) {
            item = item.replace("{var1}", var1);
            item = item.replace("{var2}", var2);
            item = item.replace("{var3}", var3);
            item = item.replace("{var4}", var4);
            item = item.replace("{var5}", var5);
            item = item.replace("{var6}", var6);
            item = item.replace("{speach}", speach);

            finalMessage = finalMessage + item + "<br>";
        }
    );

    $("div#result").html(finalMessage);

}

// Найти объект с id=button-fetch (наша кнопка) и
// по событию click - привязать к ней функцию handleButton
//
function init() {
    $("#button-fetch").click(handleButton);
}

// когда документ готов
$(document).ready(init);
