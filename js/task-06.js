const input = document.querySelector("#validation-input");

const inputLength = Number(input.dataset.length);

input.addEventListener("blur", checkInputedLength);

function checkInputedLength() {
  if (input.value.length === inputLength) {
    input.classList.add("valid") || input.classList.replace("invalid", "valid");
  } else
    input.classList.add("invalid") ||
      input.classList.replace("valid", "invalid");
}
