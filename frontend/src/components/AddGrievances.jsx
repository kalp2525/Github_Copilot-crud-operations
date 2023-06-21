import styled from "@emotion/styled";
import React from "react";
//formik is used for form handling
//yup is used for validation
import { Formik } from "formik";
import * as Yup from "yup";
//navigate is used to navigate to other pages
//navigate is used in place of useHistory
//navigate is used in place of useLocation
//navigate is used in place of useParams
import { useNavigate } from "react-router-dom";
//mui typography for styling
import Typography from "@mui/material/Typography";
//mui grid for styling with spacing 2 and set direction to column for mobile view and row for desktop view and justify content to center
import { Grid } from "@mui/material";
//mui textfield for input
import { TextField } from "@mui/material";
//mui button for submit
import { Button } from "@mui/material";

const Container = styled("div")(() => ({
  padding: "15px 330px",
}));

const AddGrievances = () => {
  //useNavigate is used to navigate to other pages
  //useNavigate is used in place of useHistory
  //useNavigate is used in place of useLocation
  //useNavigate is used in place of useParams
  const navigate = useNavigate();

  return (
    <Container>
      {/* //add grievances label using mui typography for styling and set label in center using align property */}
      <Typography variant="h4" align="center" gutterBottom>
        Add Grievances
      </Typography>

      {/* //formik form for add grievances with yup for validation and material ui for styling and mui textfield for input */}
      <Formik
        initialValues={{
          parentsName: "",
          districtName: "",
          blockName: "",
          clusterName: "",
          schoolName: "",
          studentName: "",
          description: "",
          documentsUpload: "",
        }}
        validationSchema={Yup.object().shape({
          parentsName: Yup.string().required("Parents Name is required"),
          districtName: Yup.string().required("District Name is required"),
          blockName: Yup.string().required("Block Name is required"),
          clusterName: Yup.string().required("Cluster Name is required"),
          schoolName: Yup.string().required("School Name is required"),
          studentName: Yup.string().required("Student Name is required"),
        })}
        //onsubmit values submit and reset form using resetForm() and navigate to home page
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          //set values for submit form
          const formData = new FormData();
          formData.append("parents_name", values.parentsName);
          formData.append("district", values.districtName);
          formData.append("block", values.blockName);
          formData.append("cluster", values.clusterName);
          formData.append("school_name", values.schoolName);
          formData.append("student_name", values.studentName);
          formData.append("description", values.description);
          formData.append("documents", values.documentsUpload);

          resetForm();
          navigate("/");
        }}
      >
        {/* //formik form for add grievances with yup for validation and material ui
        for styling and mui textfield for input */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* //mui grid for styling with spacing 2 and set direction to column
            for mobile view and row for desktop view and justify content to
            center and mui grid item for styling with all breakpoints and mui
            textfield for input and mui button for submit */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="parentsName"
                  //set label for input
                  label="Parents Name"
                  //set value for input
                  value={values.parentsName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.parentsName && Boolean(errors.parentsName)}
                  //set helper text
                  helperText={touched.parentsName && errors.parentsName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="districtName"
                  //set label for input
                  label="District Name"
                  //set value for input
                  value={values.districtName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.districtName && Boolean(errors.districtName)}
                  //set helper text
                  helperText={touched.districtName && errors.districtName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="blockName"
                  //set label for input
                  label="Block Name"
                  //set value for input
                  value={values.blockName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.blockName && Boolean(errors.blockName)}
                  //set helper text
                  helperText={touched.blockName && errors.blockName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="clusterName"
                  //set label for input
                  label="Cluster Name"
                  //set value for input
                  value={values.clusterName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.clusterName && Boolean(errors.clusterName)}
                  //set helper text
                  helperText={touched.clusterName && errors.clusterName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="schoolName"
                  //set label for input
                  label="School Name"
                  //set value for input
                  value={values.schoolName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.schoolName && Boolean(errors.schoolName)}
                  //set helper text
                  helperText={touched.schoolName && errors.schoolName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="studentName"
                  //set label for input
                  label="Student Name"
                  //set value for input
                  value={values.studentName}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //set error if touched and errors
                  error={touched.studentName && Boolean(errors.studentName)}
                  //set helper text
                  helperText={touched.studentName && errors.studentName}
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  //set input type
                  type="text"
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                  //set multiline
                  multiline
                  //set number of rows
                  rows={1}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  //set name for input
                  name="documentsUpload"
                  //set label for input
                  label="Documents Upload"
                  //set value for input
                  value={values.documentsUpload}
                  //set onchange event
                  onChange={handleChange}
                  //set onblur event
                  onBlur={handleBlur}
                  //textfield inputlabelprops shrink set to true
                  InputLabelProps={{ shrink: true }}
                  //set input type
                  type="file"
                  //multiple files can be uploaded using inputProps
                  inputProps={{ multiple: true }}
                  //set input label
                  variant="outlined"
                  //set input width
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Button
                  //set button type
                  type="submit"
                  //set button variant
                  variant="contained"
                  //set button color
                  color="primary"
                  //set button width
                  fullWidth
                  //set button disable if submitting
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default AddGrievances;
