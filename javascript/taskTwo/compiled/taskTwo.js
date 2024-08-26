// Modify myText html element
var button = document.getElementById("btn");
if (button != null) {
    button.addEventListener("click", function () {
        var newText = document.getElementById("myText");
        newText.innerText = "Hello, Check!";
    });
}
