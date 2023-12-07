var mobil = {
    nama : "Xpander",
    merek : "Mitsubishi",
    tipeMobil : "Minibus",
    tahunDibuat : "2007",
    warna : "Putih",
    majuCepat : function() {
        return "Mobil ini melaju dengan kecepatan 300 km/h";
    },
    majuLambat : function() {
        return "Mobil ini melaju dengan kecepatan 10 km/h";
    },
    mundur : function() {
        return "Mobil ini bergerak ke belakang";
    },
    stop : function(){
        return "Mobil ini berhenti";
    }
}

mobil1 = mobil

document.write(mobil.nama + "<br>")
document.write(mobil.merek + "<br>")
document.write(mobil.majuCepat() + "<br>")
document.write(mobil.stop() + "<br>")

