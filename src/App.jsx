import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import Gallery from './Components/Gallery/Gallery'


const App = () => {

  const {t,i18n} = useTranslation();


  return (
    <div>
      <Navbar/>  
      <Hero/>
      <div className="container">
        <Title subTitle={t('our program')} title={t('What we Offer')}/>
        <Programs/>
        <About/>
        <Title subTitle={t('Gallery')} title={t('Our Class')}/>
        <Gallery />
        <Title subTitle={t('contact us')} title={t('Get in Touch')}/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App