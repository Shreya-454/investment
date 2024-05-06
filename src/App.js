import './App.css';
import Advisor from './components/Advisor';
import Financial from './components/Financial';
import Highlights from './components/Highlights';
import Trading from './components/Trading';

function App() {
  return (
    <div className=' bg-black'>
      <Advisor/>
      <Financial/>
      <Trading/>
      <Highlights/>
    </div>
  );
}

export default App;
