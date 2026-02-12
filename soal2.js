// Soal 1: Menampilkan study group tersedia dan penuh

const studyGroups = [
  { nama: "Software Development", kuota: 20, terdaftar: 18 },
  { nama: "UI/UX Design", kuota: 15, terdaftar: 15 },
  { nama: "Technopreneur", kuota: 25, terdaftar: 10 },
  { nama: "Intelligence System", kuota: 10, terdaftar: 10 }
];

console.log("Study Group Tersedia:");
studyGroups.forEach(group => {
  if (group.terdaftar < group.kuota) {
    console.log("-", group.nama);
  }
});

console.log("\nStudy Group Penuh:");
studyGroups.forEach(group => {
  if (group.terdaftar >= group.kuota) {
    console.log("-", group.nama);
  }
});
