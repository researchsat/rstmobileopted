import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/SEO';
import styles from '../styles/pages/TestPage.module.css';

const TestPage = () => {
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = 'Test Page | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  // Optimized Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      // Reduce pixel ratio for better performance
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(pixelRatio, pixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Optimized particle system
    const particles = [];
    const particleCount = 60; // Reduced from 150
    const mouse = { x: 0, y: 0, isActive: false };
    let time = 0;

    // Throttled mouse tracking for better performance
    let mouseTimeout;
    const handleMouseMove = (e) => {
      if (mouseTimeout) return;
      mouseTimeout = setTimeout(() => {
        const rect = canvas.getBoundingClientRect();
        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
        mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
        mouse.isActive = true;
        mouseTimeout = null;
      }, 16); // ~60fps throttling
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class OptimizedParticle {
      constructor() {
        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.x = Math.random() * canvas.width / pixelRatio;
        this.y = Math.random() * canvas.height / pixelRatio;
        this.vx = (Math.random() - 0.5) * 0.5; // Reduced speed
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1; // Smaller particles
        this.opacity = Math.random() * 0.6 + 0.3;
        this.hue = Math.random() * 40 + 180; // Narrower color range
        this.originalRadius = this.radius;
        this.pulseSpeed = Math.random() * 0.01 + 0.005; // Slower pulse
      }

      update() {
        const pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Simple movement
        this.x += this.vx;
        this.y += this.vy;

        // Boundary wrapping
        if (this.x < 0) this.x = canvas.width / pixelRatio;
        if (this.x > canvas.width / pixelRatio) this.x = 0;
        if (this.y < 0) this.y = canvas.height / pixelRatio;
        if (this.y > canvas.height / pixelRatio) this.y = 0;

        // Subtle pulsing effect
        this.radius = this.originalRadius + Math.sin(time * this.pulseSpeed) * 0.3;

        // Simplified mouse interaction (only when mouse is active)
        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const force = (80 - distance) / 80 * 0.005; // Reduced force
            this.x -= dx * force;
            this.y -= dy * force;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Simple circle with minimal effects
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${this.hue}, 60%, 60%)`;
        ctx.fill();

        // Optional subtle glow (only for some particles)
        if (this.radius > 1.5) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = `hsl(${this.hue}, 60%, 60%)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, 0.5)`;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new OptimizedParticle());
    }

    // Optimized animation loop with frame rate control
    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        time += 0.016;

        const pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Clear canvas efficiently
        ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);

        // Draw background with subtle fade
        ctx.fillStyle = 'rgba(0, 23, 24, 0.02)';
        ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);

        // Draw connections (reduced frequency)
        if (Math.floor(time * 60) % 2 === 0) { // Every other frame
          ctx.strokeStyle = 'rgba(16, 126, 125, 0.15)';
          ctx.lineWidth = 0.5;

          for (let i = 0; i < particles.length; i += 2) { // Skip every other particle
            for (let j = i + 2; j < particles.length; j += 2) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 60) { // Reduced connection distance
                const opacity = (60 - distance) / 60 * 0.2;
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.restore();
              }
            }
          }
        }

        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleVideoClick = () => {
    setIsVideoClicked(true);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId('https://youtu.be/Ud6-gEj7wow?list=TLGGLtNQLdmT8SoyNjA1MjAyNQ');

  return (
    <>
      <SEO
        title="Test Page | ResearchSat"
        description="Test page with video hero section and interactive canvas elements"
        keywords={['test', 'video', 'canvas', 'space biotech']}
      />

      <div className={styles.testPage}>
        {/* Hero Section with Video Background */}
        <section className={styles.heroSection}>
          <div className={styles.videoContainer}>
            {/* YouTube Video Embed */}
            <div className={styles.videoWrapper}>
              <iframe
                ref={videoRef}
                className={`${styles.videoBackground} ${isVideoClicked ? styles.videoActive : ''}`}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=${isVideoClicked ? 1 : 0}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                title="ResearchSat Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
              ></iframe>
            </div>

            {/* Video Overlay */}
            <div
              className={`${styles.videoOverlay} ${isVideoClicked ? styles.overlayHidden : ''}`}
              onClick={handleVideoClick}
            >
              <div className={styles.playButton}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="rgba(188, 216, 213, 0.9)" />
                  <path d="M32 25L55 40L32 55V25Z" fill="#001718" />
                </svg>
              </div>
            </div>

            {/* Hero Content */}
            <div className={styles.heroContent}>
              <div className={styles.contentContainer}>
                <h1 className={styles.heroTitle}>
                  Space biotech<br />
                  for a better life
                </h1>
                <p className={styles.heroSubtitle}>
                  We leverage microgravity to create
                </p>

                {/* Statistics */}
                <div className={styles.statsContainer}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>151</div>
                    <div className={styles.statLabel}>
                      Space labs launched<br />
                      by our team
                    </div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>61</div>
                    <div className={styles.statLabel}>
                      Customers on 4<br />
                      continents
                    </div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>138</div>
                    <div className={styles.statLabel}>
                      Space biology<br />
                      publications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Canvas Section */}
        <section className={styles.canvasSection}>
          <div className={styles.canvasContainer}>
            <canvas
              ref={canvasRef}
              className={styles.canvas}
              data-engine="three.js r147"
            ></canvas>

            <div className={styles.canvasContent}>
              <h2 className={styles.canvasTitle}>
                Interactive Space Technology
              </h2>
              <p className={styles.canvasDescription}>
                Explore our interconnected network of space-based research capabilities.
                Each particle represents a breakthrough in microgravity science, connected
                through our innovative technology platform.
              </p>

              <div className={styles.canvasFeatures}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🔬</div>
                  <h3>Advanced Research</h3>
                  <p>Cutting-edge experiments in microgravity environments</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🚀</div>
                  <h3>Mission Planning</h3>
                  <p>Comprehensive mission design and execution</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🧬</div>
                  <h3>Biotechnology</h3>
                  <p>Revolutionary biological discoveries in space</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestPage;
