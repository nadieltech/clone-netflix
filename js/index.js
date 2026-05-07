// Salvar perfil ativo no localStorage quando clicado
const profileLinks = document.querySelectorAll('.profile-link');

profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const profile = link.querySelector('.profile');
        const name = profile.querySelector('figcaption').textContent;
        const image = profile.querySelector('img').src;
        
        // Armazena o perfil ativo no localStorage
        localStorage.setItem('activeProfile', JSON.stringify({
            name: name,
            image: image
        }));
    });
});
