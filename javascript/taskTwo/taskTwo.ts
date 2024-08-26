
// Modify myText html element
const button = document.getElementById("btn") as HTMLButtonElement | null;

if (button != null) {
  button.addEventListener("click", () => {
    const newText = document.getElementById("myText");
    newText!.innerText = "Hello, Check!";
  });
}



