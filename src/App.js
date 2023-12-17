//import logo from './logo.svg';
import './App.css';
import Delivery from './components/Delivery';
import Featured from './components/Featured';
import TipPicks from './components/TipPicks';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
     <TipPicks/>
    </div>
  );
}

export default App;
