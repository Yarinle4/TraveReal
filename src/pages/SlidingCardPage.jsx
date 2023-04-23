import ReactCardSlider from '../components/ReactCardSlider';
import wasternWall from '../assets/western-wall-temple-mount.jpg'
import nightOut from '../assets/nightOut.jpeg'

function SlidingCardComponent(){
    const sliderClick = (slider)=>{
        alert("hello world");
      }
    
      
      const slides = [
        {image:nightOut ,title:"Night Out",description:"This is a second description",clickEvent:sliderClick},
        {image: wasternWall ,title:"History Tour",description:"This is a description",clickEvent:sliderClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
      ]
      return (
        <div id="body">
          <ReactCardSlider slides={slides}/>
        </div>
        );
}

export default SlidingCardComponent;