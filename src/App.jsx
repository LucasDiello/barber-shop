import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {

  return (
    <>
    <Header />
    <main>
      <article>
        <Hero />
        <Services />
      </article>
    </main>
    </>
  )
}

export default App
