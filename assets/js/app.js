const coinBtn = document.getElementById("coin");
const randomBtn = document.getElementById("random-btn");
const coinImage = document.getElementById("coin-image");
const resultEl = document.getElementById("result");

let isFlipping = false;

function flipCoin() {
  if (isFlipping) return;
  isFlipping = true;

  coinBtn.classList.add("coin--flipping");

  setTimeout(() => {
    const isHeads = Math.random() >= 0.5;
    coinImage.src = isHeads
      ? "./assets/images/heads.svg"
      : "./assets/images/tails.svg";
    resultEl.textContent = isHeads ? "Heads" : "Tails";
    coinBtn.classList.remove("coin--flipping");
    isFlipping = false;
  }, 600);
}

coinBtn.addEventListener("click", flipCoin);
randomBtn.addEventListener("click", flipCoin);
