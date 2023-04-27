import './homeHost.css';
import ReactCardSlider from '../../components/ReactCardSlider';
import wasternWall from '../../assets/western-wall-temple-mount.jpg';
import nightOut from '../../assets/nightOut.jpeg';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function HomePageHost(){
  const sliderClick = (slider)=>{
      alert("hello world");
    }
    
    const FirstsliderName = "addEvent";
    const SecondsliderName = "addTip";

    const events = [
      {image:nightOut ,title:"Night Out",description:"This is a second description",clickEvent:sliderClick},
      {image: wasternWall ,title:"History Tour",description:"This is a description",clickEvent:sliderClick},
      {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
      {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]

    const tips = [
      {image:nightOut ,title:"Night Out",description:"This is a second description",clickEvent:sliderClick},
      {image: wasternWall ,title:"History Tour",description:"This is a description",clickEvent:sliderClick},
      {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
      {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
      {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]
  
  return (
    <div className='hostHome'>
      <div id="upper">let's create a new event!</div>
      <div class="body">
        <div id="title">Events</div>
        <div><ReactCardSlider slides={events} idSlide={FirstsliderName}/></div>
      </div>
      <div class="body">
        <div id="title">Tips</div>
        <div><ReactCardSlider slides={tips} idSlide={SecondsliderName}/></div>
      </div>
      <Button variant="contained" color="primary">Other</Button>
    </div>
    );
}


export default HomePageHost;

