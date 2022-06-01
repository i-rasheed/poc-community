import React from "react";

import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProposeIdea from "./pages/ProposeIdea/ProposeIdea";
import IdeasList from "./pages/IdeasList/IdeasList";

function App() {
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
