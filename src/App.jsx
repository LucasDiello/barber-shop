import './App.css'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Galery from './components/Galery'
import Header from './components/Header'
import Hero from './components/Hero'
import Prices from './components/Prices'
import Services from './components/Services'

function App() {

  return (
    <>
    <Header />
    <main>
      <article>
        <Hero />
        <Services />
        <Prices />
        <Galery />
        <Appointment />
      </article>
    </main>
    <Footer/>
    </>
  )
}

export default App
