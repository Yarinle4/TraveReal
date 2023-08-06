import EmergencyAssistanceList from "../components/EmergencyAssistanceList.jsx";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar.jsx";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav.jsx";
import { useLocation } from "react-router-dom";

function EmergencyAssistance() {
  const location = useLocation();

  const curCircle = location.state.curCircle;

  const curCity = location.state.curCity;

  return (
    <>
      <ResponsiveAppBar position="fixed" />
      <EmergencyAssistanceList curCircle={curCircle} curCity={curCity} />
      <SimpleBottomNavigation />
    </>
  );
}

export default EmergencyAssistance;
