import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="content">
    <Info />
    <About />
    <Interests />
    <Footer />
  </div>
);
