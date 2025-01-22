
import { useState } from 'react';
import './App.css'
import Home from './Components/HomeComponent/Home'
import About from './Components/AboutComponent/About';
import Projects from './Components/ProjectsComponent/Projects';
import Contact from './Components/ContactComponent/Contact';
import Hobbies from './Components/HobbiesComponent/hobbies';
import CustomStorage from './Components/Services/customStorage';


function App() {

  const [userName, setUserName] = useState('');
  const [viewerDetails, setViewerDetails] = useState(false);
  const [ViewMode, setViewMode] = useState(false);

  function updateViewMode(){
    setViewMode(!ViewMode)
  }

  const customStorage = new CustomStorage();
  
      
  return (
    <>
    <div className='view-controls'>
      <label>
        <img onClick={updateViewMode} style={{backgroundColor : ViewMode ? 'transparent' : 'white'}} src="src\assets\icons8-row-50.png"/>
      </label> 
      <label>
        <img onClick={updateViewMode} style={{backgroundColor : !ViewMode ? 'transparent' : 'white'}} src='src\assets\icons8-select-row-50.png'/>
      </label>
    </div>

    <div className='main-holder'>
      <div className="forward-button">
      <img src='src\assets\icons8-arrow-50.png'/>
      </div>

      <div className="component-holder">
        <Home userName={userName} setUserName={setUserName}/>

        { !viewerDetails ? <></> : displayPages(userName)}
        
      </div>

      <div className="forward-button">
        <img src='src\assets\icons8-arrow-50.png'/>
      </div>
      
    </div>
      
    </>
  )
}

function displayPages(userName:string){
  return (
    <>
      <About userName={userName}/>
      <Projects />
      <Contact/>
      <Hobbies />
    </>
  )
}

export default App
