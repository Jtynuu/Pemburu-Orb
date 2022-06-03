// Deklarasi Konten
const satuan = ["ohm", "Ampere", "Volt", "Newton", "Joule", "Watt"];
const kata = ["*Anda berburu di hutan liar dengan kekuatan ", "*Anda memancing di sungai dengan kekuatan ", "*Anda merampok bank dengan kekuatan ", "*Anda melakukan meditasi dengan kekuatan ", "*Anda makan buah duren dengan kekuatan "];

// Function Utama
function miniGames() {
  const rand = Math.floor(Math.random() * 100) + 1;
  const random = Math.floor(Math.random() * 1) + 1;
  const result = random * rand;
  const jum = `${rand} ${satuan[Math.floor(Math.random() * satuan.length)]}. `;
  
  document.getElementById("ket").innerHTML = kata[Math.floor(Math.random() * kata.length)] + jum + "Dan anda mendapatkan...";
  document.getElementById("resultIndex").innerHTML = result.toLocaleString() + " Orbs";
}