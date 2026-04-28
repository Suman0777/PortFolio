import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Meteors } from "./components/ui/meteors";
import { Particles } from "./components/ui/particles";
if (!localStorage.getItem("theme")) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       {/* <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-screen h-screen">
       </div>  */}
        <Particles quantity={600} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-screen h-screen"/>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
