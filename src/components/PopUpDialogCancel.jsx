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


export default function AlertDialogSlideCancel({ eventID }) {
  const [open, setOpen] = React.useState(false);


  const handleCancel = async () => {
    console.log("eventid:", eventID);
    const user = getAuth().currentUser;
    const userRef = doc(db, "users", getAuth().currentUser.uid)
    if (user) {
      const eventRef = doc(db, "events", eventID);
      try {
        await updateDoc(eventRef, {
          participants: arrayRemove(user.uid)
        });
        console.log("User successfully canceled the event!");
        navigate("/HomePage"); // Or wherever you want to redirect after successfully joining.
      } catch (error) {
        console.error("Error canceling event: ", error);
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
        Cancel My Booking
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to cancel"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If you cancel now, your place will not be saved.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleCancel}>Im SURE</Button>
          <Button onClick={handleClose}>RETURN</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
