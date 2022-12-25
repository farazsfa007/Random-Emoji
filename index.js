const btnEl=document.getElementById("btn");
const emojiNameEl=document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=5137f6c81eff5919bfa145e66b04952dcb735d5c");

   var data = await response.json()

    console.log(data);

    for(let i = 1 ; i < 1500 ; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();
// console.log(emoji);

btnEl.addEventListener("click",()=>{

    const randomNum = Math.floor(Math.random() * emoji.length);
    console.log(randomNum);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;

});