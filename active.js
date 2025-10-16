    document.addEventListener('DOMContentLoaded', function() {
            // Function to set active nav link based on current page
            function setActiveNavLink() {
                const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-item)');
                const currentPage = getCurrentPage();
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current page link
                navLinks.forEach(link => {
                    const page = link.getAttribute('data-page');
                    if (page === currentPage) {
                        link.classList.add('active');
                    }
                });
                
                // Special handling for dropdown pages - keep Academics active
                const dropdownPages = ['nursery', 'kindergarten', 'primary', 'jss', 'ss'];
                if (dropdownPages.includes(currentPage)) {
                    const academicsLink = document.querySelector('.nav-link[data-page="academics"]');
                    if (academicsLink) {
                        academicsLink.classList.add('active');
                    }
                }
            }
            
            // Function to get current page identifier
            function getCurrentPage() {
                const path = window.location.pathname;
                const page = path.split('/').pop();
                
                // Map file names to page identifiers
                const pageMap = {
                    'index.html': 'home',
                    'academics.html': 'academics',
                    'nursery.html': 'nursery',
                    'kindergarten.html': 'kindergarten',
                    'primary.html': 'primary',
                    'jss.html': 'jss',
                    'sss.html': 'ss',
                    'admission.html': 'admission',
                    'services.html': 'services',
                    'faqs.html': 'faq'
                };
                
                return pageMap[page] || 'home';
            }
            
            // Set active nav link on page load
            setActiveNavLink();
            
            // Store active state in localStorage when a link is clicked
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-item)');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const page = this.getAttribute('data-page');
                    localStorage.setItem('activePage', page);
                    
                    // Close mobile navbar if open
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                });
            });
            
            // Handle dropdown item clicks
            const dropdownItems = document.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    const page = this.getAttribute('data-page');
                    localStorage.setItem('activePage', 'academics'); // Set academics as active for dropdown pages
                    
                    // Close mobile navbar if open
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                });
            });
            
        });