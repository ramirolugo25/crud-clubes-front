import { TeamList } from "./TeamList";
import { useFetch } from "../hooks/useFetch";
import '../styles/Teams.css';
import { getTeams } from "../helpers/getTeams";
import { Header } from "./Header";

export const Teams = () => {

    const { data, error, loading } = useFetch(getTeams);
  
return (
    <>
      <Header/>
      {error &&
        <h1 id='error'>{error}</h1>
      }
      {data && !loading &&

        <table className="table" id="table">
          <thead>
            <tr className="table-dark text-center">
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((team) => <TeamList team={team} key={team.tla} />)}
          </tbody>
        </table>
      }

    </>
  )
}
