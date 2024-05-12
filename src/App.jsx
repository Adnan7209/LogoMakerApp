import React, { useContext, useState } from "react";
import Header from "./components/custom/Header";
import SideNav from "./components/custom/SideNav";
import IconController from "./components/custom/IconController";
import BackgroundController from "./components/custom/BackgroundController";
import LogoPreview from "./components/custom/LogoPreview";
import Footer from "./components/custom/Footer";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {/* <div className="w-64 fixed">
        <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div> */}
      <div className=" grid grid-cols-1 md:grid-cols-6 ">
        <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
          {activeIndex == 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3 ">
          <LogoPreview />
        </div>
        <div className="bg-blue-100">ads banner</div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
