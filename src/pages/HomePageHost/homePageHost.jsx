import './homeHost.css';
import ReactCardSlider from '../../components/ReactCardSlider';
import nightOut from '../../assets/nightOut.png';
import apps from '../../assets/apps.png';
import architecture from '../../assets/architecture.png';
import history from '../../assets/history.png';
import hiking from '../../assets/hiking.png';
import food from '../../assets/food.png';
import challah from '../../assets/challah.png';
import selfTour from '../../assets/selfTour.jpg';
import picnic from '../../assets/picnic.jpg';
import Button from '@mui/material/Button';


import { Box } from '@mui/material';

function HomePageHost(){
  const sliderClick = (slider)=>{
      alert("hello world");
    }
    
    const FirstsliderName = "addEvent";
    const SecondsliderName = "addTip";

    const events = [
      {image: nightOut, title:"Meeting Locals Circle",description:"A night out at a local bar",clickEvent:sliderClick},
      {image: history, title:"History Circle",description:"Guided historical tour",clickEvent:sliderClick},
      {image: architecture ,title:"Architecture Circle",description:"This is a third description",clickEvent:sliderClick},
      {image: food, title:"Culinary Circle",description:"This is a fourth description",clickEvent:sliderClick},
      {image: hiking, title:"Hiking Circle",description:"This is a fifth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]

    const tips = [
      {image: apps ,title:"Useful Apps",description:"Public Transport, etc.",clickEvent:sliderClick},
      {image: picnic, title:"Perfect Picnic Spots",description:"This is a sixth description",clickEvent:sliderClick},
      {image: challah ,title:"Things to do on Saturday",description:"Active attractions",clickEvent:sliderClick},
      {image:"https://picsum.photos/700/600",title:"Have to Visit",description:"Places not to be missed!",clickEvent:sliderClick},
      {image: selfTour ,title:"Self Tour",description:"General tutorials",clickEvent:sliderClick},
      {image:"https://picsum.photos/200/300",title:"Shopping",description:"This is a fifth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]
  
  return (
    <div className='hostHome'>
      <div id="upper">let's create a new event!</div>
      <div class="body">
        <div id="title">Add a Circle Event</div>
        <div><ReactCardSlider slides={events} idSlide={FirstsliderName}/></div>
      </div>
      <div class="body">
        <div id="title">Add a Tip</div>
        <div><ReactCardSlider slides={tips} idSlide={SecondsliderName}/></div>
      </div>
      <Button variant="contained" color="primary">Other</Button>
    </div>
    );
}


export default HomePageHost;

