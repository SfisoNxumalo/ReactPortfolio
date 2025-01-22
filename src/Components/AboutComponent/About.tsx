import image from '../../assets/imgcropped.jpg'
import './about.css'
export default function About(props:any){



    return <div className='main-div'>
        
        <div className='about-info'>
            <h2>About Me</h2>
            <p className='about-para'>
                
            Hi there {props.userName}, I'm Sfiso, and welcome to my web portfolio! I am an Information Technology graduate with over a year of hands-on experience. In 2024, I completed my Advanced Diploma in ICT - Application Development, where I gained a solid foundation in software development.

            My experience includes building full-stack mobile and web applications, and I'm passionate about leveraging technology to create innovative and efficient solutions. Currently, I am working as a Software Developer Intern at <i><a href='https://www.1nebula.com'>1Nebula</a></i>, where I am further developing my skills in building applications while adhering to best programming practices. 
            </p>
        </div>

        {/* <div className='c'> */}
            <img className='my-img' src={image}/>
        {/* </div> */}
        

    </div>
}