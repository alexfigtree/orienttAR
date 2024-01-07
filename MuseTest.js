import { MuseClient } from 'muse-js';

const muse = new MuseClient();

let button = document.createElement("button");
button.textContent = "Connect";
button.addEventListener("click", connect);
document.body.appendChild(button);
async function connect () {
  await muse.connect();
  await muse.start();
}