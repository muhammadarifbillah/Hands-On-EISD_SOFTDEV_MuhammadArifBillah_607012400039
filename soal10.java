// Soal 10: Simulasi peminjaman buku

public class soal10 {
    public static void main(String[] args) {
        String[] antrian = {"Alya", "Bima", "Citra", "Doni", "Eka", "Farah"};
        int bukuTersedia = 4;

        for (int i = 0; i < antrian.length; i++) {
            if (bukuTersedia > 0) {
                System.out.println(antrian[i] + " berhasil meminjam buku");
                bukuTersedia--;
            } else {
                System.out.println(antrian[i] + " gagal meminjam buku");
                break;
            }
        }
    }
}
