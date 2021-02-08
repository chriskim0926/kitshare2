import React from "react";
import axios from "axios"
import AddListingForm from "../../components/addListingForm/AddListingForm"

const AddListing = () => {
 
  
  const handleFormSubmit = (e, productData) => {
    e.preventDefault();
    axios
      .post("/api/restaurants", productData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Add New Listing</h1>
      <AddListingForm handleFormSubmit= {handleFormSubmit}/>
    </div>
  );
};

export default AddListing;
