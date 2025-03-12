import { memo } from 'react';
import './hobbies.css'

/**
 * Hobbies Component that displays the hobbies details of the developer
 * @returns component of the hobbies page
 */
const Hobbies = () => {
    
    return (
        renderUI()
    )

    /**
     * function that is responsible for displaying the main content of the hobbies component
     * @returns returns tsx component
     */
    function renderUI() {
        return (
            <>
                <div className="holder">
                    <div className="hobby-holder">
                        <h2>Hobbies</h2>
                        <p>Off the computer, I enjoying these activities</p>
                        <div className="hobby-container">
                            <div>
                                <img
                                    className="hobby-img"
                                    src="src/assets/images/footballnet2.jpg"
                                />
                                <label className="hobby-repo-title">Soccer</label>
                            </div>

                            <div>
                                <img
                                    className="hobby-img"
                                    src="src/assets/images/gaming.jpg"
                                />
                                <label className="hobby-repo-title">Gaming</label>
                            </div>

                            <div>
                                <img
                                    className="hobby-img"
                                    src="src/assets/images/hiking2.jpg"
                                />
                                <label className="hobby-repo-title">Hiking</label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default memo(Hobbies)