import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProposeIdea from "./pages/ProposeIdea/ProposeIdea";
import IdeasList from "./pages/IdeasList/IdeasList";

function App() {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const userIsLoggedIn = JSON.parse(sessionStorage.getItem("user"));
  //   if (userIsLoggedIn) {
  //     setUser(userIsLoggedIn.id);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/propose' element={<ProposeIdea />} />
          <Route path='/ideas' element={<IdeasList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
