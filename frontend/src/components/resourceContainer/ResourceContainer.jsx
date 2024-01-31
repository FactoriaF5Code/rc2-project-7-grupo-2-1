import { useAxios } from "../../hooks/useAxios"
import { Resource } from "../resource/Resource";
import './ResourceContainer.css'

export const ResourceContainer = () => {

    const {data} = useAxios('http://localhost:8080/resources');

  return (
      <main className="containers">
        <div>
          <h1>Todos mis apuntes</h1>
          <button>+</button>
        </div>
        <ul>
        {data && 
            data.map((resource) => (
                <Resource key={resource.id} {...resource}/>
            ))
        }
        </ul>
      </main>
  )
}
