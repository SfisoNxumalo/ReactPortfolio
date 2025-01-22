import { useState, useEffect } from "react";
import './projects.css'

export default function Projects(){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://api.github.com/users/sfisonxumalo/repos?per_page=5`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    const repos = data.map((repo:any, index) => <a key={index} href={repo.html_url}><label className="repo-title">{repo.name}</label><p className="repo-desc"><i>{repo.description}</i></p></a>)

    return <>
    <div className="holder">
        <div className="project-holder">
            <h2>Projects</h2>
            <p>Here some of the projects I've worked on throughtout my journey.</p>
            <div className="container">
                {repos}
            </div>
        </div>
        
    </div>
   
    </>
}

