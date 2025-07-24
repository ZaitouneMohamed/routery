// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburger.style.transform = 'rotate(0deg)';
        hamburger.style.background = '#374151';

        // Reset hamburger lines
        const before = hamburger.querySelector('::before');
        const after = hamburger.querySelector('::after');
        hamburger.style.background = '#374151';
    } else {
        mobileMenu.classList.add('active');
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.background = 'transparent';

        // Transform hamburger to X
        hamburger.style.setProperty('--before-transform', 'rotate(90deg) translateX(-8px)');
        hamburger.style.setProperty('--after-transform', 'rotate(-90deg) translateX(8px)');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburger = document.querySelector('.hamburger');

            mobileMenu.classList.remove('active');
            hamburger.style.transform = 'rotate(0deg)';
            hamburger.style.background = '#374151';
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const dashboardIllustration = document.querySelector('.dashboard-illustration');
    const heroSection = document.querySelector('#hero');

    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    // Show/hide dashboard illustration based on hero section visibility
    if (heroSection && dashboardIllustration) {
        const heroRect = heroSection.getBoundingClientRect();
        const shouldShow = heroRect.top < 10 && heroRect.bottom > 500;

        if (shouldShow) {
            dashboardIllustration.style.opacity = '1';
            dashboardIllustration.style.visibility = 'visible';
        } else {
            dashboardIllustration.style.opacity = '0';
            dashboardIllustration.style.visibility = 'hidden';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Special handling for steps animation
            if (entry.target.classList.contains('step')) {
                const steps = document.querySelectorAll('.step');
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.style.opacity = '1';
                        step.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }

            // Special handling for result cards
            if (entry.target.classList.contains('result-card')) {
                const results = document.querySelectorAll('.result-card');
                results.forEach((result, index) => {
                    setTimeout(() => {
                        result.style.opacity = '1';
                        result.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }

            // Special handling for pricing cards
            if (entry.target.classList.contains('pricing-card')) {
                const pricingCards = document.querySelectorAll('.pricing-card');
                pricingCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);





// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for animated elements
    const animatedElements = document.querySelectorAll('.step, .result-card, .pricing-card, .feature-item, .contact-card');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.result-card, .pricing-card, .faq-item, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-primary, .cta-secondary, .plan-cta');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Add ripple styles
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add parallax effect to gradient blobs
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const blob1 = document.querySelector('.gradient-blob-1');
        const blob2 = document.querySelector('.gradient-blob-2');
        const blob3 = document.querySelector('.gradient-blob-3');

        if (blob1) blob1.style.transform = `translateY(${scrolled * 0.2}px)`;
        if (blob2) blob2.style.transform = `translateY(${scrolled * -0.1}px)`;
        if (blob3) blob3.style.transform = `translateY(${scrolled * 0.1}px)`;
    });

    // Animate counters (if you add any in the future)
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            observer.observe(counter);
            counter.addEventListener('animationstart', updateCounter);
        });
    }

    // Form handling (if you add contact forms)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add your form submission logic here
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitButton.textContent = 'Message envoyé !';
                submitButton.style.background = '#10b981';

                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    form.reset();
                }, 2000);
            }, 1000);
        });
    });

    // Add loading states to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-primary, .plan-cta.primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                const originalContent = this.innerHTML;

                this.innerHTML = '<span>⏳ Chargement...</span>';
                this.style.pointerEvents = 'none';

                // Simulate loading
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.classList.remove('loading');
                    this.style.pointerEvents = 'auto';

                    // You would typically redirect to your app or signup page here
                    console.log('Redirecting to signup...');
                }, 1500);
            }
        });
    });

    // Add typing effect to hero headline (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on escape
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });

    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select');

    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .loading {
        opacity: 0.7;
        cursor: not-allowed !important;
    }

    /* Additional responsive utilities */
    @media (max-width: 767px) {
        .dashboard-illustration {
            display: none !important;
        }

        .hero-cta {
            flex-direction: column;
        }

        .cta-primary,
        .cta-secondary {
            width: 100%;
            min-width: auto;
        }

        .features-pills {
            flex-direction: column;
            align-items: center;
        }

        .trust-badges {
            flex-direction: column;
            gap: 1rem;
        }
    }

    /* Print styles */
    @media print {
        .navbar,
        .mobile-menu,
        .dashboard-illustration,
        .footer-social {
            display: none !important;
        }

        body {
            color: black !important;
            background: white !important;
        }

        .gradient-text {
            color: #3b82f6 !important;
            -webkit-text-fill-color: #3b82f6 !important;
        }
    }

    /* Reduced motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }

        .gradient-blob {
            animation: none !important;
        }

        #animated-truck {
            animation: none !important;
        }
    }
`;

document.head.appendChild(style);

// Performance optimization - lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
