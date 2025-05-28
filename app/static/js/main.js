// main.js

// Attendre que tout soit chargé
$(document).ready(function () {

    // === Preloader ===
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });

    // === Smooth scroll pour les liens d’ancrage (#contact) ===
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 600);
    });

    // === Bouton "Back to Top" ===
    var backToTop = $('.back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });

    backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // === Active navigation based on current scroll position (optionnel si besoin) ===
    let sections = $('section'), nav = $('.navbar-nav');

    $(window).on('scroll', function () {
        let currentPos = $(this).scrollTop();
        sections.each(function () {
            let top = $(this).offset().top - 110,
                bottom = top + $(this).outerHeight();

            if (currentPos >= top && currentPos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // === Counter Up (si utilisé) ===
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // === Animations à l’apparition (Waypoints + Animate.css) ===
    $('.animate-on-scroll').each(function () {
        let element = $(this);
        element.waypoint(function () {
            element.addClass('animate__animated animate__fadeInUp');
        }, {
            offset: '75%'
        });
    });

});

//header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active'))  {
            if (!e.target.closest('.nav-container')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        }
    });
});

// resume a propos 
document.addEventListener('DOMContentLoaded', function() {
    // Animation des bulles au scroll
    const bubbles = document.querySelectorAll('.bubble');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    bubbles.forEach(bubble => {
        bubble.style.animationPlayState = 'paused';
        observer.observe(bubble);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const techSections = document.querySelectorAll('.tech-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.tech-header').classList.add('animate__animated', 'animate__fadeInDown');
                entry.target.querySelector('.tech-image').classList.add('animate__animated', 'animate__fadeInLeft');
                entry.target.querySelector('.tech-description').classList.add('animate__animated', 'animate__fadeInRight');
            }
        });
    }, {
        threshold: 0.1
    });
    
    techSections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes au scroll
    const caseCards = document.querySelectorAll('.case-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    caseCards.forEach(card => {
        observer.observe(card);
    });
    
    // Effet hover amélioré pour les cartes
    caseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.case-card-image img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.case-card-image img').style.transform = 'scale(1)';
        });
    });
});



// Animation des messages du chatbot
function initChatbotAnimation() {
    const messages = document.querySelectorAll('.animate-message');
    
    messages.forEach((message, index) => {
        // On déclenche l'animation avec un délai progressif
        setTimeout(() => {
            message.style.animation = 'messageAppear 0.5s forwards';
        }, index * 1000);
    });
    
    // Animation de typing infinie pour le premier message
    const typingAnimation = document.querySelector('.typing-animation');
    if (typingAnimation) {
        setInterval(() => {
            typingAnimation.style.visibility = 'visible';
        }, 8000);
    }
}

// Initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    initChatbotAnimation();
    
    // Effet parallaxe pour les icônes techno
    const techIcons = document.querySelector('.tech-icons');
    if (techIcons) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            techIcons.style.transform = `translate(calc(${x * 20}px - 50%), calc(${y * 20}px - 50%))`;
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const descItems = document.querySelectorAll('.description-item');
    const dotsContainer = document.querySelector('.dots-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let autoSlideInterval;
    const slideDuration = 8000; // 8 secondes

    // Créer les dots de navigation
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Fonction pour aller à un slide spécifique
    function goToSlide(index) {
        // Mettre à jour les classes
        carouselItems.forEach(item => item.classList.remove('active', 'prev', 'next'));
        descItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Calculer les index précédent et suivant
        const prevIndex = (index - 1 + carouselItems.length) % carouselItems.length;
        const nextIndex = (index + 1) % carouselItems.length;

        // Appliquer les classes
        carouselItems[prevIndex].classList.add('prev');
        carouselItems[index].classList.add('active');
        carouselItems[nextIndex].classList.add('next');
        descItems[index].classList.add('active');
        dots[index].classList.add('active');

        currentIndex = index;
        resetAutoSlide();
    }

    // Navigation
    function nextSlide() {
        goToSlide((currentIndex + 1) % carouselItems.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
    }

    // Événements
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Démarrer l'auto-slide
    startAutoSlide();

    // Pause au hover
    const carousel = document.querySelector('.satellite-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Swipe sur mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoSlideInterval);
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide(); // Swipe gauche
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide(); // Swipe droite
        }
    }
});


