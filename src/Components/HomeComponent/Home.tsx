import CustomStorage from "../Services/CustomStorage";
import "./Home.css"

export default function Home(props:any){

    // const [userName, setUserName] = useState('');
    const customStorage = new CustomStorage();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        props.setUserName(`${event.target.named.value}`)
        customStorage.saveUserToLocalStorage(event.target.named.value);
    }
    
    return (
        <>
        <div className="holder">
            <div className="about-form">

                <img src="src\assets\greet.jpg" />
                <form onSubmit={handleSubmit}>
                    <div className="h3-holder">
                        <h3>What's your name?</h3>
                    </div>
                    {/* onChange={(e:any) => {props.setUserName(`${e.target.value}`)}} */}
                    <input id="named" name="name" type="text" />
                    <button className="btn-subit">Submit</button>
                </form>
            </div>
            
            
        </div>

        </>
    )
}