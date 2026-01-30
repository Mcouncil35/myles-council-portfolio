import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let elements = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      elements = [];

      // Create floating elements
      for (let i = 0; i < 30; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 50 + 30,
          speedY: Math.random() * 1 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.15,
          type: Math.floor(Math.random() * 3), // 0: bubble, 1: brain, 2: robot
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    const drawChatBubble = (el) => {
      ctx.save();
      ctx.translate(el.x, el.y);
      ctx.rotate(el.rotation);

      const size = el.size;

      // Chat bubble body
      ctx.beginPath();
      ctx.moveTo(-size/2 + 10, -size/3);
      ctx.lineTo(size/2 - 10, -size/3);
      ctx.quadraticCurveTo(size/2, -size/3, size/2, -size/3 + 10);
      ctx.lineTo(size/2, size/4 - 10);
      ctx.quadraticCurveTo(size/2, size/4, size/2 - 10, size/4);
      ctx.lineTo(5, size/4);
      ctx.lineTo(-5, size/2);
      ctx.lineTo(-10, size/4);
      ctx.lineTo(-size/2 + 10, size/4);
      ctx.quadraticCurveTo(-size/2, size/4, -size/2, size/4 - 10);
      ctx.lineTo(-size/2, -size/3 + 10);
      ctx.quadraticCurveTo(-size/2, -size/3, -size/2 + 10, -size/3);
      ctx.closePath();

      ctx.fillStyle = `rgba(139, 92, 246, ${el.opacity})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(99, 102, 241, ${el.opacity + 0.1})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Dots inside
      ctx.fillStyle = `rgba(255, 255, 255, ${el.opacity + 0.2})`;
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.arc(i * 12, -5, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const drawBrain = (el) => {
      ctx.save();
      ctx.translate(el.x, el.y);

      const size = el.size;

      // Brain outline
      ctx.beginPath();
      ctx.arc(0, 0, size/2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${el.opacity * 0.5})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(6, 182, 212, ${el.opacity + 0.1})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Brain waves
      ctx.strokeStyle = `rgba(99, 102, 241, ${el.opacity + 0.15})`;
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(-size/3, -size/5);
      ctx.quadraticCurveTo(0, -size/3, size/3, -size/5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-size/3, size/10);
      ctx.quadraticCurveTo(0, -size/8, size/3, size/10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-size/3, size/4);
      ctx.quadraticCurveTo(0, size/8, size/3, size/4);
      ctx.stroke();

      ctx.restore();
    };

    const drawRobot = (el) => {
      ctx.save();
      ctx.translate(el.x, el.y);

      const size = el.size;

      // Robot head
      ctx.fillStyle = `rgba(99, 102, 241, ${el.opacity * 0.5})`;
      ctx.strokeStyle = `rgba(139, 92, 246, ${el.opacity + 0.1})`;
      ctx.lineWidth = 2;

      // Head
      ctx.beginPath();
      ctx.rect(-size/2, -size/3, size, size * 0.7);
      ctx.fill();
      ctx.stroke();

      // Eyes
      ctx.fillStyle = `rgba(6, 182, 212, ${el.opacity + 0.3})`;
      ctx.beginPath();
      ctx.arc(-size/4, 0, size/8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(size/4, 0, size/8, 0, Math.PI * 2);
      ctx.fill();

      // Antenna
      ctx.strokeStyle = `rgba(139, 92, 246, ${el.opacity + 0.2})`;
      ctx.beginPath();
      ctx.moveTo(0, -size/3);
      ctx.lineTo(0, -size/2);
      ctx.stroke();

      ctx.fillStyle = `rgba(6, 182, 212, ${el.opacity + 0.3})`;
      ctx.beginPath();
      ctx.arc(0, -size/2 - 5, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((el) => {
        // Update position
        el.y -= el.speedY;
        el.x += el.speedX;
        el.rotation += el.rotationSpeed;

        // Reset when off screen
        if (el.y < -el.size) {
          el.y = canvas.height + el.size;
          el.x = Math.random() * canvas.width;
        }
        if (el.x < -el.size) el.x = canvas.width + el.size;
        if (el.x > canvas.width + el.size) el.x = -el.size;

        // Draw based on type
        switch (el.type) {
          case 0:
            drawChatBubble(el);
            break;
          case 1:
            drawBrain(el);
            break;
          case 2:
            drawRobot(el);
            break;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default AnimatedBackground;
