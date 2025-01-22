
import CustomStorage from "../Services/customStorage";
import "./Home.css"


export default function Home(props:any){

    // const [userName, setUserName] = useState('');
    const customStorage = new CustomStorage();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        customStorage.saveUserToLocalStorage(props.userName);
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
                    
                    <input type="text" onChange={(e:any) => {props.setUserName(`${e.target.value}`)}}/>
                    <button className="btn-subit">Submit</button>
                </form>
            </div>
            
            
        </div>

        </>
    )
}