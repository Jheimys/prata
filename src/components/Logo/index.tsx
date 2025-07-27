type LogoProps = {
  src: string;
  alt: string;
};

const Logo = ({ src, alt }: LogoProps) => (
  <img src={src} alt={alt} style={{ height: '40px' }} />
);

export default Logo;
