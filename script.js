// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.85)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
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
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-item, .cert-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
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

// Initialize typing animation on page load
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    
    // Add a small delay before starting the typing animation
    setTimeout(() => {
        typeWriter(nameElement, originalText, 150);
    }, 500);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect enhancement
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards 3D tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Contact form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loaded state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a192f;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #64ffda;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
    
    .nav-link.active {
        color: #64ffda;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add CSS for reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    emailjs.init('YfY6GLcqiWQiL-EIL'); // Replace with your EmailJS public key
})();

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.submit-btn');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        statusDiv.style.display = 'none';

        // Send email using EmailJS
        emailjs.sendForm('service_3p1bvpq', 'template_6ef04xn', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                statusDiv.className = 'form-status success';
                statusDiv.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                statusDiv.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
                
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                statusDiv.className = 'form-status error';
                statusDiv.textContent = 'Failed to send message. Please try again or contact me directly.';
                statusDiv.style.display = 'block';
                
            })
            .finally(function() {
                // Reset button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            });
    });

    // Form validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        const fieldName = field.name;
        
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (!value) {
            isValid = false;
            errorMessage = `${fieldName.replace('_', ' ')} is required`;
        }
        
        // Email validation
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation (optional but if provided, should be valid)
        if (fieldType === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Update field appearance
        if (isValid) {
            field.style.borderColor = 'rgba(100, 255, 218, 0.3)';
            field.classList.remove('error');
        } else {
            field.style.borderColor = '#f44336';
            field.classList.add('error');
        }
        
        return isValid;
    }

    // Animate contact form elements on scroll
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.1
    });

    const contactElements = document.querySelectorAll('.contact-form-container, .contact-image');
    contactElements.forEach(el => {
        contactObserver.observe(el);
    });

    // CV Download functionality - React style approach
    const downloadCvBtn = document.querySelector('.download-cv-btn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Download CV button clicked');
            
            // Show loading state
            const originalText = this.querySelector('span').textContent;
            this.querySelector('span').textContent = 'Downloading...';
            this.style.opacity = '0.7';
            
            // React-style download handler
            const handleDownload = () => {
                const link = document.createElement('a');
                link.href = './cv/Udantha_Wanasingha.pdf';
                link.setAttribute('download', 'Udantha_Wanasingha_CV.pdf');
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log('CV download initiated');
                
                // Reset button
                setTimeout(() => {
                    this.querySelector('span').textContent = originalText;
                    this.style.opacity = '1';
                }, 1500);
            };
            
            // Try the direct download approach
            try {
                handleDownload();
            } catch (error) {
                console.error('Download failed:', error);
                
                // Fallback: show message and open in new tab
                this.querySelector('span').textContent = 'Opening CV...';
                
                setTimeout(() => {
                    window.open('./cv/Udantha_Wanasingha.pdf', '_blank');
                    this.querySelector('span').textContent = originalText;
                    this.style.opacity = '1';
                }, 1000);
            }
        });
    } else {
        console.log('Download CV button not found');
    }
});

// Console message for developers
console.log('%c👋 Hello there!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out Udantha\'s portfolio!', 'color: #8892b0; font-size: 14px;');
console.log('%cBuilt with ❤️ and modern web technologies', 'color: #64ffda; font-size: 12px;');
console.log('%cContact form powered by EmailJS', 'color: #64ffda; font-size: 12px;');
