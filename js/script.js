// Suavizar rolagem para os links do menu
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botões de contato com mensagem de alerta
document.querySelectorAll('.btn-whatsapp, .btn-instagram').forEach(btn => {
    btn.addEventListener('click', function (e) {
        alert(`Você será redirecionado para o ${this.textContent}`);
    });
});

// Animação de header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mostrar serviços adicionais progressivamente
let servicesVisible = 4;
const services = document.querySelectorAll('.service');
const loadMoreButton = document.getElementById('loadMore');

services.forEach((service, index) => {
    if (index < servicesVisible) {
        service.classList.add('visible');
    }
});

loadMoreButton.addEventListener('click', () => {
    servicesVisible += 4;
    services.forEach((service, index) => {
        if (index < servicesVisible) {
            service.classList.add('visible');
        }
    });
    if (servicesVisible >= services.length) {
        loadMoreButton.style.display = 'none';
    }
});

// Lazy loading das imagens (carregar imagens conforme o usuário rola a página)
const lazyImages = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');
            observer.unobserve(img);
        }
    });
}, { rootMargin: "0px 0px 200px 0px" });

lazyImages.forEach(image => {
    imageObserver.observe(image);
});
