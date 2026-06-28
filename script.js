/**
 * Dynamic background canvas particles builder
 */
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  // Create 30 randomized decorative background particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = 10 + Math.random() * 20 + 's';
    particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 155}, 0.3)`;
    
    const randomWidth = Math.random() * 8 + 2 + 'px';
    particle.style.width = randomWidth;
    particle.style.height = randomWidth;
    
    particlesContainer.appendChild(particle);
  }
}

// Safely invoke script initialization once DOM layout is finalized
window.addEventListener('DOMContentLoaded', createParticles);
