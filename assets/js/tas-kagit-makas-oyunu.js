let hareketler = ["Taş","Kağıt","Makas"]
let secim = prompt("Lütfen bir hamle seçiniz:\n0)Taş\n1)Kağıt\n2)Makas");
let rastgeleSayi = Math.floor(Math.random() * 3);
let bilgisayarHamlesi = hareketler[rastgeleSayi];

if (secim === "0" && rastgeleSayi === 2) {
  alert("Tebrikler! Bilgisayar makas'ı tercih etti ve yenildi.");
} else if (secim === "2" && rastgeleSayi === 1) {
  alert("Tebrikler! Bilgisayar kağıdı tercih etti ve yenildi.");
} else if (secim === "1" && rastgeleSayi === 0) {
  alert("Tebrikler! Bilgisayar taşı tercih etti ve yenildi.");
} else if (rastgeleSayi === 0 && secim === "2") {
  alert("Bilgisayar taşı tercih ederek seni yendi :(");
} else if (rastgeleSayi === 2 && secim === "1") {
  alert("Bilgisayar makası tercih ederek seni yendi :(");
} else if (rastgeleSayi === 1 && secim === "0") {
  alert("Bilgisayar kağıdı tercih ederek seni yendi :(");
} else if(secim === "0" && rastgeleSayi === 0) {
  alert("Berabere!");
} else if (secim === "1" && rastgeleSayi === 1) {
  alert("Berabere!");
} else if (secim === "2" && rastgeleSayi === 2) {
  alert("Berabere!");
} else {
  alert("Yanlış bir sayı girdiniz! Lütfen tekrar deneyin!");
}