import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Fab from "@mui/material/Fab";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Alert from "@mui/material/Alert";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

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
  const [HostedEvent, setHostedEvent] = React.useState([]);
  const [HostedEventLocation, setHostedEventLocation] = React.useState(null);
  const [HostedEventDate, setHostedEventDate] = React.useState(null);

  const currentDate = new Date();

  const handleClickOpen = () => {
    console.log();
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
          orderBy("date", "asc")
        );

        const upcomingSnapshot = await getDocs(upcomingQ);
        const upcomingData = upcomingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const upcomingEventsWithUser = upcomingData.filter((event) => {
          if (event.participants.length !== 0) {
            return event.participants.includes(uid);
          }
        });
        const upcomingEventsWithHost = upcomingData.filter((event) => {
          return event.host === uid;
        });

        if (upcomingEventsWithUser.length > 0) {
          console.log("upcomingEventsWithUser", upcomingEventsWithUser);
          const closestUpcomingEvent = upcomingEventsWithUser[0];
          setUpcomingEvent([closestUpcomingEvent]);
          setClosestLocation(closestUpcomingEvent.location);
          setClosestDate(closestUpcomingEvent.date);
        } else {
          setUpcomingEvent(null);
          setClosestLocation(null);
          setClosestDate(null);
        }
        if (upcomingEventsWithHost.length > 0) {
          console.log("upcomingEventsWithHost", upcomingEventsWithHost);
          const closestUpcomingEventHost = upcomingEventsWithHost[0];
          setHostedEvent([closestUpcomingEventHost]);
          setHostedEventLocation(closestUpcomingEventHost.location);
          setHostedEventDate(closestUpcomingEventHost.date);
        } else {
          setHostedEvent(null);
          setHostedEventLocation(null);
          setHostedEventDate(null);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [open]);

  return (
    <div>
      <Fab
        color="primary"
        aria-label="alert"
        onClick={() => handleClickOpen()}
        sx={{
          position: "fixed",
          bottom: "18%",
          right: "5%",
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
            borderRadius: "16px 16px 16px 16px",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        ></DialogTitle>

        <DialogContent>
          <DialogContentText>
            {upcomingEvent && upcomingEvent.length > 0 && (
              <Alert
                variant="standard"
                severity="info"
                sx={{ fontSize: "1.5rem" }}
              >
                <strong>
                  You have a tour in {closestLocation} on {closestDate}!
                </strong>
              </Alert>
            )}
            {HostedEvent && HostedEvent.length > 0 && (
              <Alert
                variant="standard"
                severity="success"
                sx={{ fontSize: "1.5rem" }}
              >
                <strong>
                  You hosting a tour in {HostedEventLocation} on{" "}
                  {HostedEventDate}!
                </strong>
              </Alert>
            )}
            {!upcomingEvent && !HostedEvent && (
              <Alert
                variant="standard"
                severity="info"
                sx={{ fontSize: "1.5rem" }}
              >
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
