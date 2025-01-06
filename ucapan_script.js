document.addEventListener("DOMContentLoaded", function() {
    // Hujan Matcha
    const matchaRainContainer = document.querySelector(".matcha-rain");
    const numberOfMatcha = 50; // Jumlah gambar matcha yang jatuh

    for (let i = 0; i < numberOfMatcha; i++) {
        const matcha = document.createElement("img");
        matcha.src = "foto3.png"; // Ganti dengan path gambar matcha
        matcha.classList.add("matcha");
        
        // Atur posisi awal acak
        matcha.style.left = Math.random() * 100 + "vw";
        matcha.style.animationDuration = Math.random() * 2 + 3 + "s"; // Durasi jatuh acak antara 3 hingga 5 detik
        matcha.style.animationDelay = Math.random() * 5 + "s"; // Delay acak hingga 5 detik
        
        matchaRainContainer.appendChild(matcha);
    }

    // Pop-up
    const buttons = document.querySelectorAll('.ucapanButton');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerHTML = `<span class="close">&times;</span><p>${message}</p>`;
            document.body.appendChild(popup);

            // Tampilkan pop-up
            popup.style.display = 'block';

            // Tambahkan event listener untuk menutup pop-up
            popup.querySelector('.close').addEventListener('click', () => {
                popup.style.display = 'none';
                document.body.removeChild(popup);
            });
        });
    });
});
