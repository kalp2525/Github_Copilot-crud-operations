import styled from '@emotion/styled';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
//useNavigate is used to navigate to other pages
//useNavigate is used in place of useHistory
//useNavigate is used in place of useLocation
//useNavigate is used in place of useParams
import { useNavigate } from 'react-router-dom';
//useEffect is used to get data from api
//useState is used to set data in state
import { useEffect, useState } from "react";
//axios is used to get data from api
import axios from "axios";
import { debounce } from 'lodash';

const Container = styled("div")(() => ({
    padding: "15px 330px",
}));

const Home = () => {
    //useNavigate is used to navigate to other pages
    //useNavigate is used in place of useHistory
    //useNavigate is used in place of useLocation
    //useNavigate is used in place of useParams
    const navigate = useNavigate();

    ////useeffect to get data from api with asybc and await function with fetch function
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetchData()
    }, []);

    //api call with axios with async and await function with axios function
    //debounce function is used to delay the api call
    const fetchData = debounce(async () => {
        try {
            const res = await fetch("http://localhost:5000/crud/");
            const json = await res.json();
            setData(json);
            setLoading(false);  
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    },300);

    //upadate user function for upadte user for specific user details navigate to update user page and set specific user id in url using navigate function and set data in update user page using state object
    const updateUser = (values) => {
        //navigate to update user page
        navigate(`/UpdateUser/${values._id}`, {
            //set data in update user page using state object
            //state object contains data of specific user
            //state object contains key value pair
            //key is the name of the field in form
            //value is the value of the field in form
            state: {
                data: values,
            },
        });
        console.log(values);
    };

    //delete user function for delete user for specific user details using id and pop up alert message for confirmation
    const deleteUser = (id) => {
        //pop up alert message for confirmation
        if (window.confirm("Are you sure you want to delete this user?")) {
            //delete user api call with delete method using fetch api with async and await for response and handle error using try and catch block and set data using useState
            //set data using useState
            const deleteUser = async (id) => {
                try {
                    const response = await fetch(`http://localhost:5000/crud/delete/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    console.log(response);
                    const result = await response.json();
                    console.log(result);
                    // setData(result);
                    fetchData();
                } catch (error) {
                    console.log(error);
                }
            };
            //delete user function call
            deleteUser(id);
        }
    };  

  return (
    <Container>
        <div
        //style for add user button
        style={{
            display: "flex",
            justifyContent: "Center",
            marginBottom: "30px",
        }}
        >
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
                //pop up alert message for confirmation add user
                // if (window.confirm("Are you sure you want to add user?")) {
                    navigate("/AddUser");
                // }       
            }}
            >
            Add User
            </Button>
        </div>
        {/* //mui table for crud operations */}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell style={{display:"none"}}>ID</TableCell>
                <TableCell>Name</TableCell>
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
                    {row.name}
                    </TableCell>
                    <TableCell align="center" style={{display:"none"}}>{row.description}</TableCell>
                    <TableCell align="right">
                        <Button
                        variant="contained"
                        color="primary"
                        //set onclick event
                        onClick={() => {
                            //navigate to edit user page on click using navigate function
                            //navigate function is imported from react-router-dom
                            //navigate function takes path as argument
                            //path is the path of the page to navigate
                            //path is defined in App.js
                            //navigate page with id
                            // navigate(`/UpdateUser/${row._id}`);
                            // updateUser(row);

                            //upadte user function for selected user details navigate to update user page and set specific user id in url using navigate function and set data in update user page using state object
                            //pop up alert message for confirmation update user
                            // if (window.confirm("Are you sure you want to update this user?")) {
                                // updateUser(row, singleUser(row._id));
                                updateUser(row);
                            // }
                        }}
                        >
                        Edit
                        </Button>
                        <Button
                        variant="contained"
                        color="secondary"
                        //set onclick event
                        onClick={() => {
                            //delete user function for delete user for specific user details using id and pop up alert message for confirmation
                            deleteUser(row._id);
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

export default Home;