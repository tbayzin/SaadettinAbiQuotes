
function generateJokes() {
  var random = sozler[Math.floor(Math.random()*sozler.length)]
  console.log(random);

  document.getElementById("myHeader").innerHTML = random;
}

var sozler = [
  "Çok iyi ya",
  "Reyiz",
  "Yav kardeşim",
  "Ne demek yok",
  "Bizde baharat olmaz,herşey sade",
  "Şu işin aciliyeti vardı",
  "okay okay I will work",
  "Şimdi orası şöyle tasarlandı ..",
  "Benim ikinci title'ım JR Unity Game developer",
  "Onu İsmaile sor",
  "Oluyodur olm ya,göster bakim",
  "Bu komponent yapısı çok güzel oldu",
  "'Bizzat' lafına gıcık olurum.",
  "Orayı halledersek bizi bayağı rahatlatıcak",
  "Ben 24 saat çalışırım",
  "Hamburger mi diyosun İsmail.",
  "Yani bence öyle.",
  "Repository pattern ne olm. Öyle bir standart yok."
  "Cumartesi de gelebiliriz."
];
