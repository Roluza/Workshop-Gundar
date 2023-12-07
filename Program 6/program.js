function buatObjectKucing(nama, jenis, warna) {
    var kucing = {};
    kucing.nama = nama;
    kucing.jenis = jenis;
    kucing.warna = warna;
    kucing.bersuara = function() {
        return "Meow..";
    }
    return kucing;
}

var kucing1 = buatObjectKucing("Milo", "Persia", "Putih");

document.write(kucing1.nama + "<br>")
document.write(kucing1.jenis + "<br>")
document.write(kucing1.warna + "<br>")
document.write(kucing1.bersuara() + "<br>")