document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// scrolling js
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // work experience
  document.addEventListener("DOMContentLoaded", function() {
    const workEntries = document.querySelectorAll('.work-entry');
    workEntries.forEach(entry => {
        entry.addEventListener('click', () => {
            const dataToggle = entry.getAttribute('data-toggle');
            const workDetails = document.getElementById(dataToggle);
            workDetails.classList.toggle('show-details');
        });
    });
});