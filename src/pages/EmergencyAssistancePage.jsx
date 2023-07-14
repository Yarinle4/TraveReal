import EmergencyAssistanceList from "../components/EmergencyAssistanceList.jsx";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar.jsx";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav.jsx";

function EmergencyAssistance() {
  return (
    <>
      <ResponsiveAppBar position="fixed" />
        <EmergencyAssistanceList />
      <SimpleBottomNavigation />
    </>
  );
}

export default EmergencyAssistance;
