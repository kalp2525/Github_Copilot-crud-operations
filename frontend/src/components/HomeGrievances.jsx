import styled from '@emotion/styled';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
//useNavigate is used to navigate to other pages
//useNavigate is used in place of useHistory
//useNavigate is used in place of useLocation
//useNavigate is used in place of useParams
import { useNavigate } from 'react-router-dom';

const Container = styled("div")(() => ({
    padding: "15px 30px",
}));

const HomeGrievances = () => {
    //useNavigate is used to navigate to other pages
    //useNavigate is used in place of useHistory
    //useNavigate is used in place of useLocation
    //useNavigate is used in place of useParams
    const navigate = useNavigate();

    //create data array for table
    const data = {
        data: [
            {
                _id: "1",
                parents_name:"Parents 1",
                district:"District 1",
                block:"Block 1",
                cluster:"Cluster 1",
                school_name:"School 1",
                student_name:"Student 1",
                description: "Grievances 1 description"
            },
            {
                _id: "2",
                name: "Grievances 2",
                parents_name:"Parents 2",
                district:"District 2",
                block:"Block 2",
                cluster:"Cluster 2",
                school_name:"School 2",
                student_name:"Student 2",
                description: "Grievances 2 description"
            },
            {
                _id: "3",
                name: "Grievances 3",
                parents_name:"Parents 3",
                district:"District 3",
                block:"Block 3",
                cluster:"Cluster 3",
                school_name:"School 3",
                student_name:"Student 3",
                description: "Grievances 3 description"
            },
            {
                _id: "4",
                name: "Grievances 4",
                parents_name:"Parents 4",
                district:"District 4",
                block:"Block 4",
                cluster:"Cluster 4",
                school_name:"School 4",
                student_name:"Student 4",
                description: "Grievances 4 description"
            },
            {
                _id: "5",
                name: "Grievances 5",
                parents_name:"Parents 5",
                district:"District 5",
                block:"Block 5",
                cluster:"Cluster 5",
                school_name:"School 5",
                student_name:"Student 5",
                description: "Grievances 5 description"
            },
            {
                _id: "6",
                name: "Grievances 6",
                parents_name:"Parents 6",
                district:"District 6",
                block:"Block 6",
                cluster:"Cluster 6",
                school_name:"School 6",
                student_name:"Student 6",
                description: "Grievances 6 description"
            },
            {
                _id: "7",
                name: "Grievances 7",
                parents_name:"Parents 7",
                district:"District 7",
                block:"Block 7",
                cluster:"Cluster 7",
                school_name:"School 7",
                student_name:"Student 7",
                description: "Grievances 7 description"
            },
        ]
    }

  return (
    <Container>
        {/* //style for add user button */}
        <div style={{ 
            // textAlign: "right"
            display: "flex",
            justifyContent: "center"
            }}>
            {/* //add Grievances button */}
            <Button
                variant="contained"
                color="primary"
                //set onclick event
                onClick={() => {
                    //navigate to add user page on click using navigate function
                    //navigate function is imported from react-router-dom
                    //navigate function takes path as argument
                    //path is the path of the page to navigate
                    //path is defined in App.js
                    //sweel alert message for confirmation add user
                    // if (window.confirm("Are you sure you want to add user?")) {
                        navigate("/AddGrievance");
                    // }
                }}
            >
                Add Grievances
            </Button>
        </div>

        {/* //mui table for Grievances crud operations */}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell style={{display:"none"}}>ID</TableCell>
                <TableCell>Parents Name</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Block</TableCell>
                <TableCell>Cluster</TableCell>
                <TableCell>School Name</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell align="center" style={{display:"none"}}>Description</TableCell>
                <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.data && data.data.map((row) => (
                <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left" style={{display:"none"}}>{row._id}</TableCell>
                    <TableCell component="th" scope="row">
                    {row.parents_name}
                    </TableCell>
                    <TableCell>{row.district}</TableCell>
                    <TableCell>{row.block}</TableCell>
                    <TableCell>{row.cluster}</TableCell>
                    <TableCell>{row.school_name}</TableCell>
                    <TableCell>{row.student_name}</TableCell>
                    <TableCell style={{display:"none"}}>{row.description}</TableCell>
                    <TableCell align="right">
                        <Button
                        variant="contained"
                        color="primary"
                        //set onclick event
                        onClick={() => {
                            //navigate to update user page on click using navigate function
                            //navigate function is imported from react-router-dom

                            //navigate function takes path as argument
                            //path is the path of the page to navigate
                            //path is defined in App.js
                            //sweet alert message for confirmation update user
                            // if (window.confirm("Are you sure you want to update user?")) {
                                navigate("/UpdateGrievance/" + row._id);
                            // }
                        }}
                        >
                        Update
                        </Button>
                        <Button
                        variant="contained"
                        color="secondary"
                        //set onclick event
                        onClick={() => {
                            //sweet alert message for confirmation delete user
                            // if (window.confirm("Are you sure you want to delete user?")) {
                                //call delete user api using axios
                                //pass id as argument to deleteUser function
                                //deleteUser function is imported from api.js
                                //deleteUser function takes id as argument
                                //id is the id of the user to be deleted
                                //deleteUser function returns response
                                //response is the response of the api
                                //response is defined in api.js
                                //response is used to check if user is deleted or not
                                //if user is deleted then show alert message user deleted successfully
                                //if user is not deleted then show alert message user not deleted successfully
                                // if (deleteUser(row._id)) {
                                //     alert("User deleted successfully");
                                // } else {
                                //     alert("User not deleted successfully");
                                // }
                            // }
                        }}
                        >   
                        Delete
                        </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </Container>
  )
}

export default HomeGrievances;