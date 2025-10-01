// ===================================
// Spotlight Effect
// ===================================

const spotlight = document.querySelector('.spotlight');

document.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
    spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// ===================================
// Navigation Active State on Scroll
// ===================================

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav a');

function setActiveNav() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Enhanced Hover Effect on Experience Items
// ===================================

const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(4px)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// ===================================
// Skills Category Hover Effect
// ===================================

const skillsCategories = document.querySelectorAll('.skills-category');

skillsCategories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'translateX(4px)';
    });

    category.addEventListener('mouseleave', () => {
        category.style.transform = 'translateX(0)';
    });
});

// ===================================
// Intersection Observer for Fade-in Animation
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// ===================================
// Print Friendly Message to Console
// ===================================

console.log('%c👋 Hello there!', 'font-size: 16px; font-weight: bold; color: #5eead4;');
console.log('%cPortfolio designed and built by Kedarnath Bhat', 'font-size: 12px; color: #94a3b8;');