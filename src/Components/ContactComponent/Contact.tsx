import './contact.css'

export default function Contact(){

    return (
        <>

    <div className="holder">
                <div className="contact-form">

                    
                    <img className='my-img' src="src\assets\contact.jpg" />
                    
                    <form>
                        <div className="h13-holder">
                            <h3>Let's get in touch</h3>
                        </div>
                        
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="number" placeholder="Contact"/>
                        <textarea placeholder='Message'></textarea>
                        <button className="btn-subit">Submit</button>
                    </form>
                </div>
                
                
            </div>
            
        </>
    )
}