// This code defines a functional component Event that takes in the event information
// through its props. The ownerPhotoUrl is a string with the URL to the owner's photo.
// The rating is a number between 1 and 5 representing the event's rating.
// The details and about props are strings with the event's details and description,
// respectively. The photos prop is an array of strings with URLs to the event's photos.
// Finally, the mapLocation prop is an object with the latitude and longitude of the event's location.

// The Event component renders the event's owner photo, rating stars, details, about, photos, and a map
// with the event's location. The rating stars are rendered using an array of span elements with the ⭐
// character inside, as many times as the rating prop. The photos are rendered using an array of img
// elements, one for each URL in the photos prop. Finally, the map is rendered using a Google Maps 
//embed with the latitude and longitude from the mapLocation prop.

// import bootstrap from 'bootstrap';
// import { number } from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const ownerPhotoUrl = "..\shared\assets\images\background.jpg"
const rating = 2;
const details = "bla bla";
const about = "mock data";
const photos = ["..\shared\assets\images\background.jpg"];
const lat = 123;
const lng = 230;
const mapLocation =  [lat, lng];

// interface EventProps {
//   ownerPhotoUrl: string;
//   rating: number;
//   details: string;
//   about: string;
//   photos: string[];
//   mapLocation: { lat: number; lng: number };
// }

// const Event: React.FC<EventProps> = ({
//   ownerPhotoUrl,
//   rating,
//   details,
//   about,
//   photos,
//   mapLocation,
// }) => {

function Event () {
  return ( 
    <div className="d-flex justify-content-center">
   ss
      <Card className="w-50">
      <Card.Img variant="top" src={ownerPhotoUrl} alt="Owner" />

      </Card>

        <Card.Body>
          <Card.Title>
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </Card.Title>
          <Card.Text>
            <h2>Details</h2>
            <p>{details}</p>
          </Card.Text>
          <Card.Text>
            <h2>About</h2>
            <p>{about}</p>
          </Card.Text>
          <Card.Text>
            <h2>Photos</h2>
            {photos.map((photoUrl, i) => (
              <img
                key={i}
                src={photoUrl}
                alt={`Photo ${i + 1}`}
                style={{ maxWidth: '100%' }}
              />
            ))}
          </Card.Text>
          <Card.Text>
            <h2>Map</h2>
            <div style={{ width: '100%', height: '400px' }}>
              <iframe
                title="Event Location"
                // src={`https://www.google.com/maps/embed/v1/place?q=${mapLocation.lat},${mapLocation.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </Card.Text>
        </Card.Body>
    </div>
  );
};

export default Event;