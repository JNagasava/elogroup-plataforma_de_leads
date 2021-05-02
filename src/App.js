import logo from './logo.svg';
import './App.css';
import Register from './components/view/Register' 
import PasswordValidation from './components/controller/PasswordValidation'
import LeadsPanel from './components/view/LeadsPanel';

function App() {

  return (
    <div>
      {/* <Register passwordValidation={PasswordValidation} /> */}
      <LeadsPanel />
    </div>
  );
}

export default App;
