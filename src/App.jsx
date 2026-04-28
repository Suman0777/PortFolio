import { Routes, Route, useLocation } from "react-router-dom";
import Backgrounds from "../BuildsSmall/Backgrounds";
import Top from "../component/Top";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Linkss from "../Pages/Linkss";
import Carer from "../Pages/Carer";
import { Meteors } from "@/components/ui/meteors";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Full-screen meteor layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Meteors />
      </div>


      <div key={location.pathname} className="blur-in">
        <Top />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/links" element={<Linkss />} />
          <Route path="/career" element={<Carer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
