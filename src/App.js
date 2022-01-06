import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees_Screen from './components/Employees_Screen';
import Navi from './components/Navi';
import RegEmp from './components/RegEmp';
import LogEmp from './components/LogEmp';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div>
      {/* <Navi/> */}
      {/* <Employees_Screen/> */}
      {/* <RegEmp/> */}
      {/* <LogEmp/> */}

      <ParentComponent/>
    </div>
  );
}

export default App;
