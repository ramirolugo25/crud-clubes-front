import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getTeam } from "../helpers/getTeam";
import { useFetch } from "../hooks/useFetch";


export const EditTeam = () => {

    const BASEURL = 'https://crud-clubes-back.onrender.com/';
    const { tla } = useParams();
    const { data, error, loading } = useFetch(getTeam, tla);
    const [form, setForm] = useState({});
    const [messageInfo, setMessageInfo] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formSend = event.target;
        const formData = new FormData(formSend);

        const response = await fetch(formSend.action, {
            method: 'PUT',
            body: formData
        });



        const responseText = await response.text();
        if (response.ok) {
            setMessageInfo(
                {
                    state: true,
                    message: responseText,
                }
            );
        } else {
            setMessageInfo(
                {
                    state: false,
                    message: responseText,
                }
            );
        }

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (data) {
            setForm({
                ...form,
                name: data.name,
                country: data.area.name,
                address: data.address,
                website: data.website,
                founded: data.founded,
                venue: data.venue,
            });
        }

    }, [data])


    return (
        <>
            <h1>Edit Team</h1>
            {
                error &&
                <h5>{error}</h5>
            }
            {
                data && !loading &&
                <form action={`${BASEURL}team/edit/${tla}`} encType="multipart/form-data" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={form.name || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={form.country || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={form.address || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="text" className="form-control" name="website" value={form.website || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="founded" className="form-label">Founded</label>
                        <input type="text" className="form-control" name="founded" value={form.founded || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="venue" className="form-label">Venue</label>
                        <input type="text" className="form-control" name="venue" value={form.venue || ''} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <img src={data.crestUrl} alt="" />
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" />
                    </div>

                    <button type="submit" className="btn btn-primary" name="submit">Submit</button>
                </form>
            }
            {
                messageInfo !== '' &&
                <div className={messageInfo.state ? `alert alert-success` : `alert alert-danger`} role="alert">
                    {messageInfo.message}
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
