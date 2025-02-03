import "./experience.css";


/**
 * Experience Component that displays the experience details of the developer
 * @returns component of the experience page
 */
export default function Experience() {

    console.log("Experience");
    
    return renderUI();

    /**
     * function that is responsible for displaying the main content of the experience component
     * @returns returns tsx component
     */
    function renderUI() {
        return (
            <div className="holder">
                <div className="about-info">
                    <h2>Experience</h2>

                    <div className="items-holder">
                        <div className="item-holder">
                            <label>
                                <b>
                                    <img src="src\assets\images\business-logo1.png" />
                                </b>
                            </label>
                            <label className="date">Mar 2024 - Nov 2024</label>
                            <p>
                                -I actively took part in the development of web applications and
                                APIs
                            </p>
                            <p>
                                -I took on the role of a team lead, teaching and guiding interns
                                on full-stack{" "}
                            </p>
                            <p>
                                development using the M.E.A.N stack and applying best practices.
                            </p>
                            <p>
                                -I conducted regular code reviews to main code quality and
                                consistency.
                            </p>
                            <div className="stick"></div>
                        </div>

                        <div className="item-holder">
                            <label>
                                <b>
                                    <img src="src\assets\images\nebula-logo.png" />
                                </b>
                            </label>
                            <label className="date">Jan 2025 - Dec 2025</label>
                            <p>
                                -Contributing to team projects and an individual project, gaining
                                hands-on experience in software development, API integration, and
                                backend code using React, C# and .NET, and cloud services from
                                Azure
                            </p>
                            {/* <p>-Applying Agile methodologies, collaborating with cross-functional teams to deliver iterative project milestones.</p> */}
                            <p>
                                -Gaining practical exposure to Onion Architecture, enhancing
                                application structure and scalability.
                            </p>
                            <div className="stick"></div>
                        </div>
                    </div>
                    <div className="liner"></div>
                </div>
            </div>
        );
    }
}
