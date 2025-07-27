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
  const titleRef2= useRef<HTMLHeadingElement>(null);

  useEffect(() => {
  if (!titleRef2.current) return;

  const anim = gsap.fromTo(
    titleRef2.current,
    { opacity: 0, y: 100, filter: 'blur(0)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: titleRef2.current,
        // markers: true, 
        start: 'top 95%',
        end: 'bottom 50%',
        // scrub: true,
        toggleActions: 'play none none reverse',
      }
    }

  );

    // Força o ScrollTrigger a recalcular após o layout estar pronto
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100); // espera um pouco após o render

  // Cleanup específico
  return () => {
    if (anim.scrollTrigger) anim.scrollTrigger.kill();
    anim.kill();
  };
}, []);




// useEffect(() => {
//   if (!titleRef2.current) return;

//   const mm = gsap.matchMedia();

//   mm.add("(min-width: 768px)", () => {
//     const anim = gsap.fromTo(
//       titleRef2.current,
//       { opacity: 0, y: 100, filter: 'blur(0)' },
//       {
//         opacity: 1,
//         y: 0,
//         filter: 'blur(0px)',
//         duration: 1,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: titleRef2.current,
//           start: 'top 90%',
//           end: 'bottom 50%',
//           toggleActions: 'play none none reverse',
//         }
//       }
//     );
//     return () => {
//       if (anim.scrollTrigger) anim.scrollTrigger.kill();
//       anim.kill();
//     };
//   });

//   mm.add("(max-width: 767px)", () => {
//     const anim = gsap.fromTo(
//       titleRef2.current,
//       { opacity: 0, y: 100, filter: 'blur(0)' },
//       {
//         opacity: 1,
//         y: 0,
//         filter: 'blur(0px)',
//         duration: 1,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: titleRef2.current,
//           start: 'top 95%',
//           end: 'bottom 60%',
//           toggleActions: 'play none none reverse',
//         }
//       }
//     );
//     return () => {
//       if (anim.scrollTrigger) anim.scrollTrigger.kill();
//       anim.kill();
//     };
//   });

//   return () => {
//     mm.revert(); // ✅ funciona perfeitamente agora
//   };
// }, []);






  return (
    <section  className={styles.container}>

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

      <div  className={styles.textBlock}>
        <h2 ref={titleRef2} className={styles.title} id='titulo-ready'>
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
