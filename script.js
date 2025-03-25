// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.background = '#2E4057';
        document.body.style.color = '#F4F1DE';
    } else {
        document.body.style.background = 'url("signup.jpeg") center/cover no-repeat';
        document.body.style.color = '#3D3D3D';
    }
});

// Scroll to top
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing effect for welcome text
let i = 0, text = "Welcome to Library!";
function typeEffect() {
    if (i < text.length) {
        document.getElementById('welcomeText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Search functionality
function searchBook() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let reviews = document.getElementsByClassName('review');
    for (let review of reviews) {
        let title = review.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    }
}

// Voice search
function startVoiceSearch() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.start();
        
        recognition.onresult = function(event) {
            let voiceInput = event.results[0][0].transcript;
            document.getElementById('searchInput').value = voiceInput;
            searchBook();
        };
        
        recognition.onerror = function(event) {
            console.error('Voice recognition error:', event.error);
            alert('Voice recognition error: ' + event.error);
        };
    } else {
        alert('Voice search is not supported in this browser.');
    }
}

// Sticky nav on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const navOffset = nav.offsetTop; // Initial position of the nav

    if (window.pageYOffset >= navOffset) {
        nav.classList.add('fixed'); // Add fixed class when scrolled past
    } else {
        nav.classList.remove('fixed'); // Remove fixed class when above
    }
});
