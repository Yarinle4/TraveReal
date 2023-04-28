import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ownerPhotoUrl = "..\shared\assets\images\background.jpg"
const rating = 2;
const details = "bla bla";
const about = "mock data";
const photos = ["..\shared\assets\images\background.jpg"];
const lat = 123;
const lng = 230;
const mapLocation =  [lat, lng];

function ActivityPage () {
  return ( 
    <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/spidi.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ActivityPage;