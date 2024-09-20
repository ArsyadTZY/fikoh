document.addEventListener('DOMContentLoaded', () => {
    const showMessageBtn = document.getElementById('showMessageBtn');
    const personalMessage = document.getElementById('personalMessage');

    showMessageBtn.addEventListener('click', () => {
        personalMessage.textContent = "kiaa maafin aku kalau waktu itu kalimat aku nyakitin hati kamu. aku minta maaf banget sama kamu harusnya aku ga pantes bilang kaya gitu. apalgi nge post soal itu. aku gatau kamu marah apa ngga soal itu tapi aku minta maaff banget sama kamu aku ga bermaksud buat manas²in kamu. jujur aku sama dia itu temen sekarang ga lebih. tapi waktu itu aku nyesel ga nahan kamu. aku pikir kalau aku nahan kamu kamu bakal nolak gitu aja ternyata ngga yaa? maafin aku. maaf banget sekali lagi ga seharusnya aku ngelakuin itu ke kamu. aku bukan ngajak kamu balik ke aku tapi aku mau minta maaff ternyata aku se jahat itu sama kamu. maafin aku kiaa..";
        showMessageBtn.style.display = 'none'; // Sembunyikan tombol setelah pesan ditampilkan
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Makasi Cantikk Udah mau Isi!');
        contactForm.reset(); // Reset form setelah pengiriman
    });
});
