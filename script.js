// Mini Games is mini program.
function miniGames() {
  const alpha = window.confirm("Apakah anda ingin bermain gamenya?");

  if (alpha) {
    const prompt = parseInt(window.prompt("Masukkan Angka! *bebas"));
    let random = Math.floor(Math.random() * 10) + 1;
    const result = random * prompt;

    if (prompt) {
      window.alert("Buka Consolenya Sekarang!")
      console.info(result + " Orbs telah didapatkan!");
    } else {
      window.alert("Buka Consolenya Sekarang!");
      console.info("Sepertinya anda belum memasukkan angka pada sesi prompt.");
    }
  } else {
    console.info("Anda telah menolak pengajakan game, anda sangat sus.");
  };
};