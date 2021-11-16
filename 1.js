/**
 * DISNEY ISLAND
 * =============
 * 
 * Buatlah pseudocode untuk kasus berikut:
 * 
 * Sebuah wahana bermain 'Disney Island' akan memberikan tarif sesuai dengan tinggi dan umur anak
 * dengan ketentuan sebagai berikut:
 *   - Umur 1 tahun ke bawah: Tampilkan 'Dilarang masuk'
 *   - Umur 2-3 tahun: Rp 30.000. Jika tinggi anak umur 2-3 tahun lebih dari 70cm maka tarif akan bertambah Rp. 10.000.
 *   - Umur 4-7 tahun: Rp 40.000. Jika tinggi anak umur 4-7 tahun lebih dari 120cm maka tarif akan bertambah Rp. 15.000.
 *   - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun lebih dari 150cm maka tarif akan bertambah Rp. 20.000.
 *   - Umur diatas 10 tahun : Rp 80.000.
 * 
 * Tampilkan tarif harga sesuai umur dan tinggi seorang anak!
 */

 let umur = 11
 let tinggi = 170 
 let tarif;
 if(umur <= 1) {
     console.log("Dilarang masuk")
 } else if (umur <= 3) {
     tarif = 30000
     if (tinggi > 70) {
         tarif += 10000
     }
     console.log(`umur ${umur} tarif => Rp ${tarif}`)
 } else if (umur <= 7) {
     tarif = 40000
     if(tinggi > 120) tarif += 15000
     console.log(`umur ${umur} tarif => Rp ${tarif}`)
 } else if (umur <= 10) {
     tarif = 50000
     if(tinggi > 150) tarif += 20000
     console.log(`umur ${umur} tarif => Rp ${tarif}`)
 } else {
     tarif = 80000
     console.log(`umur ${umur} tarif => Rp ${tarif}`)
 }