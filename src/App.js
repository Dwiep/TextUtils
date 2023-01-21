
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';

import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert1 from './components/Alert1';


//import { BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {

  const [mode, setMode] = useState('light'); // whether darkmode is enalbed or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message,type) =>{
      setAlert({
         msg: message,
         msgType: type
          })
      }
      setTimeout(() =>{
        setAlert(null)
      },3000);




  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161618';
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  return (
  <>   
   
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert1 alert={alert} />
        
        <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>

        
     
      
  </>
  );
}

export default App;
