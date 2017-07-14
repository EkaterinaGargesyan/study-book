
var emailField = document.getElementById("email");

// при клике на форму plaseholder "your name" меняется на пустую строку
emailField.onfocus = function() {
    if ( emailField.value == "your email") {
        emailField.value = "";
    }
};

// при клике на любое место за формой пустая строка меняется на plaseholder "your name"
emailField.onblur = function() {
    if ( emailField.value == "") {
        emailField.value = "your email";
    }
};
