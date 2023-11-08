import Header from "./components/Header/header"
import {GlobalStyle} from '../src/style/Global'
import Aside from "./components/Aside/aside"
import Section from "./components/Section/section"
import Footer from "./components/Footer/footer"
import WhatsAppButton from "./components/WhassApp/whatsApp"

function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Aside />
      <Section />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
