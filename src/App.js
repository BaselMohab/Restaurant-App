import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Questions from './components/Questions/Questions';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='all-container'>
      <Navbar />
      <div>
        <h1 className='title'>Our Menu</h1>
        <div className="underline"></div>
        <Menu />
      </div>
      <Questions />
      <div>
          <h2 className='rev-title'>our reviews</h2>
          <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
