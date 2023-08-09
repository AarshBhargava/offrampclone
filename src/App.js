import FeaturePanel from './components/Features/FeaturePanel';
import Fees from './components/Fees/Fees';
import Heropage from './components/Heropage/Heropage';
import Insurance from './components/Insurance/Insurance';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import "./App.css";
import Merchant from './components/merchant/Merchant';
import Faq from './components/Faq/Faq';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heropage /> 
      <FeaturePanel /> 
      <Fees />
      <Partners />
      <Insurance />
      <Merchant />
      <Faq />
      <Footer  />
    </div>
  );
}

export default App;
