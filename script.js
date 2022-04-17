// Mini Games is mini program.
function miniGames() {
  const bahan = ["Bawang", "Seledri", "Apel", "Pare", "Jagung", "Kol", "Tomat"];
  const satuan = ["ohm", "Ampere", "Volt", "Newton", "Joule", "Watt"];

  if (true) {
    const prompt = Math.floor(Math.random() * 100) + 1;
    let random = Math.floor(Math.random() * 27) + 1;
    let random2 = Math.floor(Math.random() * 13) + 1;
    let random3 = Math.floor(Math.random() * 12) + 1;
    const result = random * prompt;
    const result2 = random2 * prompt;
    const result3 = random3 * prompt;
    const bahanAcak = bahan[Math.floor(Math.random() * bahan.length)];
    const powerAcak = satuan[Math.floor(Math.random() * satuan.length)];

    if (prompt) {
      document.getElementById("resultIndex").innerHTML = result.toLocaleString() + " Orbs";
      document.getElementById("result2Index").innerHTML = result2.toLocaleString() + ` ${bahanAcak}`;
      document.getElementById("result3Index").innerHTML = result3.toLocaleString() + " Koin";
      
      document.getElementById("ket").innerHTML = `*Anda telah menggunakan power sebesar ${prompt} ${powerAcak}. Dan anda mendapatkan...`;
      
    } else {
      window.alert("Err! Sepertinya anda belum memasukkan angka pada sesi form, atau ada unsur huruf ketika anda memasukkannya... Jika merasa ada yang salah segera hubungi pihak pengembang melalui twitter di https://twitter.com/goose07");
    }
  }
}