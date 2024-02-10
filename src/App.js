import './App.css';
import Headersection from './components/Headersection';
import Aboutdinosection from './components/Aboutdinosection';
import Footersection from './components/Footersection';
import Roadmapsection from './components/Roadmapsection';
import Utilitysection from './components/Utilitysection';
import Tokenomics from './components/Tokenomics';
import Preloadersection from './components/Preloadersection';
import Backtop from './components/Backtop';


function App() {
  return (
    <div className=' bg-[#0A4740]'>
      <Preloadersection />
      <Headersection />
      <Aboutdinosection />
      <Tokenomics />
      <Utilitysection />
      <Roadmapsection />
      <Footersection />
      <Backtop/>
    </div>
  );
}

export default App;
