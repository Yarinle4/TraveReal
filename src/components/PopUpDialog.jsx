import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "../pages/HomePageHost/homeHost.css";
import { useNavigate } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase"; 





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide({ eventID }) {
  const [open, setOpen] = React.useState(false);


  const handleJoin = async () => {
    console.log("eventid:", eventID);
    const user = getAuth().currentUser;
    const userRef = doc(db, "users", getAuth().currentUser.uid)
    if (user) {
      const eventRef = doc(db, "events", eventID);
      
      try {
        await updateDoc(eventRef, {
          participants: arrayUnion(user.uid)
        });
        console.log("User successfully joined the event!");
        navigate("/HomePage"); // Or wherever you want to redirect after successfully joining.
      } catch (error) {
        console.error("Error joining event: ", error);
      }
    }
  };
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="buttonHost"
        onClick={handleClickOpen}
        sx={{ mt: 2 }}
      >
        Join Now!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Want to join this event?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Save your place in this amazing event and sign up for updates.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleJoin}>Join</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
