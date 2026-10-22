const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const startButton = document.querySelector("#start-button");
const toast = document.querySelector("#toast");

if (startButton && toast) {
  startButton.addEventListener("click", () => {
    toast.textContent = "Your next big idea starts now. Time to build!";
    toast.classList.add("visible");

    window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 2800);
  });
}