import styled from '@emotion/styled';
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
//useNavigate is used to navigate to other pages
//useNavigate is used in place of useHistory
//useNavigate is used in place of useLocation
//useNavigate is used in place of useParams
import { useNavigate } from 'react-router-dom';
//formik is used for form handling
//yup is used for validation
import { Formik } from "formik";
import * as Yup from "yup";
//mui typography for styling
import Typography from "@mui/material/Typography";
//useEffect is used to fetch data from api
//useState is used to set data
import { useEffect, useState } from "react";

const Container = styled("div")(() => ({
  padding: "15px 12px",
}));

const AddUser = () => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();
  
  //add user form api call with post method using fetch api with async and await for response and handle error using try and catch block and set data using useState  
  //set data using useState
  const [data, setData] = useState([]);
  const addUserForm = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/crud/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <Container>
      {/* //add user label using mui typography for styling and set label in center using align property */}
      <Typography variant="h4" align="center" gutterBottom>
        Add User
      </Typography>
  
      {/* //add user form using formik and yup for validation and material ui for styling and mui textfield for input */}
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        //validation using yup
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          // description: Yup.string().required("Required"),
        })}
        //onsubmit function and reset form values and setSubmitting to false to enable submit button
        onSubmit={(values, { setSubmitting }) => {
          //set values for submit
          values = {
            name: values.name,
            description: values.description,
          };
          //alert values
          alert(JSON.stringify(values, null, 2));
          //call add user form api
          addUserForm(values);
          //on submit navigate to home page
          navigate("/");
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {/* //mui grid for styling and mui textfield for input and set grid size for different screen sizes */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  //set name for input
                  name="name"
                  //set label for input
                  label="Name"
                  //set value for input
                  value={values.name}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error message
                  error={touched.name && Boolean(errors.name)}
                  //set helper text
                  helperText={touched.name && errors.name}
                  //set input type
                  type="text"
                  //set input placeholder
                  placeholder="Enter name"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  //set name for input
                  name="description"
                  //set label for input
                  label="Description"
                  //set value for input
                  value={values.description}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error message
                  // error={touched.description && Boolean(errors.description)}
                  //set helper text
                  // helperText={touched.description && errors.description}
                  //set input type
                  type="text"
                  //set input placeholder
                  placeholder="Enter description"
                  //set input width
                  fullWidth
                />
              </Grid>
            </Grid>
            {/* //mui grid for styling and mui button for submit and set grid size for different screen sizes using xs, sm, md, lg, xl properties  */}
            <Grid container spacing={3} style={{ marginTop: "20px" }}>
              <Grid item xs={12} sm={6}>
                <Button
                  //set button type
                  type="submit"
                  //set button variant
                  variant="contained"
                  //set button color
                  color="primary"
                  //set button width
                  fullWidth
                  //set button disabled
                  disabled={isSubmitting}
                  //set height for button as textfield  height
                  style={{ height: "56px" }}
                  //on submit event set isSubmitting to true to disable button and navigate to home page
                  onSubmit={() => {
                    isSubmitting = true;
                    navigate("/");
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  )
}

export default AddUser;