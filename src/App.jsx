import { useState } from "react";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col mt-20">
      <Navbar />
      <Landing />
      <Benefits />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
