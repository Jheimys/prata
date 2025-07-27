import styles from './ReadyToLearnSection.module.css';
import confluence from '../../assets/confluence.png'
import ia from '../../assets/IA.jpg'
import equilibrio from '../../assets/equlibrio.jpg';
import prataLinving from '../../assets/prataLiving.png'

const images = [
  { src: confluence, alt: 'Confluence Resource 1', link: 'https://confluence.atlassian.com/' },
  { src: equilibrio, alt: 'Confluence Resource 2', link: 'https://confluence.atlassian.com/' },
  { src: prataLinving, alt: 'Confluence Resource 3', link: 'https://confluence.atlassian.com/' },
  { src: ia, alt: 'Confluence Resource 4', link: 'https://confluence.atlassian.com/' },
];

const ReadyToLearnSection = () => (
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
    <h2 className={styles.title}>The snack is ready. Now, let’s learn!</h2>
    <p className={styles.subtitle}>
      Explore resources and boost your knowledge with just one click.
    </p>
  </div>
  
</section>
);

export default ReadyToLearnSection;
