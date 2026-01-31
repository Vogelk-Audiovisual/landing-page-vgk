// ============================================
// VOGEL-K Landing Page - JavaScript
// ============================================

// Portfolio data
const portfolioData = [
    // Fotografia (6 imagens)
    { id: 1, category: 'fotografia', src: 'images/nic-02.jpeg', title: 'Paisagem Cinematográfica' },
    { id: 2, category: 'fotografia', src: 'images/bus-curitiba.jpeg', title: 'Arquitetura Urbana' },
    { id: 3, category: 'fotografia', src: 'images/mi-04.JPG', title: 'Retrato Profissional' },
    { id: 4, category: 'fotografia', src: 'images/paisagem-05.JPEG', title: 'Detalhe da Natureza' },
    { id: 5, category: 'fotografia', src: 'images/Tibagi-Guartelá-276.jpg', title: 'Fotografia de Rua' },
    { id: 31, category: 'fotografia', src: 'images/publico-01.jpeg', title: 'Fotografia Lifestyle' },
    
    // Vídeos (6 imagens)
    { id: 6, category: 'videos', src: 'images/portfolio-16-corporate-event.jpg', title: 'Produção de Vídeo' },
    { id: 7, category: 'videos', src: 'images/portfolio-22-video-production.jpg', title: 'Estúdio de Produção' },
    { id: 8, category: 'videos', src: 'images/portfolio-24-motion-graphics.jpg', title: 'Motion Graphics' },
    { id: 9, category: 'videos', src: 'images/portfolio-25-broadcast-studio.jpg', title: 'Estúdio de Transmissão' },
    { id: 10, category: 'videos', src: 'images/portfolio-27-sunset-cinematic.jpg', title: 'Vídeo Cinematográfico' },
    { id: 32, category: 'videos', src: 'images/portfolio-32-video-editing.jpg', title: 'Edição de Vídeo' },
    
    // Drone (6 imagens)
    { id: 11, category: 'drone', src: 'images/portfolio-06-drone-aerial.jpg', title: 'Aerial Drone' },
    { id: 12, category: 'drone', src: 'images/portfolio-07-construction-site.jpg', title: 'Acompanhamento de Obra' },
    { id: 13, category: 'drone', src: 'images/portfolio-08-drone-landscape.jpg', title: 'Paisagem Aérea' },
    { id: 14, category: 'drone', src: 'images/portfolio-09-industrial-site.jpg', title: 'Site Industrial' },
    { id: 15, category: 'drone', src: 'images/portfolio-10-coastal-drone.jpg', title: 'Drone Costeiro' },
    { id: 33, category: 'drone', src: 'images/portfolio-33-drone-sunset.jpg', title: 'Drone ao Pôr do Sol' },
    
    // Imobiliário (6 imagens)
    { id: 16, category: 'imobiliario', src: 'images/portfolio-11-real-estate-interior.jpg', title: 'Interior Imobiliário' },
    { id: 17, category: 'imobiliario', src: 'images/portfolio-12-property-exterior.jpg', title: 'Exterior de Propriedade' },
    { id: 18, category: 'imobiliario', src: 'images/portfolio-13-kitchen-design.jpg', title: 'Design de Cozinha' },
    { id: 19, category: 'imobiliario', src: 'images/portfolio-14-bedroom-luxury.jpg', title: 'Quarto de Luxo' },
    { id: 20, category: 'imobiliario', src: 'images/portfolio-15-pool-property.jpg', title: 'Propriedade com Piscina' },
    { id: 34, category: 'imobiliario', src: 'images/portfolio-34-real-estate-modern.jpg', title: 'Imóvel Moderno' },
    
    // Corporativo (6 imagens)
    { id: 21, category: 'corporativo', src: 'images/portfolio-20-corporate-team.jpg', title: 'Time Corporativo' },
    { id: 22, category: 'corporativo', src: 'images/zenzen-01.jpeg', title: 'Espaço Criativo' },
    { id: 23, category: 'corporativo', src: 'images/zenzen-02.jpeg', title: 'Fotografia de Produto' },
    { id: 35, category: 'corporativo', src: 'images/IMG_3323.JPG', title: 'Reunião Corporativa' },
    { id: 29, category: 'corporativo', src: 'images/DSC06777.jpg', title: 'Produção Corporativa' },
    { id: 23, category: 'corporativo', src: 'images/zenzen-03.jpeg', title: 'Suite de Edição' },
    
    // Eventos (6 imagens)
    { id: 24, category: 'eventos', src: 'images/show-10.jpeg', title: 'Cerimônia de Casamento' },
    { id: 25, category: 'eventos', src: 'images/show-11.jpeg', title: 'Evento de Concerto' },
    { id: 26, category: 'eventos', src: 'images/show-05.jpeg', title: 'Celebração de Festa' },
    { id: 27, category: 'eventos', src: 'images/show-08.jpeg', title: 'Evento Especial' },
    { id: 30, category: 'eventos', src: 'images/show-01.jpeg', title: 'Evento Urbano' },
    { id: 36, category: 'eventos', src: 'images/show-04.jpeg', title: 'Festival' },

    // Eventos (6 imagens)
    { id: 37, category: 'gastronomia', src: 'images/04_004.jpg', title: 'Gastronomia' },
    { id: 38, category: 'gastronomia', src: 'images/02_002.jpg', title: 'Gastronomia' },
    { id: 39, category: 'gastronomia', src: 'images/20_020.jpg', title: 'Gastronomia' },
    { id: 40, category: 'gastronomia', src: 'images/19_019.jpg', title: 'Gastronomia' },
    { id: 41, category: 'gastronomia', src: 'images/08_008.jpg', title: 'Gastronomia' },
    { id: 42, category: 'gastronomia', src: 'images/07_007.jpg', title: 'Gastronomia' },
];

let currentFilter = 'todos';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Portfolio filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderPortfolio();
        });
    });
    
    // CTA button
    const ctaBtn = document.querySelector('.btn-cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            window.open('https://wa.me/5541991067398', '_blank');
        });
    }
}

// Render portfolio items
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';
    
    const filteredItems = currentFilter === 'todos' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === currentFilter);
    
    filteredItems.forEach((item, index) => {
        const isLarge = index === 0;
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${isLarge ? 'large' : ''}`;
        portfolioItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="portfolio-overlay">
                <div class="portfolio-info">
                    <p>Portfólio</p>
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Mobile menu styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 767px) {
        .nav-menu {
            display: none !important;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: rgba(10, 10, 10, 0.98);
            flex-direction: column;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        .nav-menu.active {
            display: flex !important;
        }
        
        .nav-menu li {
            padding: 0.75rem 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add scroll event for header shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});
