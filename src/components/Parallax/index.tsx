import React, { useEffect, useRef, useState } from 'react';
import styles from './Parallax.module.css';

type ParallaxBannerProps = {
  image: string;
  children?: React.ReactNode;
};

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ image, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    io.observe(container);

    return () => {
      io.unobserve(container);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !bgRef.current) return;

      const scrollTop = window.scrollY;
      const offsetTop = containerRef.current.offsetTop;
      const parallaxSpeed = 0.4;

      const move = (scrollTop - offsetTop) * parallaxSpeed;
      bgRef.current.style.transform = `translateY(${move}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.parallaxContainer}>
      <div
        ref={bgRef}
        className={`${styles.backgroundImage} ${visible ? styles.visible : ''}`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      {children && <div className={styles.content}>{children}</div>}
    </section>
  );
};

export default ParallaxBanner;
