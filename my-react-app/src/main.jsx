
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <About />
    <Footer/>

    </>
  
)
