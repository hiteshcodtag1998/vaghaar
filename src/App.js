import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <CustomRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
