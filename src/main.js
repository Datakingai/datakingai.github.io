import './style.css'

// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll('.section, .skill-card, .project-card').forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(30px)'
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  observer.observe(el)
})

// Add revealed class styles
const style = document.createElement('style')
style.textContent = `
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`
document.head.appendChild(style)

// ===== Active Nav Highlight =====
const sections = document.querySelectorAll('.section, .hero')
const navLinks = document.querySelectorAll('.nav-links a')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id') || ''
    }
  })

  navLinks.forEach(link => {
    link.style.color = ''
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#3b82f6'
    }
  })
})

// ===== Smooth nav background on scroll =====
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(15, 23, 42, 0.95)'
  } else {
    nav.style.background = 'rgba(15, 23, 42, 0.9)'
  }
})
