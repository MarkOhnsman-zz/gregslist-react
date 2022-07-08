import { useState } from 'react';
import './App.scss';
import { Navbar } from "./components/Navbar";
import { Car } from './models/Car';
import { generateId, Home } from './pages/Home';





function App() {
  const [cars, setCars] = useState<Car[]>([
    { id: generateId(), make: 'Ford', model: 'Mustang', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#8c23f1' },
    { id: generateId(), make: 'KIA', model: 'Niro', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },
    { id: generateId(), make: 'Honda', model: 'Pilot', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },
    { id: generateId(), make: 'Tesla', model: 'CyberTruck', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },

  ])
  return (
    <div className="App" id="app">
      <header>
        <Navbar cars={cars} setCars={setCars} />
      </header>
      <main>
        <Home cars={cars} setCars={setCars} />
      </main>
      <footer className='bg-dark text-light text-center p-4'>
        <div>Made with ♥ in React</div>
      </footer>
    </div>
  );
}

export default App;
