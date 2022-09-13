import './App.css';
import Carousel from './components/Carousel';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderPubli from './components/HeaderPubli';
import Navbar from './components/Navbar';


function App() {
  return (
   
      <div className="container">
        <HeaderPubli />
        <Header/>
        <Navbar />
        <Carousel />
        <Container />
        <Footer />
      </div>
  );
}

export default App;
