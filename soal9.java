// Soal 9: Simulasi pendaftaran berdasarkan kuota

public class soal9 {
    public static void main(String[] args) {
        String[] pendaftar = {"Alya", "Bima", "Citra", "Doni"};
        int kuota = 3;

        System.out.println("Peserta diterima:");
        for (int i = 0; i < pendaftar.length; i++) {
            if (i < kuota) {
                System.out.println("- " + pendaftar[i]);
            } else {
                System.out.println("\nPeserta ditolak:");
                System.out.println("- " + pendaftar[i]);
                break;
            }
        }
    }
}
