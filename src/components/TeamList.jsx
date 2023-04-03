import { NavLink } from "react-router-dom";
import '../styles/TeamList.css';

export const TeamList = ({ team }) => {
    return (
        <tr className="table-dark text-center">
            <td><img src={team.crestUrl} alt={team.name} /></td>
            <td>{team.name}</td>
            <td>
                <div id="buttons-container">
                    <NavLink to={`/team/watch/${team.tla}`}>
                        <button type="button" className="btn btn-primary">Watch</button>
                    </NavLink>
                    <NavLink to={`/team/edit/${team.tla}`}>
                        <button type="button" className="btn btn-info">Edit</button>
                    </NavLink>
                    <NavLink to={`/team/delete/${team.tla}`}>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </NavLink>
                </div>
            </td>
        </tr>
    )
}
