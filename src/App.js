import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './components/controller/Routes'
import Routes from './components/controller/Routes';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
