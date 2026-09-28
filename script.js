// ==============================
// PERSONAL SETTINGS
// ==============================

const correctPassword = "cutie pie";


// ==============================
// PASSWORD
// ==============================

const lockScreen =
  document.getElementById("lockScreen");

const site =
  document.getElementById("site");

const passwordForm =
  document.getElementById("passwordForm");

const passwordInput =
  document.getElementById("passwordInput");

const passwordError =
  document.getElementById("passwordError");


passwordForm.addEventListener("submit", (e) => {

  e.preventDefault();

  if (
    passwordInput.value
      .trim()
      .toLowerCase() === correctPassword
  ) {

    lockScreen.classList.add("hidden");

    site.classList.remove("hidden");

    localStorage.setItem(
      "mylaUnlocked",
      "yes"
    );

    startMusic();

  } else {

    passwordError.textContent =
      "Not quite… try again, my love ♡";

    passwordInput.value = "";

    passwordInput.focus();

  }

});


// ==============================
// LOCK AGAIN WHEN PAGE OPENS
// ==============================

// Delete this line if you want the website
// to remember that it was unlocked.

localStorage.removeItem("mylaUnlocked");


// ==============================
// MUSIC
// ==============================

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

let musicStarted = false;


function startMusic() {

  music.volume = 1.0;

  music.play()
    .then(() => {

      musicStarted = true;

      musicBtn.innerHTML =
        "♫ <span>Music on</span>";

    })
    .catch(() => {});

}


musicBtn.addEventListener("click", () => {

  if (music.paused) {

    music.play();

    musicBtn.innerHTML =
      "♫ <span>Music on</span>";

  } else {

    music.pause();

    musicBtn.innerHTML =
      "♫ <span>Music off</span>";

  }

});


// ==============================
// SURPRISE BUTTON
// ==============================

document
  .getElementById("surpriseBtn")
  .addEventListener("click", () => {

    showToast(
      "You found a tiny secret: I love you more than yesterday. ♡"
    );

    burstHearts(18);

  });


// ==============================
// HEART BUTTON
// ==============================

document
  .getElementById("heartBtn")
  .addEventListener("click", () => {

    burstHearts(55);

    showToast(
      "One for every little reason you make me smile. ♡"
    );

  });


// ==============================
// HEART ANIMATION
// ==============================

function burstHearts(count) {

  for (let i = 0; i < count; i++) {

    const h =
      document.createElement("div");

    h.className = "heart";

    h.textContent =
      Math.random() > 0.25
        ? "♡"
        : "✦";

    h.style.left =
      Math.random() * 100 + "vw";

    h.style.bottom =
      "-20px";

    h.style.setProperty(
      "--x",
      (Math.random() * 240 - 120) + "px"
    );

    h.style.animationDuration =
      (1.8 + Math.random() * 2.2) + "s";

    document.body.appendChild(h);

    setTimeout(() => {

      h.remove();

    }, 4500);

  }

}


// ==============================
// REASON CARD ANIMATION
// ==============================

document
  .querySelectorAll(".reason-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      card.animate(

        [
          {
            transform: "scale(1)"
          },

          {
            transform: "scale(.97)"
          },

          {
            transform: "scale(1)"
          }
        ],

        {
          duration: 260
        }

      );

    });

  });


// ==============================
// TOAST MESSAGE
// ==============================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}
