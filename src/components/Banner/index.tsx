import styles from './Banner.module.css';

type BannerProps = {
  src: string; 
  alt: string;
}

const Banner = ({src, alt}: BannerProps) => {
  return (
    <div className={styles.bannerContainer}>
        <img src={src} alt={alt} className={styles.banner}/>
        <div className={styles.overlay}>
            <h1 className={styles.titulo}>PRATA</h1>
            <span className={styles.subtitulo} >LIVING CONCEPT</span>
        </div>

    </div>
  )
}

export default Banner