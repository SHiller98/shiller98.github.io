document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown triggers
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    // Add click event listener to each trigger
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Only handle on mobile devices
            if (window.innerWidth <= 800) {
                e.preventDefault();
                
                // Find the associated dropdown menu
                const dropdownMenu = this.nextElementSibling;
                
                // Toggle the 'active' class
                if (dropdownMenu.classList.contains('active')) {
                    dropdownMenu.classList.remove('active');
                } else {
                    // Close all other dropdowns first
                    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                        menu.classList.remove('active');
                    });
                    dropdownMenu.classList.add('active');
                }
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 800) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        }
    });
}); 