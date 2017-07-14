
// eventTarget.addEventListener(тип_события, обработчик, фаза);
// var.addEventListener("click", function, false);

/*<table id="outside">
    <tr><td id="t1">один</td></tr>
    <tr><td id="t2">два</td></tr>
</table>*/

// Функция изменяет содержимое t2
function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "три") {
        t2.firstChild.nodeValue = "два";
    } else {
        t2.firstChild.nodeValue = "три";
    }
}

// Добавляет слушателя событий для таблицы
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);




//document.onclick = function() {
//	alert("You clicked somewhere in the document");
//};

function prepareEventHandlers() {
    var myImage = document.getElementById("mainImage");
    myImage.onclick =  function() {
        alert("You clicked the image");
    }
}

window.onload = function() {
    // prep anything we need to
    prepareEventHandlers();
};