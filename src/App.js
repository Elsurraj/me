import './index.css';
import {useEffect} from 'react'; // 4.1k (gzipped: 1.8k)
import Aos from 'aos' //15k (gzipped: 4.8k)

import  './app.css'
import Header  from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Hero from './component/Ul/Hero';
import Services from './component/Ul/Services';
import Portfolio from './component/Ul/Portfolio'
import Contact from './component/Ul/Contact';

function App(){
  useEffect(() =>{
    Aos.init();
  }, []);

  return(
  <div>
    <Header />
    <main>
     <Hero />
     <Services />
     <Portfolio />
     <Contact />
    </main>
    <Footer/>
</div>
)
}


export default App
