import HeroSection from "./Components/HeroSection";
import CarasualSection from "./Components/CarasualSection";
import Menu from "./Components/Menu"
import AllRokerSection from "./Components/AllRokerSection";
import FooterSection from "./Components/FooterSection";
import { useDispatch } from "react-redux";
import { fatchSpace } from "./Redux/SpaceSlice";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const dispatch = useDispatch();
  const ApiLink = "https://api.spacexdata.com/v3/launches";

  useEffect(() => {

    const getSpace = async () => {

      const result = await axios(ApiLink);

      dispatch(fatchSpace(result.data));
    }

    getSpace();

  }, [])

  return (
    <div className=" bg-[#1E1B3A] w-full relative">
      <Menu />
      <HeroSection />
      <CarasualSection />
      <AllRokerSection />
      <FooterSection />
    </div>
  );
}

export default App;
