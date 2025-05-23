document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown triggers
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    // Add click event listener to each trigger
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the associated dropdown menu
            const dropdown = this.closest('.dropdown');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            // Toggle the active class
            dropdownMenu.classList.toggle('active');
            
            // Close other open dropdowns
            document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('active');
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
}); 