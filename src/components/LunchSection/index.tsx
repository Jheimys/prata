import { useRef, useEffect, useState } from 'react';
import styles from './LunchSection.module.css';
import lunchImage from '../../assets/lunch_and_learn.jpg';
import nutritionIcon from '../../assets/balanced-diet.png';
import livro from '../../assets/livro.png';

const LunchAndLearnSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    setIsVisible(false); // Garante estado inicial escondido

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        // Se quiser esconder de novo, use else setIsVisible(false);
      },
      { threshold: 0.4 }
    );
    observer.observe(title);
    return () => observer.disconnect();
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.textBlock}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${isVisible ? styles.titleVisible : styles.titleHidden}`}
        >
          Lunch And Learn
        </h2>
        <p className={styles.subtitle}>
          Inspire innovation while savoring knowledge.
        </p>

        <div className={styles.icons}>
          <img
            src={nutritionIcon}
            alt="Nutrition icon"
            className={styles.icon}
            style={{ width: 50, height: 50 }}
          />
          <img
            src={livro}
            alt="Book icon"
            className={styles.icon}
            style={{ width: 50, height: 50 }}
          />
        </div>
      </div>
      <img
        src={lunchImage}
        alt="Lunch and Learn"
        className={styles.image}
      />
    </section>
  );
};

export default LunchAndLearnSection;
