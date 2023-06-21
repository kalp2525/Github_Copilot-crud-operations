import styled from '@emotion/styled';
import { Button, Grid, TextField } from '@mui/material'; 
import React from 'react';
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
//useLocation is used to get data from previous page
import { useLocation } from "react-router-dom";
//useEffect is used to fetch data from api
//useState is used to set data
import { useEffect, useState } from "react";

const Container = styled("div")(() => ({
  padding: "15px 12px",
}));

const UpdateUser = (props) => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();
 
  //set data in update user form when click on update user button of specific user in table using useLocation
  //useLocation is used to get data from previous page
  const location = useLocation();

  //useeffect to get single user data from api using fetch api with async and await for response and handle error using try and catch block and set data using useState
  //set data using useState
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
  const getSingleUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/crud/${location.state.data._id}`);
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      setSingleData(result);
    } catch (error) {
      console.log(error);
    }
  };
  getSingleUser();
  }, []);

  //update user form api call with post method using fetch api with async and await for response and handle error using try and catch block and set data using useState
  //set data using useState
  const [data, setData] = useState([]);
  const updateUserForm = async (data, id) => {
    try {
      const response = await fetch(`http://localhost:5000/crud/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {/* //upadte user label using mui typography for styling and set label in center using align property */}
      <Typography variant="h4" align="center" gutterBottom>
        Update User
      </Typography>

      {/* //update user form using formik and yup for validation and material ui for styling and mui textfield for input */}
      <Formik
        //reinitialize form values when props changes
        enableReinitialize={true}
        // set initial values using useLocation
        // useLocation is used to get data from previous page
        initialValues={{ 
          name: singleData.data ? singleData.data.name : null,
          description: singleData.data ? singleData.data.description : null, 
        }}
        //validation using yup
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          // description: Yup.string().required("Required"),
        })}
        //onsubmit function
        onSubmit={(values, { setSubmitting }) => {
          //set values for submit
          values = {
            name: values.name,
            description: values.description,
          };
          //alert values
          alert(JSON.stringify(values, null, 2));
          //call update user form api
          updateUserForm(values, location.state.data._id);
          //on submit navigate to home page
          navigate("/");
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( 
          <form onSubmit={handleSubmit}>
            {/* //mui grid for styling and mui textfield for input and set grid size for different screen sizes using xs, sm, md, lg, xl properties */}
            <Grid container spacing={3}>  
              <Grid item xs={12} sm={6}>
                <TextField
                  //set label for input
                  label="Name"
                  //set name for input
                  name="name"
                  //set value for input
                  value={values.name}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set fullWidth for input
                  fullWidth
                  //textfield inputlabelprops shrink
                  InputLabelProps={{ shrink: true }}
                  //set error for input
                  error={touched.name && Boolean(errors.name)}
                  //set helper text for input
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  //set label for input
                  label="Description"
                  //set name for input
                  name="description"
                  //set value for input
                  value={values.description}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set fullWidth for input
                  fullWidth
                  //textfield inputlabelprops shrink
                  InputLabelProps={{ shrink: true }}
                  //set error for input
                  // error={touched.description && Boolean(errors.description)}
                  //set helper text for input
                  // helperText={touched.description && errors.description}
                />
              </Grid>
            </Grid>
            {/* //mui grid for styling and mui button for submit and set grid size for different screen sizes using xs, sm, md, lg, xl properties  */}
            <Grid container spacing={3} style={{ marginTop: "20px" }}>
              <Grid item xs={12} sm={6}>
                <Button
                  //set type for button
                  type="submit"
                  //set variant for button
                  variant="contained"
                  //set color for button
                  color="primary"
                  //set button width
                  fullWidth
                  //set disabled for button
                  disabled={isSubmitting}
                  //set height for button as textfield  height
                  style={{ height: "56px" }}
                  //set onclick event
                  onClick={() => {
                    isSubmitting= true;
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

export default UpdateUser;