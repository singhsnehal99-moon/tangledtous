const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageBox = document.getElementById("messageBox");
const countdown = document.getElementById("countdown");
const officialBox = document.getElementById("officialBox");

let visits =
  localStorage.getItem("visits");

visits = visits ? parseInt(visits) + 1 : 1;

localStorage.setItem("visits", visits);
if (visits > 1) {

  messageBox.innerHTML =
    `The lanterns noticed you came back ✨<br>
     Visit #${visits}`;

}

const sweetMessages = [
  "Maybe your heart just needs a little more time 🌙",
  "Sleep on it. The lanterns will still be waiting tomorrow ✨",
  "Rapunzel waited 18 years. I can survive one more day 💛",
  "Some love stories are worth thinking carefully about.",
  "Even (Pedro) Pascal thinks we’d be cute together.",
  "No pressure. Just a tiny devastating amount of yearning.",
  "Maybe tomorrow your heart will feel a little braver ✨",
  "You don’t have to answer quickly for it to mean something.",
  "The stars and I will patiently wait for your answer 🌌",
  "I still think choosing us would be kinda wonderful.",
  "Honestly? I just really like you. A lot.",
  "The lanterns believe in us. Just saying.",
  "Take your time 💛 Some things are worth being sure about.",
  "Maybe this is just the beginning of our favorite story.",
  "Imagine how cute our anniversary stories would sound.",
  "Still rooting for us quietly over here ✨",
  "Maybe tomorrow will feel like the right moment.",
  "I think you’re someone really special.",
  "Future us would probably laugh at this moment together.",
  "You make my world softer in the nicest way.",
  "No dramatic speeches today. Just… I hope you say yes someday 💛",
  "I can wait a little longer for something meaningful.",
  "This website remains emotionally invested in you.",
  "Maybe the real treasure was the lesbians we became along the way.",
  "Somewhere out there, Flynn Rider is judging my coding skills.",
  "Tiny reminder: you are very, very loved.",
  "If feelings were lanterns, mine would probably cover the entire sky ✨",
  "I hope today was gentle with you 💛",
  "Okay. I’ll ask again tomorrow like a respectful little romantic."
];

const buttonTexts = [
  "Still Thinking? 💛",
  "Maybe Tomorrow? 🌙",
  "Take Your Time ✨",
  "The Lanterns Believe In Us 🏮",
  "Sleep On It? 💫"
];

const whyMessages = [
  "Because life feels softer with you in it.",
  "Because you make ordinary moments feel special.",
  "Because I look for you first.",
  "Because your existence genuinely makes me happy.",
  "Because talking to you feels easy.",
  "Because you feel like home in a way I can't explain.",
  "Because I want more moments with you.",
  "Because even my favorite songs sound better lately.",
  "Because you're the person I want to tell things to first.",
  "Because you matter to me. A lot."
];
const whyBtn =
  document.getElementById("whyBtn");

const pedroMessages = [
  "(Pedro) Pascal and Max have reviewed the situation. They ship it 💛",
  "Maximus would like to aggressively support this relationship.",
  "(Pedro) Pascal believes this is peak romance.",
  "(Pedro) Pascal says you’re really pretty today.",
  "Maximus has detected strong girlfriend potential.",
  "(Pedro) Pascal thinks your smile deserves its own lantern festival.",
  "The horse has spoken. The answer should probably be yes.",
  "(Pedro) Pascal and Max are emotionally invested now.",
];


noBtn.innerText =
  buttonTexts[
    Math.floor(Math.random() * buttonTexts.length)
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
  whyBtn.style.display = "none";

  await fetch("https://discord.com/api/webhooks/1507663788655120385/msFFiCa_6bexkyngcYB9b3stLXs8QLjZG-1trafs0HEbgc7JSIGAfEK1Ebr6F-JwMp_a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content:
        "🌕✨ SHE SAID YES 💛✨\n\nMISSION STATUS: OFFICIALLY GIRLFRIENDS."
    })
  });

});

if (whyBtn) {

  whyBtn.addEventListener("click", () => {

    const randomWhyMessage =
      whyMessages[
        Math.floor(Math.random() * whyMessages.length)
      ];

    messageBox.innerHTML =
      randomWhyMessage;
  });
}
  
  const pedro =
  document.getElementById("pedro");
if (pedro) {

pedro.onclick = function () {

  const randomPedroMessage =
    pedroMessages[
      Math.floor(Math.random() * pedroMessages.length)
    ];

  const bubble =
    document.getElementById("pedroBubble");

  if (bubble) {

    bubble.innerHTML =
      randomPedroMessage;

    bubble.style.opacity = "1";

    setTimeout(() => {
      bubble.style.opacity = "0";
    }, 4000);
  }
};
}
