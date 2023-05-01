import './homeHost.css';
import ReactCardSlider from '../../components/ReactCardSlider';
// import Button from '@mui/material/Button';
import ResponsiveAppBar from "../../shared/components/moreComponents/MainBar"
import { Button, AppBar, Toolbar, Divider} from "@mui/material";
import { useNavigate } from "react-router-dom";


//events:
import beer from '../../assets/beer.jpg';
import history from '../../assets/history.png';
import architecture from '../../assets/architecture.png';
import food from '../../assets/food.png';
import hiking from '../../assets/hiking.png';
import sharedWorkspace from '../../assets/sharedWorkspace.jpg';

//tips:
import selfTour from '../../assets/selfTour.jpg';
import picnic from '../../assets/picnic.jpg';
import challah from '../../assets/challah.png';
import Workshop from '../../assets/Workshop.jpg';
import apps from '../../assets/apps.png';
import shopping from '../../assets/shopping.jpg';
import haveToVisit from '../../assets/haveToVisit.jpg';

function HomePageHost(){
  const navigate = useNavigate(); 
  const sliderClick = (slider)=>{
      alert("hello world");
    }
    
    const FirstsliderName = "addEvent";
    const SecondsliderName = "addTip";

    const events = [
      {image: beer, title:"Bonding Circle",description:"A night out at a local bar",clickEvent:sliderClick},
      {image: history, title:"History Circle",description:"Guided historical tour",clickEvent:sliderClick},
      {image: architecture ,title:"Architecture Circle",description:"Architecture tour of the city",clickEvent:sliderClick},
      {image: food, title:"Culinary Circle",description:"Eat local, travel global",clickEvent:sliderClick},
      {image: hiking, title:"Hiking Circle",description:"Life is better in hiking boots",clickEvent:sliderClick},
      {image: sharedWorkspace, title:"Digital Nomads",description:"Work is where the wifi is",clickEvent:sliderClick},
    ]

    const tips = [
      {image: selfTour ,title:"Self Tour",description:"General tutorials",clickEvent:sliderClick},
      {image: picnic, title:"Picnic Spots",description:"Blue skies and good food",clickEvent:sliderClick},
      {image: challah ,title:"Saturday Attractions",description:"Attractions available",clickEvent:sliderClick},
      {image: Workshop, title:"Workshops",description:"Bring out the artist in you",clickEvent:sliderClick},
      {image: apps ,title:"Useful Apps",description:"Public Transport, etc.",clickEvent:sliderClick},
      {image: shopping, title:"Shopping",description:"A higher form of shopping",clickEvent:sliderClick},
      {image: haveToVisit, title:"Have to Visit",description:"Places not to be missed!",clickEvent:sliderClick},
    ]
  
  return (
    <div className='hostHome'>
        <ResponsiveAppBar position="fixed"/>

      <div id="upper">let's create a new event!</div>
      <div class="body">
        <div id="title">Select the relevant circles:</div>
        <div><ReactCardSlider slides={events} idSlide={FirstsliderName}/></div>
      </div>

      <div id="mid">Or</div>

      <div class="body">
        <div id="title">Select the relevant tip:</div>
        <div><ReactCardSlider slides={tips} idSlide={SecondsliderName}/></div>
        <Button variant="contained" color="primary" className="buttonHost" sx={{mt:5}}>Another Type of Tip</Button>
      </div>

      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, position: 'fixed', width: '100%' }}>
      <Toolbar position="fixed" sx={{ display: 'flex', justifyContent: 'space-around', border: 'none' }}>
          <Button onClick={() => navigate("/CreateNewEvent")}
            variant="Outlined" sx={{ width: '120px' }}>Back</Button>
          <Divider orientation="vertical" flexItem sx={{ marginLeft: '-30px', width:'30px', borderColor:'#F3FBF4' }} />
          <Button onClick={() => navigate("/HomePage")}
            variant="Outlined" sx={{ width: '120px' }}>Create</Button>
      </Toolbar>
      </AppBar>
    </div>
    );
}


export default HomePageHost;

