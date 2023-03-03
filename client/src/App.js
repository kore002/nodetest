import React from "react";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SampleTest from "./componet/nodeTest/SampleTest";
//import TodoTEST from "./componet/redutTEST/TodoTEST";
import BoardNew from "./componet/redutTEST/page/BoardNew";
import BoardList2 from "./componet/redutTEST/page/BoardList";
// import Footer from "./componet/redutTEST/items/Footer";


//board
import BoardList from "./board_test/componet/BoardList";
function App() {
  return(
    <Router>
      <Routes>
          <Route path="/BoardList222" element={<BoardList2 />} />
          <Route path="/BoardNew" element={<BoardNew />} />
          <Route path="/" element={<SampleTest />} />
          



          <Route path="/boardlist" element={<BoardList />}/>
      </Routes>
      {/* <div>
          <Footer />
        </div> */}
    </Router>
  );
}

export default App;