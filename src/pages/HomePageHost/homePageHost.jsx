import './homeHost.css';
import ReactCardSlider from '../../components/ReactCardSlider';
import wasternWall from '../../assets/western-wall-temple-mount.jpg';
import nightOut from '../../assets/nightOut.jpeg';
import Button from '@mui/material/Button';

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
        <div>
          <div id="upper">let's create a new event!</div>
          <div id="title">Events</div>
          <div id="body"><ReactCardSlider slides={events} idSlide={FirstsliderName}/></div>
          <div id="title">Tips</div>
          <div id="body"></div><ReactCardSlider slides={tips} idSlide={SecondsliderName}/>
          <button>Other</button>
          </div>
        );
}

export default HomePageHost;

