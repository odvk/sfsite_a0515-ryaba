// В данном файле - первоначальное решение в лоб ----
// Более качественное решение с упрощением и сокращением кода в файле
// ryaba02.js
//

const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
    // взять данные по dataUrl, вытащить их и передать в handleData
    $.getJSON(dataURL, handleData);

    // можно прятать форму
    $("form#messages").hide();

    // let text = "Здесь могла быть ваша реклама";
    // $("#result").text(text);
}

function handleData(data) {
    let finalMessage = "";

    let obj = {
        var1: $("input[name=var1]")[0].value,
        var2: $("input[name=var2]")[0].value,
        var3: $("input[name=var3]")[0].value,
        var4: $("input[name=var4]")[0].value,
        var5: $("input[name=var5]")[0].value,
        var6: $("input[name=var6]")[0].value,
        speach: $("input[name=speach]")[0].value
    };

    data["text"].forEach(function (item, index) {
            for (key in obj) {
                item = item.replace("{" + key + "}", obj[key]);
            }
            finalMessage = finalMessage + item + "<br>";
        }
    );

    // выводим финальное сообщение
    $("div#result").html(finalMessage);
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

    // выведем finalMessage в консоль
    // console.log(finalMessage);
    // Можно вывести в консоль содержимое data["text"]
    // console.log(data["text"])
}

// --- Изначальный шаблон, который был в данном файле
function handleDataOrigin(data) {
    // кажется, какой-то из этих способов сработает
    //const var1 = $("input[name=var1]")[0].value()
    //const var1 = $("input[name=var1]").value()
    //const var1 = $("input[name=var1]")[0].default()

    // надо сделать так чтобы сообщения подменились на значения из формы
    let text = "Здесь могла быть ваша реклама";
    $("#result").text(text);
}


// Найти объект с id=button-fetch (наша кнопка) и
// по событию click - привязать к ней функцию handleButton
//
function init() {
    $("#button-fetch").click(handleButton);
}

// когда документ готов
$(document).ready(init);


//---------- Заметки из вебинара

// function handle (data) {
//     // console.log(data); // выводим весь объект, который пришел
// 	console.log(data["text"])
// 	console.log(data["text"])
// }

// получаем данные по dataURL и передать в функцию handle
// $.getJSON(dataURL, handle)

// $("div#result").text("Привет")


// Вопросы
// 1. Как присвоить переменной значение, возвращаемое $.getJSON?

//