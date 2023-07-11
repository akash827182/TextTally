// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';


function App() {
  return (
    <>
  
<Navbar title="TextTally" Dropdown="Tools"/>
<div className="container"><TextForms heading="Enter Text to analyse*"/></div>

    
    </>

      
  );
}

export default App;
