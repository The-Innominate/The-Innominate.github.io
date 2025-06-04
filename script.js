// Modern Portfolio JavaScript
class PortfolioApp {
    constructor() {
      this.currentPage = 'home';
      this.isTransitioning = false;
      this.init();
    }
  
    init() {
      this.setupEventListeners();
      this.handlePageLoad();
      this.setupIntersectionObserver();
      this.setupModalHandlers();
      this.initializeAnimations();
    }
  
    // Page Load Effects
    handlePageLoad() {
      // Show loading screen
      const loading = document.createElement('div');
      loading.className = 'loading';
      loading.innerHTML = '<div class="loading-spinner"></div>';
      document.body.appendChild(loading);
  
      // Simulate loading and fade in content
      setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
          loading.remove();
          this.showPage('home');
          this.animateHeaderEntrance();
        }, 500);
      }, 1500);
    }
  
    // Header entrance animation
    animateHeaderEntrance() {
      const header = document.querySelector('header');
      const logo = document.querySelector('.logo');
      const socialLinks = document.querySelectorAll('.social-link');
      const navLinks = document.querySelectorAll('.nav-link');
  
      header.style.transform = 'translateY(-100%)';
      header.style.opacity = '0';
  
      // Animate header slide down
      setTimeout(() => {
        header.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
      }, 200);
  
      // Stagger animate social links
      socialLinks.forEach((link, i) => {
        link.style.transform = 'scale(0) rotate(180deg)';
        link.style.opacity = '0';
        setTimeout(() => {
          link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          link.style.transform = 'scale(1) rotate(0deg)';
          link.style.opacity = '1';
        }, 800 + (i * 100));
      });
  
      // Animate nav links
      navLinks.forEach((link, i) => {
        link.style.transform = 'translateY(-20px)';
        link.style.opacity = '0';
        setTimeout(() => {
          link.style.transition = 'all 0.3s ease';
          link.style.transform = 'translateY(0)';
          link.style.opacity = '1';
        }, 1000 + (i * 100));
      });
    }
  
    // Page Transitions
    showPage(pageId) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
  
      // Wave transition (canvas)
      animateWaveTransition('up', () => {
        const currentPageEl = document.querySelector('.page.active');
        const targetPageEl = document.getElementById(pageId);
  
        if (!targetPageEl) {
          this.isTransitioning = false;
          return;
        }
  
        // Fade out current page
        if (currentPageEl) {
          currentPageEl.classList.remove('active');
          currentPageEl.style.display = 'none';
        }
        this.showNewPage(targetPageEl, pageId);
      }, () => {
        this.isTransitioning = false;
      });
    }
  
    showNewPage(pageEl, pageId) {
      pageEl.style.display = 'block';
      pageEl.style.transform = 'translateY(30px)';
      pageEl.style.opacity = '0';
  
      // Trigger reflow
      pageEl.offsetHeight;
  
      setTimeout(() => {
        pageEl.classList.add('active');
        pageEl.style.transform = 'translateY(0)';
        pageEl.style.opacity = '1';
        
        this.currentPage = pageId;
        this.isTransitioning = false;
        
        // Animate page elements
        this.animatePageElements(pageEl);
        // Smooth scroll to top after page transition
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  
    // Animate elements within page
    animatePageElements(pageEl) {
      const cards = pageEl.querySelectorAll('.card');
      const headings = pageEl.querySelectorAll('h1, h2, h3');
      const paragraphs = pageEl.querySelectorAll('p');
  
      // Animate headings
      headings.forEach((heading, i) => {
        heading.style.transform = 'translateY(20px)';
        heading.style.opacity = '0';
        setTimeout(() => {
          heading.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          heading.style.transform = 'translateY(0)';
          heading.style.opacity = '1';
        }, 200 + (i * 100));
      });
  
      // Animate paragraphs
      paragraphs.forEach((p, i) => {
        p.style.transform = 'translateY(15px)';
        p.style.opacity = '0';
        setTimeout(() => {
          p.style.transition = 'all 0.5s ease';
          p.style.transform = 'translateY(0)';
          p.style.opacity = '1';
        }, 400 + (i * 50));
      });
  
      // Animate cards with stagger
      cards.forEach((card, i) => {
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.transform = 'translateY(0) scale(1)';
          card.style.opacity = '1';
        }, 600 + (i * 150));
      });
    }
  
    // Modal Handlers
    setupModalHandlers() {
      // Contact modal
      const contactModal = this.createModal('contact-modal', 'Get In Touch', `
        <form id="contact-form">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      `);
  
      // Project details modal
      const projectModal = this.createModal('project-modal', 'Project Details', `
        <div id="project-details">
          <p>Project details will be loaded here...</p>
        </div>
      `);
  
      document.body.appendChild(contactModal);
      document.body.appendChild(projectModal);
    }
  
    createModal(id, title, content) {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = id;
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <h2>${title}</h2>
          ${content}
        </div>
      `;
  
      // Close modal handlers
      const closeBtn = modal.querySelector('.modal-close');
      closeBtn.addEventListener('click', () => this.closeModal(id));
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(id);
      });
  
      return modal;
    }
  
    openModal(modalId, data = null) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
  
      // Populate modal with data if provided
      if (data && modalId === 'project-modal') {
        const detailsEl = modal.querySelector('#project-details');
        detailsEl.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <p><strong>Technologies:</strong> ${data.tech}</p>
          <div style="margin-top: 1rem;">
            <a href="${data.github}" target="_blank" style="color: var(--electric-blue); text-decoration: none;">View on GitHub</a>
          </div>
        `;
      }
  
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
  
      // Focus trap
      const focusableElements = modal.querySelectorAll('button, input, textarea, a');
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  
    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
  
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  
    // Intersection Observer for scroll animations
    setupIntersectionObserver() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
          }
        });
      }, observerOptions);
  
      // Observe elements that should animate on scroll
      setTimeout(() => {
        const elementsToObserve = document.querySelectorAll('.card, .hero p, .cta-button');
        elementsToObserve.forEach(el => observer.observe(el));
      }, 2000);
    }
  
    // Event Listeners
    setupEventListeners() {
      // Navigation
      document.addEventListener('click', (e) => {
        if (e.target.matches('.nav-link')) {
          e.preventDefault();
          const pageId = e.target.getAttribute('href').substring(1);
          this.showPage(pageId);
          this.updateActiveNav(e.target);
        }
  
        // Contact button
        if (e.target.matches('.cta-button') || e.target.matches('[data-modal="contact"]')) {
          e.preventDefault();
          this.openModal('contact-modal');
        }
  
        // Project cards
        if (e.target.closest('.card') && e.target.closest('.card').dataset.project) {
          const projectData = JSON.parse(e.target.closest('.card').dataset.project);
          this.openModal('project-modal', projectData);
        }
      });
  
      // Form submission
      document.addEventListener('submit', (e) => {
        if (e.target.id === 'contact-form') {
          e.preventDefault();
          this.handleContactForm(e.target);
        }
      });
  
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const activeModal = document.querySelector('.modal.active');
          if (activeModal) {
            this.closeModal(activeModal.id);
          }
        }
      });
  
      // Smooth scroll for anchor links
      document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]') && !e.target.matches('.nav-link')) {
          e.preventDefault();
          const target = document.querySelector(e.target.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
  
      // Contact CTA buttons
      document.addEventListener('click', (e) => {
        // Start a Project button
        if (e.target && e.target.id === 'start-project-btn') {
          const form = document.getElementById('contact-form');
          if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            form.querySelector('input, textarea, select').focus();
          }
        }
        // View Resume button
        if (e.target && e.target.id === 'resume-btn') {
          const link = document.createElement('a');
          link.href = 'UpdatedResume.pdf';
          link.download = 'Cameron_Sadusky_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    }
  
    updateActiveNav(activeLink) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      activeLink.classList.add('active');
    }
  
    handleContactForm(form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, var(--vibrant-green), var(--mint-green))';
        
        setTimeout(() => {
          this.closeModal('contact-modal');
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 1500);
      }, 2000);
    }
  
    // Initialize subtle animations
    initializeAnimations() {
      // Parallax effect for background
      let ticking = false;
      
      const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(el => {
          const speed = el.dataset.parallax || 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
      };
  
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      });
  
      // Cursor trail effect
      this.initCursorTrail();
    }
  
    initCursorTrail() {
      const trail = [];
      const trailLength = 5;
  
      for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, var(--electric-blue), var(--accent-purple));
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: ${1 - (i / trailLength)};
          transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
      }
  
      let mouseX = 0, mouseY = 0;
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
  
      const animateTrail = () => {
        let x = mouseX, y = mouseY;
        
        trail.forEach((dot, i) => {
          dot.style.left = x + 'px';
          dot.style.top = y + 'px';
          
          if (i < trail.length - 1) {
            const nextDot = trail[i + 1];
            x += (parseFloat(nextDot.style.left) - x) * 0.3;
            y += (parseFloat(nextDot.style.top) - y) * 0.3;
          }
        });
        
        requestAnimationFrame(animateTrail);
      };
      
      animateTrail();
    }
  }
  
  // CSS for fadeInUp animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Initialize the portfolio when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();

    // Down arrow scroll
    const downArrow = document.getElementById('down-arrow');
    if (downArrow) {
      downArrow.addEventListener('click', () => {
        const featured = document.querySelector('.featured-work');
        if (featured) {
          featured.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Starfield Canvas
    const canvas = document.getElementById('starfield');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let stars = [];
      let w = window.innerWidth;
      let h = window.innerHeight;
      const STAR_COUNT = Math.floor((w * h) / 1800);
      function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.2 + 0.2,
            tw: Math.random() * Math.PI * 2,
            speed: 0.05 + Math.random() * 0.08,
            drift: (Math.random() - 0.5) * 0.04
          });
        }
      }
      function draw() {
        ctx.clearRect(0, 0, w, h);
        for (let star of stars) {
          // Twinkle
          const twinkle = 0.7 + 0.5 * Math.sin(star.tw);
          ctx.globalAlpha = twinkle;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = '#fff8e1';
          ctx.shadowColor = '#ffb86b';
          ctx.shadowBlur = 8 * twinkle;
          ctx.fill();
          ctx.shadowBlur = 0;
          // Animate
          star.tw += star.speed * 0.08;
          star.x += star.drift;
          if (star.x < 0) star.x = w;
          if (star.x > w) star.x = 0;
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
      }
      window.addEventListener('resize', resize);
      resize();
      draw();
    }
  });
  
  // Export for potential external use
  window.PortfolioApp = PortfolioApp;

  // Perlin noise implementation (simple, inline)
  function perlin(x) {
    // Simple 1D Perlin noise (not true Perlin, but good for waves)
    return Math.sin(x) * 0.5 + Math.sin(x * 0.5 + 10) * 0.25 + Math.sin(x * 0.2 + 100) * 0.15;
  }

  function animateWaveTransition(direction = 'up', onMid, onDone) {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) { if (onMid) onMid(); if (onDone) onDone(); return; }
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    let progress = 0;
    let animating = true;
    let midTriggered = false;
    const duration = 1.1; // seconds
    const fps = 60;
    const totalFrames = Math.round(duration * fps);
    let frame = 0;
    function drawWave(yBase, amp, color, offset, foam=false) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 4) {
        let noise = perlin((x * 0.012) + offset + frame * 0.04) * amp;
        let y = yBase + noise;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.globalAlpha = foam ? 0.7 : 0.95;
      ctx.fillStyle = color;
      ctx.shadowColor = foam ? '#fff' : color;
      ctx.shadowBlur = foam ? 18 : 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }
    function animate() {
      ctx.clearRect(0, 0, w, h);
      // Animate progress: 0 (bottom) to 1 (top)
      progress = Math.min(1, frame / totalFrames);
      // Easing for splash effect
      let ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      let yBase = h - (h * 1.1 * ease);
      // Draw multiple layers for depth
      drawWave(yBase + 30, 32, '#023436', 0.2);
      drawWave(yBase + 10, 24, '#03B5AA', 0.5);
      drawWave(yBase, 18, '#C2AFF0', 1.1);
      drawWave(yBase - 8, 10, '#fff', 2.2, true); // foam
      // Trigger mid callback when wave covers page
      if (!midTriggered && progress > 0.45) {
        midTriggered = true;
        if (onMid) onMid();
      }
      if (progress < 1) {
        frame++;
        requestAnimationFrame(animate);
      } else {
        // Animate wave off (reverse)
        let frameOut = 0;
        function animateOut() {
          ctx.clearRect(0, 0, w, h);
          let outProgress = Math.min(1, frameOut / totalFrames);
          let outEase = 1 - Math.pow(1 - outProgress, 2);
          let yBaseOut = h * (1 - outEase) - 40 * outEase;
          drawWave(yBaseOut + 30, 32, '#023436', 0.2 + 1.5);
          drawWave(yBaseOut + 10, 24, '#03B5AA', 0.5 + 1.5);
          drawWave(yBaseOut, 18, '#C2AFF0', 1.1 + 1.5);
          drawWave(yBaseOut - 8, 10, '#fff', 2.2 + 1.5, true);
          if (outProgress < 1) {
            frameOut++;
            requestAnimationFrame(animateOut);
          } else {
            ctx.clearRect(0, 0, w, h);
            if (onDone) onDone();
          }
        }
        setTimeout(animateOut, 120);
      }
    }
    animate();
  }