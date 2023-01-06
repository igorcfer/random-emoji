const btnElement = document.getElementById("btn");
const emojiNameElement = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=ba4474e948b87c6dad42f7fad49364cf4d37b877"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnElement.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btnElement.innerText = emoji[randomNumber].emojiName;
  emojiNameElement.innerText = emoji[randomNumber].emojiCode;
});
