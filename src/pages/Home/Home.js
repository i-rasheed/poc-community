import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageDisplay from "../../components/MessageDisplay/MessageDisplay";
import NavBar from "../../components/NavBar/NavBar";
import { members } from "../../users";
import "../Home/Home.css";
const initialValues = {
  email: "",
  password: "",
};

export default function Home() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    const isRegisteredMember = members.find(
      (el) => el.email === email && el.password === password
    );
    if (!isRegisteredMember) {
      return setError("You are not a registered member. please register!");
    }
    const userInfo = {
      id: isRegisteredMember.id,
      name: isRegisteredMember.name,
      email,
      password,
    };
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate("/propose");
  };

  return (
    <div className='home-wrapper'>
      <NavBar />
      <h3>Login</h3>
      {error && <MessageDisplay error={error} />}
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='expense'>Email</label>
          <input
            type='text'
            className='form-control'
            name='email'
            onChange={handleInputChange}
            value={values.email}
            id='email'
            placeholder='Enter email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='type'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={handleInputChange}
            value={values.password}
            id='password'
            placeholder='Enter password'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary login-btn'>
          submit
        </button>
      </form>
    </div>
  );
}
