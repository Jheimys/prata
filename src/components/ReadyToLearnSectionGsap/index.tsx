import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './ReadyToLearnSectionGsap.module.css';
import confluence from '../../assets/confluence.png'
import ia from '../../assets/IA.jpg'
import equilibrio from '../../assets/equlibrio.jpg';
import prataLinving from '../../assets/prataLiving.png'

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: confluence, alt: 'Confluence Resource 1', link: 'https://confluence.atlassian.com/' },
  { src: equilibrio, alt: 'Confluence Resource 2', link: 'https://confluence.atlassian.com/' },
  { src: prataLinving, alt: 'Confluence Resource 3', link: 'https://confluence.atlassian.com/' },
  { src: ia, alt: 'Confluence Resource 4', link: 'https://confluence.atlassian.com/' },
];

const ReadyToLearnSectionGSAP = () => {
  const TituloRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
  if (!TituloRef.current) return;

  const anim = gsap.fromTo(
    TituloRef.current,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: TituloRef.current,
        markers: true, 
        start: 'top bottom-=100',  
        end: 'top bottom-=300',    
        scrub: 0.7,     
        toggleActions: 'play none none reverse', // opcional, não necessário com scrub
      }
    }
  );

  return () => {
    if (anim.scrollTrigger) anim.scrollTrigger.kill();
    anim.kill();
  };
}, []);


  return (
    <section className={styles.container}>

      <div className={styles.imagesGrid}>
        {images.map((img, idx) => (
          <a
            key={idx}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img src={img.src} alt={img.alt} className={styles.image} />
          </a>
        ))}
      </div>

      <div className={styles.textBlock}>
        <h2 ref={TituloRef} className={styles.title}>
          The snack is ready. Now, let’s learn!
        </h2>
        <p className={styles.subtitle}>
          Explore resources and boost your knowledge with just one click.
        </p>
      </div>
    </section>
  );
};

export default ReadyToLearnSectionGSAP;
