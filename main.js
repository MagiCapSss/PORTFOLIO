// Navigation Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.link');
    const navBar = document.querySelector('.nav-bar');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Ferme le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.link a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navigation sticky et effets de défilement
    function stickyNavigation() {
        if (window.scrollY > 100) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', stickyNavigation);

    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .interest-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialiser les éléments d'animation avec une opacité de 0 et un décalage
    const elementsToAnimate = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .interest-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });

    // Appliquer l'animation lors du défilement
    window.addEventListener('scroll', animateOnScroll);
    // Appliquer l'animation au chargement initial
    animateOnScroll();

    // Filtrage des projets
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Enlever la classe active de tous les boutons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    // Réinitialiser l'animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Petit délai pour l'animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Animation du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
                submitBtn.style.backgroundColor = 'var(--success-color)';
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Restaurer le bouton après quelques secondes
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }

    // Animation du bouton de téléchargement du CV
    const downloadButton = document.querySelector('.download-btn');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Ajouter un effet de clic
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    }

    // Animations au survol pour les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = 'var(--shadow-lg)';
            card.style.borderColor = 'var(--primary-color)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        });
    });

    // Effet de comptage pour les barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;

    function animateSkills() {
        if (animated) return;

        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 200);
        });

        animated = true;
    }

    // Animer les compétences une fois qu'elles sont visibles
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        window.addEventListener('scroll', () => {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (sectionPosition < screenPosition) {
                animateSkills();
            }
        });
    }

    // Animation de défilement doux pour les ancres internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});