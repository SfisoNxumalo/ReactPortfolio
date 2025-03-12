import './projects.css'

import useFetch from "../../../Hooks/useFetch";
import { Project } from '../../../Interfaces/IProject';
import { useQuery } from '@tanstack/react-query';

export default function Projects() {

    const [data] = useFetch(`https://api.github.com/users/sfisonxumalo/repos?per_page=6`);

    // const { isLoading, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //       fetch('https://api.github.com/users/sfisonxumalo/repos?per_page=6').then((res) =>
    //         res.json(),
    //       ),
    //   })

    const repos = data.map((repo: Project, index:number) =>
        <a key={index} href={repo.html_url}>
            <label className="repo-title">{repo.name}</label>
            <p className="repo-desc"><i>{repo.description || 'No Description for this project'}</i></p>
        </a>
    )

    console.log(data);
    

    return renderUI()

    /**
     * function that is responsible for displaying the main content of the projects component
     * @returns returns tsx component
     */
    function renderUI() {
        return (
            <>
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
        )
    }
}

