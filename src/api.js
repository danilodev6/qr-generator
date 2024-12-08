// Selecting DOM
const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const button = document.getElementById("button");
const input = document.getElementById("inputText");
let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");
let qrBox = document.getElementById("qrBox");

// function call API
const createQr = async (text) => {
  const res = await fetch(`${apiURL}${text}`);
  if (res.ok) {
    qrCode.src = `${apiURL}${text}`;
    !qrBox.classList.contains("show-img")
      ? qrBox.classList.toggle("show-img") && qrText.classList.toggle("showup")
      : void 0;
  }
  input.value = "";
  qrText.innerText = text;
};

// const createQr = (text) => {
//   qrCode.src = apiURL + text;
// };

// Add even listener
button.addEventListener("click", () => {
  createQr(input.value);
});

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    createQr(input.value);
  }
});
