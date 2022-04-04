import HeroSection from "./Components/HeroSection";
import CarasualSection from "./Components/CarasualSection";
import Menu from "./Components/Menu"
import AllRokerSection from "./Components/AllRokerSection";

function App() {
  return (
    <div className=" bg-[#1E1B3A] w-full relative">
      <Menu />
      <HeroSection />
      <CarasualSection />
      <AllRokerSection />
    </div>
  );
}

export default App;
