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

const Container = styled("div")(() => ({
  padding: "15px 12px",
}));

const AddUser = () => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();
  
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
          //setSubmitting is used to disable submit button
          setSubmitting(false);
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
                  name="email"
                  //set label for input
                  label="Email"
                  //set value for input
                  value={values.email}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error message
                  error={touched.email && Boolean(errors.email)}
                  //set helper text
                  helperText={touched.email && errors.email}
                  //set input type
                  type="email"
                  //set input placeholder
                  placeholder="Enter email"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  //set name for input
                  name="phone"
                  //set label for input
                  label="Phone"
                  //set value for input
                  value={values.phone}  
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error message
                  error={touched.phone && Boolean(errors.phone)}
                  //set helper text
                  helperText={touched.phone && errors.phone}
                  //set input type
                  type="text"
                  //set input placeholder
                  placeholder="Enter phone"
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