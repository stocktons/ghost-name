import { nameConstructor } from "./nameConstructor.js";

const $form = document.querySelector("form");
const $result = document.querySelector("#result");
const $name = document.querySelector("#name");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ghostName = nameConstructor($name.value);

  // Clear previous content
  $result.innerHTML = "";

  // Create spans for each letter with random vertical positions
  const letters = ghostName.split("").map((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;

    // If it's a space, add a specific width
    if (letter === " ") {
      span.style.width = "0.5rem"; // or whatever width you prefer
      span.style.display = "inline-block"; // ensure the width is respected
    }

    // Random vertical position between -100vh and 100vh
    const randomY = Math.floor(Math.random() * 200 - 100);
    span.style.setProperty("--start-y", `${randomY}vh`);

    span.className = `letter ${index % 2 === 0 ? "from-left" : "from-right"}`;
    span.style.animationDelay = `${index * 0.1}s`;
    return span;
  });

  console.log(letters);

  // Append all letters
  letters.forEach((span) => $result.appendChild(span));

  // Add the flicker class after letters assemble
  setTimeout(() => {
    $result.classList.remove("flicker");
    $result.offsetHeight; // Force reflow
    $result.classList.add("flicker");
  }, letters.length * 100 + 1000);
});
