document.addEventListener("DOMContentLoaded", function() {
    // Modal Popup
    const images = document.querySelectorAll(".gallery img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modal.innerHTML = `<img src="${image.src}" alt="${image.alt}"><span class="close">&times;</span>`;
            
            const closeModal = document.querySelector(".close");
            closeModal.addEventListener("click", () => {
                modal.style.display = "none";
            });
        });
    });

    // Hujan Matcha
    const matchaRainContainer = document.querySelector(".matcha-rain");
    const numberOfMatcha = 50; // Jumlah gambar matcha yang jatuh

    for (let i = 0; i < numberOfMatcha; i++) {
        const matcha = document.createElement("img");
        matcha.src = "matcha1.png"; // Ganti dengan path gambar matcha
        matcha.classList.add("matcha");
        
        // Atur posisi awal acak
        matcha.style.left = Math.random() * 100 + "vw";
        matcha.style.animationDuration = Math.random() * 2 + 3 + "s"; // Durasi jatuh acak antara 3 hingga 5 detik
        matcha.style.animationDelay = Math.random() * 5 + "s"; // Delay acak hingga 5 detik
        
        matchaRainContainer.appendChild(matcha);
    }

    // Pop-up
    const clickMeButton = document.getElementById('clickMeButton');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<span class="close">&times;</span><p>Eh salah bukan yang ini, tapi yang bawahnya, maapkan dea</p>`;
    document.body.appendChild(popup);

    clickMeButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    const closePopup = popup.querySelector('.close');
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
