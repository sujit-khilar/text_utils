import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');//wheather dark mode or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#041c2b';
      showAlert('Dark mode has been enabled','success');
      // document.title='TextUtils - Dark Mode';
      setInterval(()=>{
        document.title='TextUtils is Amezing mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils Now'
      },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled','success');
      // document.title='TextUtils - Light Mode'
    }
  }
  return (
  <>
    {/* <Navbar title="Navbar2" abouttext='about us'/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title='Textutils' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route element={<About mode={mode}/>} exact path='/about'/>
        <Route element={<Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter, Remove extra spaces" mode={mode}/>} exact path='/'/>
      </Routes>    
    </div>
    </BrowserRouter>
  </>
  );
}

export default App;
