import { useState, useEffect } from "react";
import CustomStorage from "../../../Services/CustomStorage";
import About from "../AboutComponent/About";
import Contact from "../ContactComponent/Contact";
import Experience from "../ExperienceComponent/Exprience";
import Hobbies from "../HobbiesComponent/hobbies";
import Home from "../HomeComponent/Home";
import Projects from "../ProjectsComponent/Projects";

import Login from "../../DialogComponent/LoginDialog/Login"
import { Link } from "react-router-dom";

export default function Main() { //Entry Function to the main App Component
  
  /**
   * useState Hook is used to access state in the React functional components. 
   * 'It is a special function that allows you to manage state within functional 
   * components without the need for class-based components'
   */
  const [userName, setUserName] = useState(''); 
  const [ViewMode, setViewMode] = useState(false);
  const [pagePosition, setPagePosition] = useState(0);

  /**
   * String Array that contains all the available,pages you can navigate to
   */
  const arrPages = ["About", "Projects", "Experience", "Hobbies", "Contact"]

  /**
   * Instance of custom storage class
   */
  const customStorage = new CustomStorage();

  /**
   * The useEffect Hook allows you to perform side effects in your components.
   * Some examples of side effects are: fetching data, directly updating the DOM, and timers.
   */
  useEffect(() => {
    const user = customStorage.getUserFromLocalStorage();
    setUserName(user)
    return
  }, [])
  
  return (
    RenderUI()
  )

  /**
   * function that is responsible for displaying the main content of the app component
   * @returns returns tsx component
   */
  function RenderUI(){
    return <>
    
    <div className='view-controls'>

      {ViewMode ? '' : <div  className='navbar'>
        <label onClick={() => setPagePosition(0)}>About</label>
        <label onClick={() => setPagePosition(1)}>Projects</label>
        <label onClick={() => setPagePosition(2)}>Experience</label>
        <label onClick={() => setPagePosition(3)}>Hobbies</label>
        <label onClick={() => setPagePosition(4)}>Contact</label>
      </div>}

      <label className="download-cv"> Download CV</label>

      <label>
        <img onClick={updateViewMode} style={{backgroundColor : ViewMode ? 'transparent' : 'white'}} src="src\assets\images\icons8-row-50.png"/>
      </label> 
      <label>
        <img onClick={updateViewMode} style={{backgroundColor : !ViewMode ? 'transparent' : 'white'}} src='src\assets\images\icons8-select-row-50.png'/>
      </label>
    </div>

    <div className='main-holder'>
    {ViewMode ? '' : showCarouselControls(1)}
      
      <div className="component-holder">
        {userName ? '': <Home setUserName={setUserName}/>}

        { !userName ? <></> : displayPages()}
        
      </div>

      {ViewMode ? '' : showCarouselControls(0)}
      
    </div>
      
    </>
  }

  /**
   * function that is responsible for displaying the main content of the app component
   * @returns returns tsx component of the different components that must be show
   */
  function displayPages(){
    return (
      <>
        { ViewMode || arrPages[pagePosition] === "About" ? <About userName={userName}/> : ''}
        { ViewMode || arrPages[pagePosition] === "Projects" ? <Projects /> : ''}
        { ViewMode || arrPages[pagePosition] === "Experience" ? <Experience /> : ''}
        { ViewMode || arrPages[pagePosition] === "Hobbies" ? <Hobbies /> : ''}
        { ViewMode || arrPages[pagePosition] === "Contact" ? <Contact/> : ''}
      </>
    )
  }

  function updateViewMode(){
    setViewMode(!ViewMode)
  }

  function showCarouselControls(arrowSelector:number){

    if(arrowSelector){
      return (
        <div onClick={carouselBackwards} className="forward-button">
          <img src='src\assets\images\icons8-arrow-50.png'/>
        </div>
      )
    }

    return (
      <div onClick={carouselForward} className="forward-button">
        <img src='src\assets\images\icons8-arrow-50.png'/>
      </div>
    )
    
    
  }

  function carouselForward(){

    let nextPagePosition = pagePosition + 1;
    
    if(nextPagePosition < arrPages.length){
      setPagePosition(nextPagePosition);
    }
  }

  function carouselBackwards(){

    let previousPagePosition = pagePosition - 1;
    
    if(previousPagePosition >= 0){
      setPagePosition(previousPagePosition);
      
    }
  }
}