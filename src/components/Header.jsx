import { useState } from "react";
import { NavLink } from "react-router-dom"
import '../styles/Header.css';

export const Header = () => {

  const BASEURL = 'https://crud-clubes-back.onrender.com/';
  const [erroMessage, setErroMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const response = await fetch(form.action, {
      method: 'PUT',
    });


    if (!response.ok) {
      setErroMessage(true);
    } else {
      window.location.reload();
    }
  }

  return (
    <>
      <div id="header-container">
        <form action={BASEURL} onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-secondary">Reset Teams</button>
        </form>
        <NavLink to='/team/add'>
          <button type="button" className="btn btn-primary">Add Team</button>
        </NavLink>
      </div>
      {
        erroMessage &&
        <div className='alert alert-danger' role="alert">
          Could not delete team
        </div>
      }
    </>

  )
}
