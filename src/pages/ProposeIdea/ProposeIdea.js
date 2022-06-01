import React, { useState } from "react";
import MessageDisplay from "../../components/MessageDisplay/MessageDisplay";
import NavBar from "../../components/NavBar/NavBar";
import "../ProposeIdea/ProposeIdea.css";

export default function ProposeIdea() {
  const [idea, setIdea] = useState();
  const [ideaArr, setIdeaArr] = useState([]);
  const [success, setSuccess] = useState();

  const userLoggedIn = JSON.parse(sessionStorage.getItem("user"));

  const inputChangeHandler = (e) => {
    setIdea(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newIdea = {
      id: Date.now(),
      name: userLoggedIn.name,
      idea,
      votes: 0,
    };
    const newArr = [...ideaArr, newIdea];
    setIdeaArr(newArr);

    localStorage.setItem("ideas", JSON.stringify(newArr));
    setSuccess("successfully submitted");
  };

  return (
    <div className='propose-wrapper'>
      <NavBar />
      <h3>Welcome {userLoggedIn.name}</h3>
      <p>
        Propose your ideas below and have your community members vote on them
      </p>

      <form onSubmit={submitHandler}>
        {success && <MessageDisplay error={success} />}
        <textarea
          onChange={inputChangeHandler}
          value={idea}
          required
        ></textarea>

        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </form>
    </div>
  );
}
