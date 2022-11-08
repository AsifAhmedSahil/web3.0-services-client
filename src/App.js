
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { Feature } from './components/Feature';
// import { Footer } from './components/Footer';
// import { Header } from './components/Header';
// import { Nav } from './components/Nav';
// import { Team } from './components/Teams';
import router from './Router/Routes/Routes';



function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      {/* <Nav/>
      <Header/>
      <Feature/>
      <Team/>
      <Footer/> */}
    </div>
  );
}

export default App;
