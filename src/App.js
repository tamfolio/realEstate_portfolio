import './App.css';
import BestDeals from './components/BestDeals';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="">
     <Hero />
     <HowItWorks/>
     <BestDeals/>
     <Newsletter/>
     <Footer />
    </div>
  );
}

export default App;
