import './App.css'
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
      </article>
    </main>
    </>
  )
}

export default App
