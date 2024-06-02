
import './App.css'
import { Tokenomics } from './Components/Tokenomics'

import { CardPage } from './Components/cardpage'
import { FaqComponent } from './Components/faq'
import { Footer } from './Components/footer'
import { IntroductionPage } from './Components/main'



import { HomePage } from './Pages/HomePage'

function App() {

  return (
    <>

    <HomePage/>
    <IntroductionPage/>
    <Tokenomics/>
    <CardPage/>
    <FaqComponent/>
    <Footer/>
    </>
  )
}

export default App