// Animation des étapes au scroll - value chain
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.chain-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    steps.forEach(step => {
        step.style.opacity = 0;
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'all 0.5s ease';
        observer.observe(step);
    });
});

// Page Value chain

// Animation des sections au scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animation des sections
    const sections = document.querySelectorAll('.chain-section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Navigation entre les sections
    const chainNodes = document.querySelectorAll('.chain-node');
    
    chainNodes.forEach(node => {
        node.addEventListener('click', function() {
            const targetId = this.getAttribute('data-step');
            const targetSection = document.querySelector(`.chain-section:nth-child(${parseInt(targetId) + 2}`);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});

//use case 
document.addEventListener('DOMContentLoaded', function() {
    // Filtrage des cas d'usage
    const filterButtons = document.querySelectorAll('.filter-btn');
    const useCaseCards = document.querySelectorAll('.use-case-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Active le bouton cliqué
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtre les cartes
            useCaseCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    card.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Animation des statistiques
    const statValues = document.querySelectorAll('.stat-value');
    const statsSection = document.querySelector('.use-cases-stats');
    
    const animateStats = () => {
        statValues.forEach(value => {
            const target = +value.getAttribute('data-count');
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                value.textContent = Math.floor(current);
            }, 16);
        });
    };
    
    // Déclenche l'animation quand la section est visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
    
    // Animation des cartes au scroll
    const caseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });
    
    useCaseCards.forEach(card => {
        caseObserver.observe(card);
    });
});

// Désactive l'interception pour les liens avec ancres
document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.includes('#')) {
            window.location.href = href; // Force le rechargement avec l'ancre
            e.preventDefault();
        }
    });
});

//Formulaire Contact JS (Simple validation message)

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = "Merci ! Votre message a été envoyé.";
  this.reset();
});



// Comparaison Interactive des Technologies
document.addEventListener('DOMContentLoaded', function() {
    const techCards = document.querySelectorAll('.tech-card');
    const techDetails = document.getElementById('techDetails');
    
    // Données de comparaison
    const techData = {
        lorawan: {
            name: "LoRaWAN",
            description: "Technologie idéale pour les applications longue portée avec faible consommation énergétique.",
            bestFor: ["Smart City", "Agriculture", "Monitoring environnemental"],
            icon: "fa-broadcast-tower"
        },
        nbiot: {
            name: "NB-IoT",
            description: "Solution cellulaire optimisée pour les appareils fixes nécessitant une bonne pénétration des signaux.",
            bestFor: ["Compteurs intelligents", "Surveillance infrastructure", "Capteurs fixes"],
            icon: "fa-sim-card"
        },
        ltem: {
            name: "LTE-M",
            description: "Technologie cellulaire adaptée aux appareils mobiles avec besoins en bande passante modérée.",
            bestFor: ["Logistique", "Véhicules connectés", "Applications mobiles"],
            icon: "fa-tower-cell"
        },
        "5g": {
            name: "5G",
            description: "Pour les applications critiques nécessitant ultra faible latence et haut débit.",
            bestFor: ["Réalité augmentée", "Véhicules autonomes", "Industrie 4.0"],
            icon: "fa-bolt"
        }
    };
    
    // Gestion des clics sur les cartes
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            const data = techData[tech];
            
            // Animation de sélection
            techCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            // Mise à jour des détails
            techDetails.innerHTML = `
                <div class="detail-header">
                    <i class="fas ${data.icon}"></i>
                    <h3>${data.name}</h3>
                </div>
                <p>${data.description}</p>
                <div class="detail-best">
                    <h4>Idéal pour :</h4>
                    <ul>
                        ${data.bestFor.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    });
    
    // Animation au survol (pour mobile)
    techCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover-effect');
            }, 500);
        });
    });
});


// mini catalogue Js
document.addEventListener('DOMContentLoaded', function() {
    // Animation d'entrée des cartes
    const productCards = document.querySelectorAll('.mini-product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Quick View Modal (simplifié)
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product');
            
            // Ici vous pourriez faire un fetch pour les détails complets
            alert(`Fonctionnalité complète à implémenter\nProduit: ${productId}`);
        });
    });
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.mini-catalogue .section-header, .mini-product-card').forEach(el => {
        observer.observe(el);
    });
});