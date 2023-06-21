import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

function RatingPopupContent({ open, onClose, onSubmit }) {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setSelectedRating(newValue);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = () => {
    onSubmit(selectedRating);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Rate the Host and earn 3 points</DialogTitle>
      <DialogContent>
        <Rating
          name="rating"
          value={selectedRating}
          onChange={handleRatingChange}
          precision={1}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RatingPopupContent;
