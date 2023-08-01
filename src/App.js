import logo from './logo.svg';
import './App.css';
import HomePage from './customer/Pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';

function App() {
  return (
    <div className="">
      <Navigation/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
