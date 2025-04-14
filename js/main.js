// Toggle button functionality
const toggleButtons = document.querySelectorAll('.toggle-button');
const root = document.documentElement;
const defaultColor = '#00C44A'; // Green
const alternateColor = '#0021F5'; // Blue
const heroImage = document.getElementById('hero-image');
const adTypeImage = document.getElementById('ad-type-image');
const footerLogo = document.getElementById('footer-logo');

toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // If this button is already active, do nothing
        if (button.classList.contains('active')) {
            return;
        }
        
        // Remove active class from all buttons and reset their text color to white
        toggleButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#fff'; // Reset to white
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Change color theme based on which button was clicked
        if (button.textContent.trim() === 'Telegram') {
            root.style.setProperty('--primary-color', alternateColor);
            document.querySelectorAll('.final-cta, .hero, .header, .ad-type-image, .feature-item.highlight').forEach(el => {
                el.style.backgroundColor = alternateColor;
            });
            document.querySelectorAll('.stats-grid .stat-number').forEach(el => {
                el.style.color = alternateColor;
            });
            document.querySelectorAll('.button-primary').forEach(el => {
                el.style.backgroundColor = '#f0f0f0';
                el.style.color = alternateColor;
            });
            // Set active button color to blue
            button.style.color = alternateColor;
            // Update Contact us button text color
            document.querySelectorAll('.final-cta .button').forEach(el => {
                el.style.color = alternateColor;
            });
            // Change hero image to Telegram
            heroImage.src = "SVG/mainpictelegram.svg";
            // Change ad type image for Telegram
            adTypeImage.src = "Images/19.png";
            // Change footer logo to Telegram version
            footerLogo.src = "SVG/footlogotelegram.svg";
        } else if (button.textContent.trim() === 'Line') {
            root.style.setProperty('--primary-color', defaultColor);
            document.querySelectorAll('.final-cta, .hero, .header, .ad-type-image, .feature-item.highlight').forEach(el => {
                el.style.backgroundColor = defaultColor;
            });
            document.querySelectorAll('.stats-grid .stat-number').forEach(el => {
                el.style.color = defaultColor;
            });
            document.querySelectorAll('.button-primary').forEach(el => {
                el.style.backgroundColor = '#f0f0f0';
                el.style.color = defaultColor;
            });
            // Set active button color to green
            button.style.color = defaultColor;
            // Update Contact us button text color
            document.querySelectorAll('.final-cta .button').forEach(el => {
                el.style.color = defaultColor;
            });
            // Change hero image to Line
            heroImage.src = "SVG/mainpicline.svg";
            // Change ad type image for Line
            adTypeImage.src = "Images/11.png";
            // Change footer logo to Line version
            footerLogo.src = "SVG/footlogo.svg";
        }
    });
});

// Initialize buttons with correct colors and social media icons
document.addEventListener('DOMContentLoaded', () => {
    // Reset all button colors to white first
    toggleButtons.forEach(btn => {
        btn.style.color = '#fff';
    });
    
    const activeButton = document.querySelector('.toggle-button.active');
    if (activeButton) {
        if (activeButton.textContent.trim() === 'Telegram') {
            activeButton.style.color = alternateColor;
            document.querySelectorAll('.final-cta .button').forEach(el => {
                el.style.color = alternateColor;
            });
            // Set Telegram hero image
            heroImage.src = "SVG/mainpictelegram.svg";
            // Set Telegram ad type image
            adTypeImage.src = "Images/19.png";
            // Set Telegram footer logo
            footerLogo.src = "SVG/footlogotelegram.svg";
        } else {
            activeButton.style.color = defaultColor;
            document.querySelectorAll('.final-cta .button').forEach(el => {
                el.style.color = defaultColor;
            });
            // Set Line hero image
            heroImage.src = "SVG/mainpicline.svg";
            // Set Line ad type image
            adTypeImage.src = "Images/11.png";
            // Set Line footer logo
            footerLogo.src = "SVG/footlogo.svg";
        }
        const event = new Event('click');
        activeButton.dispatchEvent(event);
    } else if (toggleButtons.length > 0) {
        toggleButtons[0].classList.add('active');
        toggleButtons[0].style.color = defaultColor;
        document.querySelectorAll('.final-cta .button').forEach(el => {
            el.style.color = defaultColor;
        });
        // Default to Line hero image
        heroImage.src = "SVG/mainpicline.svg";
        // Default to Line ad type image
        adTypeImage.src = "Images/11.png";
        // Default to Line footer logo
        footerLogo.src = "SVG/footlogo.svg";
        const event = new Event('click');
        toggleButtons[0].dispatchEvent(event);
    }
});

// Basic mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}

// Optional: Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Optional: Simple selection logic for Sign In page options
const signinOptions = document.querySelectorAll('.signin-option');
signinOptions.forEach(option => {
    option.addEventListener('click', () => {
        signinOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
}); 