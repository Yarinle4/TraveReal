import './homeHost.css';
import ReactCardSlider from '../../components/ReactCardSlider';
import apps from '../../assets/apps.png';
import architecture from '../../assets/architecture.png';
import history from '../../assets/history.png';
import hiking from '../../assets/hiking.png';
import food from '../../assets/food.png';
import challah from '../../assets/challah.png';
import selfTour from '../../assets/selfTour.jpg';
import picnic from '../../assets/picnic.jpg';
import sharedWorkspace from '../../assets/sharedWorkspace.jpg';
import shopping from '../../assets/shopping.jpg';
import Workshop from '../../assets/Workshop.jpg';
import haveToVisit from '../../assets/haveToVisit.jpg';
import beer from '../../assets/beer.jpg';

import Button from '@mui/material/Button';
import ResponsiveAppBar from "../../shared/components/moreComponents/MainBar"



function HomePageHost(){
  const sliderClick = (slider)=>{
      alert("hello world");
    }
    
    const FirstsliderName = "addEvent";
    const SecondsliderName = "addTip";

    const events = [
      {image: beer, title:"Bonding Circle",description:"A night out at a local bar",clickEvent:sliderClick},
      {image: history, title:"History Circle",description:"Guided historical tour",clickEvent:sliderClick},
      {image: architecture ,title:"Architecture Circle",description:"Architecture tour of the city",clickEvent:sliderClick},
      {image: food, title:"Culinary Circle",description:"This is a fourth description",clickEvent:sliderClick},
      {image: hiking, title:"Hiking Circle",description:"This is a fifth description",clickEvent:sliderClick},
      {image: sharedWorkspace, title:"Working Circle",description:"This is a sixth description",clickEvent:sliderClick},
    ]

    const tips = [
      {image: selfTour ,title:"Self Tour",description:"General tutorials",clickEvent:sliderClick},
      {image: picnic, title:"Picnic Spots",description:"This is a sixth description",clickEvent:sliderClick},
      {image: challah ,title:"Saturday Attractions",description:"Attractions available",clickEvent:sliderClick},
      {image: Workshop, title:"Workshops",description:"cooking, painting, etc.",clickEvent:sliderClick},
      {image: apps ,title:"Useful Apps",description:"Public Transport, etc.",clickEvent:sliderClick},
      {image: shopping, title:"Shopping",description:"This is a fifth description",clickEvent:sliderClick},
      {image: haveToVisit, title:"Have to Visit",description:"Places not to be missed!",clickEvent:sliderClick},
    ]
  
  return (
    <div className='hostHome'>
        <ResponsiveAppBar position="fixed"/>

      <div id="upper">let's create a new event!</div>
      <div class="body">
        <div id="title">Add a Circle Event</div>
        <div><ReactCardSlider slides={events} idSlide={FirstsliderName}/></div>
        <Button variant="contained" color="primary" className="buttonHost">Another Event</Button>
      </div>
      <div class="body">
        <div id="title">Add a Tip</div>
        <div><ReactCardSlider slides={tips} idSlide={SecondsliderName}/></div>
        <Button variant="contained" color="primary" className="buttonHost">Another Tip</Button>
      </div>

    </div>
    );
}


export default HomePageHost;

