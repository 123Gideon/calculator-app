var inputbox = document.getElementById("inputbox");
var buttons = document.querySelectorAll("button");
console.log(buttons);
var result = "";

for (var i of buttons) {
  console.log(i);
  i.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log(buttontext);
    if (buttontext == "X") {
      buttontext = "*";
      result += buttontext;
      inputbox.value = result;
    } else if (buttontext == "C") {
      result = "";
      inputbox.value = result;
    } else if (buttontext == "=") {
      inputbox.value = eval(result);
    } else if (buttontext == ">") {
      result= result.substring(0, result.length-1);
      inputbox.value = result;
    } else {
      result += buttontext;
      inputbox.value = result;
    }
  });
}
