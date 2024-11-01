import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToTopButton />
      <About />
    </>
  )
}

export default App
