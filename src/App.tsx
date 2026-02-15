import Hero from "./components/Hero";
import LoveCounter from "./components/LoveCounter";
import Gallery from "./components/Gallery";
import Music from "./components/Music";
import Letter from "./components/Letter";
import FinalMessage from "./components/FinalMessage";
import PasswordGate from "./components/PasswordGate";

function App() {
  return (
    <>
      <PasswordGate>
      <Hero />
      <LoveCounter />
      <Gallery />
      <Music />
      <Letter />
      <FinalMessage />
      </PasswordGate>
    </>
  );
}

export default App;
