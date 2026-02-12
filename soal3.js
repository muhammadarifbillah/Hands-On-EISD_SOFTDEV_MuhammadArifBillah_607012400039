// Soal 2: Menentukan status pendaftaran

function cekStatusPendaftaran(kuota, terdaftar) {
  if (terdaftar < kuota - 3) {
    return "Pendaftaran diterima";
  } else if (terdaftar < kuota) {
    return "Hampir penuh";
  } else if (terdaftar === kuota) {
    return "Pendaftaran ditutup";
  } else {
    return "Pendaftaran ditolak";
  }
}

console.log(cekStatusPendaftaran(20, 18));
