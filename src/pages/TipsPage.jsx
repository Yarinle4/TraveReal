import TipsList from "../components/TipsList.jsx";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";
import { useLocation } from "react-router-dom";

function TipsPage() {
  const location = useLocation();

  const curCircle = location.state.curCircle;

  const curCity = location.state.curCity;
  return (
    <>
      <ResponsiveAppBar position="fixed" />
      <TipsList curCircle={curCircle} curCity={curCity} />
      <SimpleBottomNavigation />
    </>
  );
}

export default TipsPage;
