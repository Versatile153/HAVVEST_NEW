

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

        allSideMenu.forEach(item=> {
            const li = item.parentElement;
        
            item.addEventListener('click', function () {
                allSideMenu.forEach(i=> {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });
        
        
        
        
        // TOGGLE SIDEBAR
        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        const sidebar = document.getElementById('sidebar');
        
        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
        })
        
        
        
        
        
        
        
        const searchButton = document.querySelector('#content nav form .form-input button');
        const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
        const searchForm = document.querySelector('#content nav form');
        
        searchButton.addEventListener('click', function (e) {
            if(window.innerWidth < 576) {
                e.preventDefault();
                searchForm.classList.toggle('show');
                if(searchForm.classList.contains('show')) {
                    searchButtonIcon.classList.replace('bx-search', 'bx-x');
                } else {
                    searchButtonIcon.classList.replace('bx-x', 'bx-search');
                }
            }
        })
        
        
        
        
        
        if(window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else if(window.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }
        
        
        window.addEventListener('resize', function () {
            if(this.innerWidth > 576) {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
                searchForm.classList.remove('show');
            }
        })
        
        
        
        const switchMode = document.getElementById('switch-mode');
        
        switchMode.addEventListener('change', function () {
            if(this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        })

        
        $(document).ready(function () {
            // Show modal and set action link when action link is clicked
            $('.action-link').click(function (e) {
                e.preventDefault(); // Prevent default link behavior
                const action = $(this).data('action');
                const href = $(this).attr('href');
                $('#confirmationModal').data('action-link', href).modal('show');
            });
    
            // Handle confirmation action
            $('#confirmAction').click(function () {
                const actionLink = $('#confirmationModal').data('action-link');
                if (actionLink) {
                    // Hide the modal
                    $('#confirmationModal').modal('hide');
                    // Navigate to the specified address
                    window.location.href = actionLink;
                }
            });
        });

        // Update the progress bar width as the task progresses
function updateProgressBar(progress) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';

    // Update body brightness based on progress
    const brightness = progress;
    document.body.style.filter = `brightness(${brightness}%)`;

    // Hide the progress bar when brightness is at maximum
    if (brightness >= 100) {
        progressBar.style.display = 'none';
    }
}

// Simulate progress
let progress = 0;
const interval = setInterval(() => {
    progress += 10;
    if (progress <= 100) {
        updateProgressBar(progress);
    } else {
        clearInterval(interval);
    }
}, 1000);
