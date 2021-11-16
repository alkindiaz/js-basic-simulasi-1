/**
 * WHAT IS MY EMAIL PROVIDER?
 * ==========================
 *
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Buatlah sebuah proses yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh:
 *   - Input  : icha@gmail.com
 *   - Output : Your email provider is gmail
 *     (tidak menggunakan .com di belakang)
 * 
 * RULES:
 *   - Tidak diperbolehkan menggunakan built-in function:
 *     .map .filter .reduce .split .join .indexOf .findIndex .substring
 */

 function getProvider(email) {
    let temp = ''
    let flag = false;
    for(let i = 0; i < email.length; i++) {
        if(email[i-1] === "@") {
            flag = true
        } else if (email[i] === ".") flag = false
        if(flag) {
            temp += email[i]
        }
    }
    return `your email provider is ${temp}`
}

console.log(getProvider('alkindi@yahoo.com'))
console.log(getProvider('lisa@gmail.com'))
console.log(getProvider('naruto@konoha.com'))
