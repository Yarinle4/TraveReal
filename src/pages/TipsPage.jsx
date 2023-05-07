import TipsList from "../components/TipsList.jsx";
import ResponsiveAppBar from "../shared/components/moreComponents/MainBar";
import SimpleBottomNavigation from "../shared/components/moreComponents/BottomNav";

function TipsPage() {
  return (
    <>
      <ResponsiveAppBar position="fixed" />
        <TipsList />
      <SimpleBottomNavigation />
    </>
  );
}

export default TipsPage;
