const ucapanButton = document.getElementById('ucapanButton');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<span class="close">&times;</span><p>Happy Birthday for my prettiest Girl, Hope u Happy in this 22 years old</p>`;
    document.body.appendChild(popup);

    ucapanButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    const closePopup = popup.querySelector('.close');
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });