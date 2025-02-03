import { memo } from 'react'
import image from '../../assets/images/imgcropped.jpg'
import './about.css'

/**
 * About Component that displays the about details of the developer
 * @param props props object that is passed with values that can be used in the about component
 * @returns component with content about the developer
 */
const About = (props:any) => {

    return (
        renderUI()
    )

    /**
   * function that is responsible for displaying the main content of the about component
   * @returns returns tsx component
   */
    function renderUI() {

        return <div className='holder'>
        
        <div className='about-info'>
            <h2>About Me</h2>
            <p className='about-para'>
                
            Hi there {props.userName}, I'm Sfiso, and welcome to my web portfolio! I am an Information Technology graduate with over a year of hands-on experience. In 2024, I completed my Advanced Diploma in ICT - Application Development, where I gained a solid foundation in software development.

            My experience includes building full-stack mobile and web applications, and I'm passionate about leveraging technology to create innovative and efficient solutions. Currently, I am working as a Software Developer Intern at <i><a href='https://www.1nebula.com'>1Nebula</a></i>, where I am further developing my skills in building applications while adhering to best programming practices. 
            </p>

            <div className='links'>
                <img src="src\assets\images\icons8-facebook-50.png" />
                <img src="src\assets\images\icons8-github-48.png" />
                <img src="src\assets\images\icons8-linkedin-50.png" />
            </div>
        </div>

        <div className='img-hold'>
            <img className='my-img' src={image}/>
        </div>
        

    </div>
        
    }
}

export default memo(About)