// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { duration: 0.1, x: e.clientX, y: e.clientY });
  gsap.to(cursorFollower, { duration: 0.3, x: e.clientX, y: e.clientY });
});

// Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Hero animations
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
});

gsap.from('.hero-image', {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5,
  ease: 'power3.out',
});

// Parallax effect on hero image
gsap.to('.parallax-image', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    scrub: true,
  },
});

// Feature items animation
gsap.from('.feature-item', {
  scrollTrigger: {
    trigger: '.features',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll('.feature-item'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
});

// Stats charts
const createChart = (elementId, type, data, options) => {
  const ctx = document.getElementById(elementId).getContext('2d');
  new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });
};

// Violent Crime Chart
createChart(
  'violentCrimeChart',
  'line',
  {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Violent Crime Rate',
        data: [366.7, 398.5, 395.7, 380.7, 359.4],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  },
  {
    responsive: true,
    maintainAspectRatio: false,
  }
);

// Property Crime Chart
createChart(
  'propertyCrimeChart',
  'bar',
  {
    labels: ['Burglary', 'Larceny-Theft', 'Motor Vehicle Theft'],
    datasets: [
      {
        label: 'Incidents per 100,000 population',
        data: [340.5, 1594.0, 268.0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
);

// Crime Hotspot Map
createChart(
  'crimeHotspotMap',
  'bubble',
  {
    datasets: [
      {
        label: 'Crime Hotspots',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 15, y: 50, r: 20 },
          { x: 70, y: 40, r: 25 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  },
  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { min: 0, max: 100 },
      y: { min: 0, max: 100 },
    },
  }
);

// Animate charts on scroll
gsap.from('.chart', {
  scrollTrigger: {
    trigger: '.stats',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
  onComplete: () => {
    // Trigger chart animations here if needed
  },
});

// Tech items animation
gsap.from('.tech-item', {
  scrollTrigger: {
    trigger: '.tech',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
});

// CTA section animation
gsap.from('.cta-content', {
  scrollTrigger: {
    trigger: '.cta',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
});

// Pulse animation for CTA button
gsap.to('.cta-button', {
  scale: 1.05,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut',
});

// Footer animation
gsap.from('footer', {
  scrollTrigger: {
    trigger: 'footer',
    start: 'top bottom',
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
});

// SOS activation simulation
document.querySelectorAll('.cta-button').forEach((button) => {
  button.addEventListener('click', () => {
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Simulate SOS activation
    setTimeout(() => {
      alert('SOS activated! Emergency services have been notified.');
    }, 500);
  });
});

// Add scroll-triggered animations to sections
gsap.utils.toArray('section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Initialize AOS (Animate on Scroll) for additional animations
AOS.init({
  duration: 1000,
  once: true,
});
