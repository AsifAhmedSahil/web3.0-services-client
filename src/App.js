
import './App.css';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Team } from './components/Teams';



function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Nav/>
      <Header/>
      <Feature/>
    </div>
  );
}

export default App;
