// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation for Skills Progress Bars
window.addEventListener('scroll', function() {
  const skillsSection = document.getElementById('skills');
  const skillsPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (skillsPosition < screenPosition) {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      bar.style.width = bar.getAttribute('style').split(': ')[1];  // Triggers the width animation
    });
  }
});

// Modal for Projects (optional for detailed view)
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(project => {
  project.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <h3>${project.querySelector('h3').innerText}</h3>
        <p>More details about ${project.querySelector('h3').innerText}</p>
        <button class="close-modal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  if (name === "" || email === "" || message === "") {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  } else {
    alert("Message sent successfully!");
  }
});

// Sticky Navigation
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Hero Section Text Animation (optional)
const heroText = document.querySelector('.hero-content h1');
let txt = heroText.innerText;
let i = 0;
heroText.innerHTML = "";

function typeWriter() {
  if (i < txt.length) {
    heroText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
