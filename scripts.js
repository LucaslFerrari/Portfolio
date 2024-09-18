document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');

    function showPage(pageId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const selectedSection = document.getElementById(pageId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            history.pushState(null, '', `#${pageId}`);
        });
    });

    window.addEventListener('popstate', function() {
        const pageId = location.hash.slice(1) || 'home';
        showPage(pageId);
    });

    showPage('home');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});