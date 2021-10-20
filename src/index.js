import "./styles.css";

let input = document.getElementById("inp-txt");
let h1Button = document.getElementById("h1");
let h2Button = document.getElementById("h2");
let h3Button = document.getElementById("h3");
let output = document.getElementById("output");

h1Button.addEventListener("click", handleH1);
h2Button.addEventListener("click", handleH2);
h3Button.addEventListener("click", handleH3);

function handleH1() {
  output.innerHTML = "";
  let inputvalue = input.value;
  let h1Element = document.createElement("h1");
  h1Element.innerText = inputvalue;
  output.appendChild(h1Element);
}

function handleH2() {
  output.innerHTML = "";
  const inputvalue = input.value;
  let h2Element = document.createElement("h2");
  h2Element.innerText = inputvalue;
  output.appendChild(h2Element);
}
function handleH3() {
  output.innerHTML = "";
  let inputvalue = input.value;
  let h3Element = document.createElement("h3");
  h3Element.innerText = inputvalue;
  output.appendChild(h3Element);
}
