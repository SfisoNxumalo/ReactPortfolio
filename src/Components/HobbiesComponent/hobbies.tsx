import imag from '../../assets/footballnet2.jpg'
import './hobbies.css'

export default function Hobbies(){

    return (
        <>
        <div className="holder">
        <div className="hobby-holder">
            <h2>Hobbies</h2>
            <p>Off the computer, I enjoying these activities</p>
            <div className="hobby-container">
                <div>
                    <img className='hobby-img' src='src/assets/footballnet2.jpg'/>
                    <label className="hobby-repo-title">Soccer</label>
                </div>

                <div>
                    <img className='hobby-img' src='src/assets/gaming.jpg'/>
                    <label className="hobby-repo-title">Gaming</label>
                </div>

                <div>
                    <img className='hobby-img' src='src/assets/hiking2.jpg'/>
                    <label className="hobby-repo-title">Hiking</label>
                </div>

            
            </div>
        </div>
        
    </div>
        
        </>
    )
}