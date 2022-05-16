const email = document.getElementById("email");
const btnSend = document.getElementById("submit");
const error = document.getElementById("error");
const leyend = document.getElementById("leyend");
const sent = document.getElementById("sent");

btnSend.addEventListener("click", (e) => {
  e.preventDefault()
  let validRegex = /\S+@\S+\.\S+/;

  if (email.value.match(validRegex)) {
    error.classList.remove("warning");
    leyend.classList.add("leyend-hidden");
    sent.classList.remove("sent-hidden");

    email.value = "";
  } else {
    error.classList.add("warning");
    leyend.classList.remove("leyend-hidden");
    sent.classList.add("sent-hidden");
  }
});
