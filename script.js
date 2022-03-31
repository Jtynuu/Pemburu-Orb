// Mini Games is mini program.
function miniGames() {
  const alpha = window.confirm("Apakah anda mau lihat lebih lanjut untuk proyeknya?");

  if (alpha) {
    const prompt = window.prompt("Masukkan huruf tunggal. (A ~ E)");

    switch (prompt) {
      case 'A':
        console.info(Math.floor(Math.random() * 2) + 1 + " Poin telah didapatkan!");
        window.alert("Buka Consolenya Sekarang!");
        break;
      case 'B':
        console.info(Math.floor(Math.random() * 4) + 1 + " Poin telah didapatkan!");
        window.alert("Buka Consolenya Sekarang!");
        break;
      case 'C':
        console.info(Math.floor(Math.random() * 6) + 1 + " Poin telah didapatkan!");
        window.alert("Buka Consolenya Sekarang!");
        break;
      case 'D':
        console.info(Math.floor(Math.random() * 8) + 1 + " Poin telah didapatkan!");
        window.alert("Buka Consolenya Sekarang!");
        break;
      case 'E':
        console.info(Math.floor(Math.random() * 10) + 1 + " Poin telah didapatkan!");
        window.alert("Buka Consolenya Sekarang!");
        break;
      default:
        window.alert("Buka Consolenya Sekarang!");
        console.info("Sepertinya anda belum memasukkan kata kunci A-E pada form, atau mungkin anda memasukkan kata kunci yang salah. Silahkan klik tombol \"Mulai\" lagi.");
      };
    } else {
      console.info("Anda telah menolak pengajakan game, anda sangat sus.");
    };
  };