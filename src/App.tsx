
import { useEffect, useState } from 'react';
import './App.css'
import Home from './Components/HomeComponent/Home'
import About from './Components/AboutComponent/About';
import Projects from './Components/ProjectsComponent/Projects';
import Contact from './Components/ContactComponent/Contact';
import Hobbies from './Components/HobbiesComponent/hobbies';
import CustomStorage from './Components/Services/customStorage';


function App() {

  const [userName, setUserName] = useState('');
  // const [viewerDetails, setViewerDetails] = useState(false);
  const [ViewMode, setViewMode] = useState(false);
  const [pagePosition, setPagePosition] = useState(0);

  const arrPages = ["About", "Projects",  "Hobbies", "Contact"]

  const customStorage = new CustomStorage();

  useEffect(() => {
    const user = customStorage.getUserFromLocalStorage();
    setUserName(user)
  }, [])
  
  return (
    RenderUI()
  )

  function updateViewMode(){
    setViewMode(!ViewMode)
  }

  function RenderUI(){
    return <>
    
    <div className='view-controls'>
      <label>
        <img onClick={updateViewMode} style={{backgroundColor : ViewMode ? 'transparent' : 'white'}} src="src\assets\icons8-row-50.png"/>
      </label> 
      <label>
        <img onClick={updateViewMode} style={{backgroundColor : !ViewMode ? 'transparent' : 'white'}} src='src\assets\icons8-select-row-50.png'/>
      </label>
    </div>

    <div className='main-holder'>
    {ViewMode ? '' : showCarouselControls(1)}
      
      <div className="component-holder">
        {userName ? '': <Home userName={userName} setUserName={setUserName}/>}

        { !userName ? <></> : displayPages()}
        
      </div>

      {ViewMode ? '' : showCarouselControls(0)}
      
    </div>
      
    </>
  }

  function displayPages(){
    return (
      <>
        { ViewMode || arrPages[pagePosition] === "About" ? <About userName={userName}/> : ''}
        { ViewMode || arrPages[pagePosition] === "Projects" ? <Projects /> : ''}
        { ViewMode || arrPages[pagePosition] === "Hobbies" ? <Hobbies /> : ''}
        { ViewMode || arrPages[pagePosition] === "Contact" ? <Contact/> : ''}
      </>
    )
  }

  function showCarouselControls(arrowSelector:number){

    if(arrowSelector){
      return (
        <div onClick={carouselBackwards} className="forward-button">
          <img src='src\assets\icons8-arrow-50.png'/>
        </div>
      )
    }

    return (
      <div onClick={carouselForward} className="forward-button">
        <img src='src\assets\icons8-arrow-50.png'/>
      </div>
    )
    
    
  }

  function carouselForward(){

    let nextPage = pagePosition + 1;
    
    if(nextPage < arrPages.length){
      setPagePosition(nextPage);
    }
  }

  function carouselBackwards(){

    let nextPage = pagePosition - 1;
    
    if(nextPage >= 0){
      setPagePosition(nextPage);
      
    }
  }
}

export default App
