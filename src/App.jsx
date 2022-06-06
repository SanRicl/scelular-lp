import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Services from './components/services/Services';
import Localization from './components/localization/Localization.jsx';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Services />
      <Localization />
      <Contact />
    </div>
  );
}

export default App;
