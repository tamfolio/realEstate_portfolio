import './App.css';
import BestDeals from './components/BestDeals';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import Review from './components/Review';

function App() {
  return (
    <div className="">
     <Hero />
     <HowItWorks/>
     <BestDeals/>
     <Featured/>
     <Review/>
     <Newsletter/>
     <Footer />
    </div>
  );
}

export default App;
