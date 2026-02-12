// Soal 5: Deteksi email duplikat

const emails = [
  "Andi@gmail.com",
  "Budi@gmail.com",
  "Sari@gmail.com",
  "Andi@gmail.com",
  "Rina@gmail.com",
  "Budi@gmail.com"
];

const dataUnik = new Set();
const duplikat = [];

emails.forEach(email => {
  if (dataUnik.has(email) && !duplikat.includes(email)) {
    duplikat.push(email);
  }
  dataUnik.add(email);
});

if (duplikat.length > 0) {
  console.log("Email duplikat:", duplikat);
} else {
  console.log("Tidak ada data duplikat");
}
