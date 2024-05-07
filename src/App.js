import { useEffect, useState } from 'react';
import './App.css';
import Advisor from './components/Advisor';
import Financial from './components/Financial';
import Highlights from './components/Highlights';
import Preloader from './components/Preloader';
import Trading from './components/Trading';
import BackToTop from './components/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader />
      </div>
    ) : (
    <div className=' bg-black overflow-x-clip'>
      <Advisor/>
      <Financial/>
      <Trading/>
      <Highlights/>
      <BackToTop/>
    </div>
       )}
       </div>
  );
}

export default App;
