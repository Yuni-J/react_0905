import "./App.css";
import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comp1 from "./component/Comp1";
import Comp2 from "./component/Comp2";
import Comp3 from "./component/Comp3";
import Param1 from "./component/Param1";
import Param2 from "./component/Param2";
import Param3 from "./component/Param3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/comp1" element={<Comp1 />}/>
            <Route path="/comp2" element={<Comp2 />}/>
            <Route path="/comp3" element={<Comp3 />}/>
            <Route path="/param/:id/:name" element={<Param1 />}/>
            <Route path="/param" element={<Param2 />}/>
            <Route path="/param3/:id/:pw" element={<Param3 />}/>
            {/* 경로상으로 "/param/:id/:name"  "/param/:id/:pw" 인식 구별 못함 -> 이름을 바꿔야한다. */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
