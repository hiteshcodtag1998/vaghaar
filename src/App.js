import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div >
      <Header />
      <Contact />
      <Footer />
      {/* <header className="App-header"> */}
      {/* <Home /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
