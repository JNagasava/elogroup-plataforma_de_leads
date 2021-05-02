import logo from './logo.svg';
import './App.css';
import Register from './components/view/Register' 
import PasswordValidation from './components/controller/PasswordValidation'

function App() {

  return (
    <div className="container">
      <Register passwordValidation={PasswordValidation} />
    </div>
  );
}

export default App;
