import styled from '@emotion/styled';
import React from 'react';
//useNavigate is used to navigate to other pages
//useNavigate is used in place of useHistory
//useNavigate is used in place of useLocation
//useNavigate is used in place of useParams
import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const Container = styled("div")(() => ({
    padding: "15px 330px",
}));

const UpdateGrievances = () => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();

  return (
    <Container>
      {/* //update grievance label mui typography for styling and set label in center using align property */}
      <Typography variant="h4" align="center" gutterBottom>
        Update Grievance
      </Typography>
      
      {/* //formik form for update grievance and yup for validation of form and mui for styling and mui textfield for input field */}
      <Formik
        initialValues={{
          parents_name: "",
          district: "",
          block: "",
          cluster: "",
          school_name: "",
          student_name: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          parents_name: Yup.string().required("Parents Name is required"),
          district: Yup.string().required("District is required"),
          block: Yup.string().required("Block is required"),
          cluster: Yup.string().required("Cluster is required"),
          school_name: Yup.string().required("School Name is required"),
          student_name: Yup.string().required("Student Name is required"),
        })}
        //onsubmit function for update grievance and reset form using resetForm function and navigate to home page using navigate function
        onSubmit={(values, { resetForm }) => {
          //set values for submit form
          values = {
            parents_name: values.parents_name,
            district: values.district,
            block: values.block,
            cluster: values.cluster,
            school_name: values.school_name,
            student_name: values.student_name,
            description: values.description,
          };
          //reset form after submit form
          resetForm();
          //navigate to home page after submit form
          navigate("/");
        }}
      >
        {/* //formik form for update grievance and yup for validation of form and mui for styling and mui textfield for input field */}
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form onSubmit={handleSubmit}>
            {/* //mui grid for styling and mui textfield for input field and mui button for submit form and mui grid item with all breakpoints */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="parents_name"
                  //set label for textfield
                  label="Parents Name"
                  //set value for textfield
                  value={values.parents_name}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.parents_name && errors.parents_name)}
                  //set helperText for textfield
                  helperText={touched.parents_name && errors.parents_name}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="district"
                  //set label for textfield
                  label="District"
                  //set value for textfield
                  value={values.district}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.district && errors.district)}
                  //set helperText for textfield
                  helperText={touched.district && errors.district}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="block"
                  //set label for textfield
                  label="Block"
                  //set value for textfield
                  value={values.block}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.block && errors.block)}
                  //set helperText for textfield
                  helperText={touched.block && errors.block}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="cluster"
                  //set label for textfield
                  label="Cluster"
                  //set value for textfield
                  value={values.cluster}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.cluster && errors.cluster)}
                  //set helperText for textfield
                  helperText={touched.cluster && errors.cluster}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="school_name"
                  //set label for textfield
                  label="School Name"
                  //set value for textfield
                  value={values.school_name}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.school_name && errors.school_name)}
                  //set helperText for textfield
                  helperText={touched.school_name && errors.school_name}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="student_name"
                  //set label for textfield
                  label="Student Name"
                  //set value for textfield
                  value={values.student_name}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.student_name && errors.student_name)}
                  //set helperText for textfield
                  helperText={touched.student_name && errors.student_name}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="description"
                  //set label for textfield
                  label="Description"
                  //set value for textfield
                  value={values.description}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //set error for textfield
                  error={Boolean(touched.description && errors.description)}
                  //set helperText for textfield
                  helperText={touched.description && errors.description}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                  //set multiline for textfield
                  multiline
                  //set rows for textfield
                  rows={1}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for textfield
                  name="upload_document"
                  //set label for textfield
                  label="Upload Document"
                  //set value for textfield
                  value={values.upload_document}
                  //set onChange event for textfield
                  onChange={handleChange}
                  //set onBlur event for textfield
                  onBlur={handleBlur}
                  //textfield inputlabelprops shrink true
                  InputLabelProps={{ shrink: true }}
                  //set input type file
                  type="file"
                  //multiple files can be uploaded using inputprops
                  inputProps={{ multiple: true }}
                  //set variant for textfield
                  variant="outlined"
                  //set fullWidth for textfield
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Button
                  //set type for button
                  type="submit"
                  //set variant for button
                  variant="contained"
                  //set color for button
                  color="primary"
                  //set fullWidth for button
                  fullWidth
                >
                  Update Grievance
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>          
    </Container>
  )
}

export default UpdateGrievances;