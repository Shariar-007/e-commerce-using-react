import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from './customer/Pages/HomePage';
import Footer from './customer/components/Footer/Footer';

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
