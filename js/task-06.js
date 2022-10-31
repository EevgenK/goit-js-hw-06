const input = document.querySelector("#validation-input");

const inputLength = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", checkInputedLength);

function checkInputedLength() {
  if (input.value.length === inputLength.dataset.length * 1) {
    input.classList.add("valid") || input.classList.replace("invalid", "valid");
  } else
    input.classList.add("invalid") ||
      input.classList.replace("valid", "invalid");
}
