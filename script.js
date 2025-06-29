// Hide preloader when page finishes loading
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.display = "block";
});


// Smooth scrolling for navbar links
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && document.querySelector(targetId)) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to navbar after scrolling
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling and validation
document.querySelectorAll('#form-contact form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const consent = form.querySelector('#consent').checked;

        // Basic validation
        if (!name || !email || !phone || !consent) {
            alert('Please fill in all required fields and accept the consent.');
            return;
        }
        // Email format simple check
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Phone should be digits only (allow 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Optionally, do something with the data here (send to backend)

        // Success UI/Message
        form.reset();
        alert('Thank you for contacting us! We will get back to you soon.');
    });
});