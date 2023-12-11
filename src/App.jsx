import { useState } from "react";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Whyus from "./components/why-us";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-32 px-4">
        <Landing />
        <Benefits />
        <Services />
        <Whyus />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
