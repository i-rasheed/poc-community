import React, { useEffect, useState, useCallback } from "react";
import MessageDisplay from "../../components/MessageDisplay/MessageDisplay";
import NavBar from "../../components/NavBar/NavBar";

import "../IdeasList/IdeasList.css";
export default function IdeasList() {
  const [currList, setCurrList] = useState([]);
  const [message, setMessage] = useState(
    "No ideas have been proposed yet. Check back later!"
  );

  const ideasList = JSON.parse(localStorage.getItem("ideas")) || [];

  const getList = useCallback(() => {
    setCurrList(ideasList);
  }, [ideasList]);

  // const getList = () => {
  //   setCurrList(ideasList);
  // };

  useEffect(() => {
    getList();
  }, [getList]);

  console.log(ideasList);

  const handleVoteClick = (id) => {
    let ideaVoted = ideasList?.find((el) => el.id === id);
    console.log(ideaVoted);
    if (ideaVoted) {
      console.log(ideaVoted.votes);
      console.log(ideaVoted.votes++);
      ideaVoted = ideaVoted + 1;
      localStorage.setItem("ideas", JSON.stringify(ideasList));
      console.log(ideasList);
      getList();
    }
  };

  return (
    <div className='ideas-wrapper center'>
      <NavBar />
      <h3>Ideas List</h3>
      {currList?.map((el, index) => (
        <div key={index}>
          <p>{el.name}</p>
          <p>{el.idea}</p>
          <button
            onClick={() => handleVoteClick(el.id)}
            className='btn btn-secondary'
          >
            Vote {el.votes}
          </button>
        </div>
      ))}
      {currList.length === 0 && <MessageDisplay error={message} />}
    </div>
  );
}
