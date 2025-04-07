import { useRef } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToAbout={scrollToAbout} />
      <Body aboutRef={aboutRef} />
      <Footer />
    </>
  );
}

export default App;
