import './App.scss';
import { Navbar } from "./components/Navbar";
import { Home } from './pages/Home';





function App() {
  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer className='bg-dark text-light text-center p-4'>
        <div>Made with ♥ in React</div>
      </footer>
    </div>
  );
}

export default App;
