import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Fab from '@mui/material/Fab';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Alert from '@mui/material/Alert';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);
  const [upcomingEvent, setUpcomingEvent] = React.useState([]);
  const [closestLocation, setClosestLocation] = React.useState(null);
  const [closestDate, setClosestDate] = React.useState(null);
  const currentDate = new Date();

  const handleClickOpen = () => {
    console.log()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user ? user.uid : "";

        const upcomingQ = query(
          collection(db, "events"),
          where("date", ">=", currentDate.toISOString().split("T")[0]),
          orderBy("date", "asc"),
          limit(1)
        );

        const upcomingSnapshot = await getDocs(upcomingQ);
        const upcomingData = upcomingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const closestUpcomingEvent = upcomingData[0]; 

        if (
          closestUpcomingEvent &&
          closestUpcomingEvent.participants.length !== 0 &&
          closestUpcomingEvent.participants.includes(uid)
        ) {
          setUpcomingEvent([closestUpcomingEvent]);
          setClosestLocation(closestUpcomingEvent.location);
          setClosestDate(closestUpcomingEvent.date);
        } else {
          setUpcomingEvent(null); 
          setClosestLocation(null);
          setClosestDate(null);
        }

      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [currentDate]);

  return (
    <div>
        <Fab 
          color="primary"
          aria-label="alert"
          onClick={() => handleClickOpen()}
          sx={{  
            position: 'fixed',
            bottom: '18%',
            right: '5%'
          }} 
                >
        <NotificationsNoneIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: '16px 16px 16px 16px',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" ></DialogTitle>
        
        <DialogContent>
        <DialogContentText>
          {upcomingEvent && upcomingEvent.length > 0 ? (
            <Alert variant="standard" severity="info" sx={{ fontSize: '1.5rem' }}>
              <strong>You have a tour in {closestLocation} on {closestDate}!</strong>
            </Alert>
          ) : (
            <Alert variant="standard" severity="info" sx={{ fontSize: '1.5rem' }}>
              <strong>No upcoming events found!</strong>
            </Alert>
          )}
        </DialogContentText>
        </DialogContent>

        {/* <DialogContent >
          <DialogContentText>

            <Alert variant="standard" severity="info" sx={{ fontSize: '1.5rem' }}>
            <strong>You have a tour in Mahne Yehoda market tomorrow!</strong>
            </Alert>
            <Alert variant="standard" severity="success" sx={{ fontSize: '1.5rem' }}>
            <strong>There is a new member in your circle - dont forget to say hello!</strong>
            </Alert>
          </DialogContentText>
        </DialogContent> */}

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}