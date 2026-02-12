// Soal 4: Menghitung total dan rata-rata peserta

const dataPeserta = [18, 15, 10, 10];
let total = 0;

for (let i = 0; i < dataPeserta.length; i++) {
  total += dataPeserta[i];
}

const rataRata = total / dataPeserta.length;

console.log("Total peserta:", total);
console.log("Rata-rata peserta:", rataRata);
