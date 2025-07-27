import Banner from "./components/Banner"
import banner from "./assets/banner-por-sol.webp"
// import ponteVaco from './assets/abstract-banner.avif'
import prataVista from './assets/prata-vista.jpg'
import Header from "./components/Header"
import ParallaxBanner from "./components/Parallax"
import Footer from "./components/Footer"
import LunchAndLearnSectionGSAP from "./components/LunchAndLearnSectionGSAP"
import ReadyToLearnSectionGSAP from "./components/ReadyToLearnSectionGsap"



function App() {
 

  return (
    <>
        <Header />
        <Banner src={banner} alt="banner prata linving" />
        <LunchAndLearnSectionGSAP />
        <ReadyToLearnSectionGSAP />
        <ParallaxBanner image={prataVista} />
        <Footer />
    </>
  )
}

export default App
