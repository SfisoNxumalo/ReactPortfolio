import { memo } from "react";
import CustomStorage from "../../../Services/CustomStorage";
import "./Home.css"
// import { Checkbox } from "@mantine/core";


/**
 * Home Component that acts as the default page for the website
 * @param props props object that is passed with values that can be used in the about component 
 * @returns home component with content of the landing page
 */
const Home = (props:any) => {

    const customStorage = new CustomStorage();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        props.setUserName(`${event.target.named.value}`)
        customStorage.saveUserToLocalStorage(event.target.named.value);
    }
    
    return (
        renderUI()
    )

    /**
     * function that is responsible for displaying the main content of the home component
     * @returns returns tsx component
     */
    function renderUI(){
        return (
            <>
            <div className="holder">
                <div className="about-form">
    
                    <img src="src\assets\images\greet.jpg" />
                    <form onSubmit={handleSubmit}>
                        <div className="h3-holder">
                            <h3>What's your name?</h3>
                        </div>
                        {/* onChange={(e:any) => {props.setUserName(`${e.target.value}`)}} */}
                        <input id="named" name="name" type="text" />
                        <button className="btn-subit">Submit</button>
                        {/* <Checkbox
                            defaultChecked
                            label="Save Information"
                        /> */}
                    </form>
                </div>
                
                
            </div>
    
            </>
        )
    }
};

export default memo(Home) 