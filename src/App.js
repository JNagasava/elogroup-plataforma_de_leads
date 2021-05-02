import logo from './logo.svg';
import './App.css';
import Register from './components/view/Register' 
import PasswordValidation from './components/controller/PasswordValidation'
import LeadsPanel from './components/view/LeadsPanel';
import NewLead from './components/view/NewLead';

function App() {

  return (
    <div>
      {/* <Register passwordValidation={PasswordValidation} /> */}
      {/* <LeadsPanel /> */}
      <NewLead />
    </div>
  );
}

export default App;
