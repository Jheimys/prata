import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './LunchAndLearnSectionGsap.module.css';
import lunchImage from '../../assets/lunch_and_learn.jpg';
import nutritionIcon from '../../assets/balanced-diet.png';
import livro from '../../assets/livro.png';

// REGISTRE O PLUGIN!
gsap.registerPlugin(ScrollTrigger);

const LunchAndLearnSectionGSAP = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  if (!titleRef.current) return;

  const anim = gsap.fromTo(
    titleRef.current,
    { opacity: 0, y: 80, filter: 'blur(3px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    }
  );

  // Cleanup específico
  return () => {
    if (anim.scrollTrigger) anim.scrollTrigger.kill();
    anim.kill();
  };
}, []);


  return (
    <section className={styles.container}>
      <div className={styles.textBlock}>
        <h2 ref={titleRef} className={styles.title}>
          Lunch And Learn
        </h2>
        <p className={styles.subtitle}>
          Inspire innovation while savoring knowledge.
        </p>

        <div className={styles.icons}>
          <img src={nutritionIcon} alt="Nutrition icon" className={styles.icon} style={{ width: 50, height: 50 }} />
          <img src={livro} alt="Book icon" className={styles.icon} style={{ width: 50, height: 50 }} />
        </div>
      </div>
      <img src={lunchImage} alt="Lunch and Learn" className={styles.image} />
    </section>
  );
};

export default LunchAndLearnSectionGSAP;
