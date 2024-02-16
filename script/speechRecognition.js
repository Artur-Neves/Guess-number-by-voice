const number = document.querySelector(".box");
const element = document.getElementById("chute");
const marker = document.getElementById("marker");
const secretNumber = generateRandomNumber();
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-BR";
recognition.start();
recognition.addEventListener("result", onSpeak);
function onSpeak(event) {
  let guess = event.results[0][0].transcript;
  number.textContent = guess;
  validateNumber(guess);
}
recognition.addEventListener("end", ()=> recognition.start());
