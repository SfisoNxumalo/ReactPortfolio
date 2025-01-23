import './contact.css'

/**
 * Contact Component that displays the contact details of the developer
 * @returns component of the contact page
 */
export default function Contact() {

    return (
        renderUI()
    )

    /**
     * function that is responsible for displaying the main content of the contact component
     * @returns returns tsx component
     */
    function renderUI() {
        return <>
            <div className="holder">
                <div className="contact-form">


                    <img className='my-img' src="src\assets\images\contact.jpg" />

                    <form>
                        <div className="h13-holder">
                            <h3>Let's get in touch</h3>
                        </div>

                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Contact" />
                        <textarea placeholder='Message'></textarea>
                        <button className="btn-subit">Submit</button>
                    </form>
                </div>


            </div>

        </>
    }
}