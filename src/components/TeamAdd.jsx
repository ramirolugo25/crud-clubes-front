import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/TeamAdd.css';

export const TeamAdd = () => {

    const BASEURL = 'https://crud-clubes-back.onrender.com/';
    const [messageInfo, setMessageInfo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
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
    }


    return (
        <div id="add-team-container">
            <h1>Add Team</h1>

            <form action={`${BASEURL}team/add`} method="post" encType="multipart/form-data" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tla" className="form-label">TLA</label>
                    <input type="text" className="form-control" name="tla" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" name="country" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" />
                </div>

                <div className="mb-3">
                    <label htmlFor="website" className="form-label">Website</label>
                    <input type="text" className="form-control" name="website" />
                </div>

                <div className="mb-3">
                    <label htmlFor="founded" className="form-label">Founded</label>
                    <input type="text" className="form-control" name="founded" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="venue" className="form-label">Venue</label>
                    <input type="text" className="form-control" name="venue" />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" name="image" required />
                </div>

                <button type="submit" className="btn btn-primary" name="submit">Submit</button>
            </form>
            {
                messageInfo !== '' &&
                <div className={messageInfo.state ? `alert alert-success` : `alert alert-danger`} role="alert">
                    {messageInfo.message}
                </div>
            }

            <NavLink to='/'>
                <button type="button" className="btn btn-light">Back</button>
            </NavLink>

        </div>

    )
}



{/* { { #if data.message } }
    <div class="alert alert-success" role="alert">
        {{ data.message }}
    </div>
    {
        {
            /if}}

            { { #if data.error } }
            <div class="alert alert-danger" role="alert">
                {{ data.error }}
            </div>
            { { /if}}
  )
} */}
