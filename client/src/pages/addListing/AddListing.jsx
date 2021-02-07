import React, { useState } from "react";
import axios from "axios"
import AddListingForm from "../../components/addListingForm/AddListingForm"

const AddListing = () => {
 
  
    const handleFormSubmit = (e, listingInfo) => {
        e.preventDefault();

        axios
          .post("/api/restaurant", listingInfo)
          .then((response) => {
            console.log(response.data);
            // history.push("/admin");
          })
          .catch((err) => {
            console.log(err);
            alert.setAlert({
              message: "Failed to create new listing.",
              type: "danger",
            });
          });
      };

  return (
    <div className="container">
      <h1>Add new Listing</h1>
      <AddListingForm handleFormSubmit = {handleFormSubmit}/>
    </div>
  );
};

export default AddListing;
