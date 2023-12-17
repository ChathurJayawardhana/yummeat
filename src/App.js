//import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';
import Delivery from './components/Delivery';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Meal from './components/Meal';
import NewsLetter from './components/NewsLetter';
import TipPicks from './components/TipPicks';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
     <TipPicks/>
     <Meal/>
     <Categories/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
