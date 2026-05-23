const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageBox = document.getElementById("messageBox");
const countdown = document.getElementById("countdown");
const officialBox = document.getElementById("officialBox");

const sweetMessages = [
  "Maybe your heart needs one more day 🌙",
  "Sleep on it. The lanterns will still be here tomorrow ✨",
  "Rapunzel waited 18 years. I can wait one more day 💛",
  "This feels like a slow burn romance arc.",
  "Even Pascal thinks you should reconsider."
];

function createLanterns() {

  for (let i = 0; i < 25; i++) {

    const lantern = document.createElement("div");

    lantern.classList.add("lantern");

    lantern.style.left = Math.random() * 100 + "vw";

    lantern.style.animationDuration =
      (Math.random() * 5 + 8) + "s";

    document.body.appendChild(lantern);

    setTimeout(() => {
      lantern.remove();
    }, 12000);
  }
}

function lockNoButton() {

  const lastNo = localStorage.getItem("lastNo");

  if (!lastNo) return;

  const diff = 86400000 - (Date.now() - parseInt(lastNo));

  if (diff <= 0) {
    noBtn.disabled = false;
    countdown.innerHTML = "";
    return;
  }

  noBtn.disabled = true;

  const hours =
    Math.floor(diff / (1000 * 60 * 60));

  const mins =
    Math.floor((diff % (1000 * 60 * 60))
    / (1000 * 60));

  countdown.innerHTML =
    `Please think about it again tomorrow 💛 (${hours}h ${mins}m left)`;
}

setInterval(lockNoButton, 60000);

lockNoButton();

noBtn.addEventListener("click", () => {

  localStorage.setItem("lastNo", Date.now());

  const randomMessage =
    sweetMessages[Math.floor(Math.random() * sweetMessages.length)];

  messageBox.innerHTML = randomMessage;

  lockNoButton();
});

yesBtn.addEventListener("click", async () => {

  localStorage.setItem("official", "true");
  localStorage.setItem("officialDate", new Date());

  createLanterns();

  messageBox.innerHTML =
    "YOU SAID YES 😭✨";

  officialBox.innerHTML =
    "Officially girlfriends 💛✨";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  yesBtn.addEventListener("click", () => {

  localStorage.setItem("official", "true");
  localStorage.setItem("officialDate", new Date());

  createLanterns();

  messageBox.innerHTML =
    "YOU SAID YES 😭✨";

  officialBox.innerHTML =
    "Officially girlfriends 💛✨";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  console.log("starting");
  document.getElementById("yesForm").submit();
  console.log("done");

});

});
