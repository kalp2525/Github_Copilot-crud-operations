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

const Container = styled("div")(() => ({
  padding: "15px 12px",
}));

const UpdateUser = () => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();

  //set data in update user form when click on update user button of specific user in table using useLocation
  //useLocation is used to get data from previous page
  
  const location = useLocation();
  //set data in update user form using setValues function
  //setValues function is imported from formik
  //setValues function takes object as argument
  //object contains data to set in form
  //object contains key value pair
  //key is the name of the field in form
  //value is the value of the field in form
  //setValues function is used in place of setFieldValue
  // setValues({
  //   name: location.state.name,
  //   email: location.state.email,
  //   phone: location.state.phone,
  // });

  return (
    <Container>
      {/* //upadte user label using mui typography for styling and set label in center using align property */}
      <Typography variant="h4" align="center" gutterBottom>
        Update User
      </Typography>

      {/* //update user form using formik and yup for validation and material ui for styling and mui textfield for input */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        //validation using yup
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          phone: Yup.string().required("Required"),
        })}
        //onsubmit function
        onSubmit={(values, { setSubmitting }) => {
          //setSubmitting is used to disable submit button
          setSubmitting(true);
          //set values for submit
          values = {
            name: values.name,
            email: values.email,
            phone: values.phone,
          };
          //alert values
          alert(JSON.stringify(values, null, 2));
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
                  //set error for input
                  error={touched.name && Boolean(errors.name)}
                  //set helper text for input
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  //set label for input   
                  label="Email"
                  //set name for input
                  name="email"
                  //set value for input
                  value={values.email}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set fullWidth for input
                  fullWidth
                  //set error for input
                  error={touched.email && Boolean(errors.email)}
                  //set helper text for input
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  //set label for input
                  label="Phone"
                  //set name for input
                  name="phone"
                  //set value for input
                  value={values.phone}
                  //set onchange event
                  onChange={handleChange} 
                  //set onblur event
                  onBlur={handleBlur}
                  //set fullWidth for input
                  fullWidth
                  //set error for input
                  error={touched.phone && Boolean(errors.phone)}
                  //set helper text for input
                  helperText={touched.phone && errors.phone}
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
                    //on click navigate to home page
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

export default UpdateUser;