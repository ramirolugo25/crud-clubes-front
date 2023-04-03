import { NavLink, useParams } from "react-router-dom";
import { getTeam } from "../helpers/getTeam"
import { useFetch } from "../hooks/useFetch"

export const WatchTeam = () => {

    const { tla } = useParams();
    const { data, error, loading } = useFetch(getTeam, tla);

    return (
        <>
            {
                error &&
                <h5>{error}</h5>
            }
            {
                data && !loading &&
                <div className="card" style={{ width: "18rem" }}>
                    <img src={data.crestUrl} className="card-img-top" alt={`${data.name}-image`} />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Country:</b> {data.area.name}</li>
                        <li className="list-group-item"> <b>Address:</b> {data.address}</li>
                        <li className="list-group-item"> <b>Website:</b> {data.website}</li>
                        <li className="list-group-item"> <b>Founded:</b> {data.founded}</li>
                        <li className="list-group-item"> <b>Venue:</b> {data.venue}</li>
                    </ul>
                </div>
            }
            <NavLink to='/'>
                <button type="button" className="btn btn-light">Back</button>
            </NavLink>
            {
                loading &&
                <h3>Loading...</h3>
            }
        </>




    )
}
