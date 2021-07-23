const fonts = [
  "Kirang Haerang",
  "Indie Flower",
  "Rye",
  "Amatic SC",
  "Bangers",
  "Fredericka the Great",
  "Pacifico",
  "Great Vibes",
  "Kaushan Script",
  "Pirata One",
  "Monoton",
  "Fredericka the Great",
  "Bungee Inline",
  "Akronim",
  "Wallpoet",
  "Bungee Shade",
  "Megrim",
  "Waiting for the Sunrise",
  "Emilys Candy",
  "Limelight",
  "Creepster",
  "Finger Paint",
  "Faster One",
  "DotGothic16",
  "Codystar",
  "ARB_85_Poster_Script_JAN-39_FRE",
  "CloisterBlack",
  "dameron",
];

const rand = () => {
  let letters = document.querySelectorAll(".letter");

  let introAnimation = setInterval(function () {
    letters.forEach((letter) => {
      let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];

      letter.style.fontFamily = randomFont;
    });
  }, 350);
};

const seeVarriants = () => {
  let x = document.getElementById("name");
  x.remove();

  let h2 = document.createElement("h2");
  h2.setAttribute("id", "name");
  h2.setAttribute("class", "loki");
  document.getElementById("container").appendChild(h2);

  let input = document.getElementById("inputName").value;
  let arr = [...input];
  // console.log(arr);
  arr.forEach(function (item) {
    // console.log(item);
    document.getElementById("name").innerHTML +=
      '<p class="letter">' + item + "</p>";
  });

  let letters = document.querySelectorAll(".letter");

  // const rollIntro = () => {
  //   letters.forEach((letter) => {
  //     let randomFontIndex = Math.floor(Math.random() * fonts.length);
  //     let randomFont = fonts[randomFontIndex];

  //     letter.style.fontFamily = randomFont;
  //   });
  // };

  let introAnimation = setInterval(function () {
    letters.forEach((letter) => {
      let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];

      letter.style.fontFamily = randomFont;
    });
  }, 350);
};
