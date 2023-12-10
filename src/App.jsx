import { useState } from "react";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Wix from "./components/landing";
import Why from "./components/benefits";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-20">
      <Navbar />
    <Wix/>
   <Why/>
      <Services />
   <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
