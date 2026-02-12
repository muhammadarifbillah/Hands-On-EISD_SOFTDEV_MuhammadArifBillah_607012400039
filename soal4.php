<?php
// Soal 3: Validasi data pendaftaran

function validasiData($nama, $email, $divisi, $jumlah) {
    if (empty($nama) || empty($email) || empty($divisi)) {
        return "Data tidak valid";
    }

    if (strpos($email, "@") === false) {
        return "Data tidak valid";
    }

    if (!is_numeric($jumlah) || $jumlah < 1) {
        return "Data tidak valid";
    }

    return "Data valid";
}

echo validasiData("Alya", "alya@gmail.com", "Web", 5);
?>
